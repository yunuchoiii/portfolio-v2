/**
 * 노션 프로젝트 페이지를 마크다운으로 내려받아 public/content/projects/ 에 저장한다.
 *
 *   node scripts/sync-notion-content.mjs
 *
 * 노션 비공식 API(api/v3)는 Cloudflare 뒤에 있어 서버 런타임에서 호출하면 403으로 막힌다.
 * 그래서 런타임에 부르지 않고, 내용이 바뀔 때 이 스크립트를 손으로 돌려 결과를 커밋한다.
 * 대상 목록은 constant/project.ts 의 contentSlug + notionId 쌍에서 읽는다 — 출처를 한 곳에 둔다.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = path.join(ROOT, 'constant/project.ts');
const OUT_DIR = path.join(ROOT, 'public/content/projects');

// 기본 UA로 보내면 Cloudflare가 403을 준다. 실측: UA 없음 403 / 브라우저 UA 200.
const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

const dashed = (id) =>
  `${id.slice(0, 8)}-${id.slice(8, 12)}-${id.slice(12, 16)}-${id.slice(16, 20)}-${id.slice(20, 32)}`;

/** constant/project.ts 에서 (contentSlug, notionId) 쌍을 뽑는다. 주석 처리된 줄은 무시한다. */
async function readTargets() {
  const src = await fs.readFile(SOURCE, 'utf8');
  const lines = src.split('\n').filter((l) => !l.trim().startsWith('//'));

  // title 이 나올 때마다 새 프로젝트로 넘어간다. 필드 순서에는 기대지 않는다.
  const projects = [];
  let current = null;

  for (const line of lines) {
    const t = line.match(/title:\s*"([^"]+)"/);
    if (t) {
      current = { title: t[1] };
      projects.push(current);
      continue;
    }
    if (!current) continue;

    const s = line.match(/contentSlug:\s*"([a-z0-9-]+)"/);
    if (s) current.slug = s[1];

    const n = line.match(/notionId:\s*"([0-9a-f]{32})"/);
    if (n) current.notionId = n[1];
  }

  const targets = [];
  for (const { title, slug, notionId } of projects) {
    if (!notionId) continue;
    if (!slug) {
      console.warn(`  건너뜀: "${title}" 에 contentSlug 가 없다`);
      continue;
    }
    targets.push({ title, slug, notionId });
  }
  return targets;
}

async function loadPageChunk(notionId) {
  const res = await fetch('https://www.notion.so/api/v3/loadPageChunk', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'user-agent': USER_AGENT },
    body: JSON.stringify({
      pageId: dashed(notionId),
      limit: 500,
      cursor: { stack: [] },
      chunkNumber: 0,
      verticalColumns: false,
    }),
  });
  if (!res.ok) throw new Error(`loadPageChunk ${res.status}`);
  const data = await res.json();
  const block = data?.recordMap?.block ?? {};
  if (Object.keys(block).length === 0) {
    throw new Error('빈 응답 — 페이지가 웹에 공개되지 않았을 수 있다');
  }
  return block;
}

/**
 * 마크다운 문법으로 잘못 읽힐 글자만 막는다.
 * 대괄호는 뒤에 "(" 가 붙어 링크로 읽힐 때만 막는다 — "[대시보드]" 같은 표기가 흔해서
 * 무조건 이스케이프하면 본문이 역슬래시 범벅이 된다.
 */
function escapeMd(s) {
  let out = s.replace(/([\\`*])/g, '\\$1');

  // 노션 본문에 굵게 서식 대신 "**강조**" 를 글자로 적어둔 자리가 있다.
  // 노션에서는 별표가 그대로 보이지만 의도는 명백히 강조이므로 진짜 강조로 살린다.
  out = out.replace(/\\\*\\\*(.+?)\\\*\\\*/g, '**$1**');

  if (/\]\(/.test(out)) out = out.replace(/([[\]])/g, '\\$1');
  return out;
}

/** 노션 rich text([[텍스트, [[서식]]], ...]) 를 마크다운 인라인으로 바꾼다. */
function renderRichText(title) {
  if (!Array.isArray(title)) return '';

  return title
    .map(([text, decorations]) => {
      if (typeof text !== 'string') return '';

      const kinds = Array.isArray(decorations) ? decorations : [];

      // 코드는 안쪽 내용을 그대로 둬야 하므로 이스케이프 대신 백틱으로 감싼다
      const isCode = kinds.some(([kind]) => kind === 'c');
      let out = isCode ? `\`${text}\`` : escapeMd(text);

      // 링크가 가장 바깥으로 나오도록 강조를 먼저 감싼다
      for (const [kind] of kinds) {
        if (kind === 'b') out = `**${out}**`;
        else if (kind === 'i') out = `*${out}*`;
        else if (kind === 's') out = `~~${out}~~`;
      }
      const link = kinds.find(([kind]) => kind === 'a');
      if (link) out = `[${out}](${link[1]})`;

      return out;
    })
    .join('');
}

/**
 * CommonMark 는 닫는 "**" 앞이 구두점이고 뒤가 글자면 강조 종료로 보지 않는다.
 * 한국어 본문에서는 **"...환경"**을, **관리자(Admin)**의 처럼 닫는 따옴표·괄호 뒤에
 * 조사가 바로 붙는 형태가 흔해서 별표가 그대로 노출된다.
 * 마크다운으로 표현할 수 없는 이 자리들만 <strong> 으로 바꾼다(react-markdown + rehype-raw 가 렌더).
 */
function fixKoreanBold(md) {
  return md.replace(/\*\*((?:(?!\*\*)[\s\S])+?)\*\*(.?)/g, (match, inner, next) => {
    // JS의 \w 는 ASCII만 잡으므로 한글이 걸러진다. 유니코드 속성으로 판정한다.
    const closesAfterPunctuation = /\p{P}$/u.test(inner);
    const followedByWord = next !== '' && /[\p{L}\p{N}]/u.test(next);
    if (closesAfterPunctuation && followedByWord) {
      return `<strong>${inner}</strong>${next}`;
    }
    return match;
  });
}

/** 노션 블록 하나를 마크다운 한 덩어리로 바꾼다. 버릴 블록이면 null. */
function renderBlock(value) {
  const text = fixKoreanBold(renderRichText(value.properties?.title));

  switch (value.type) {
    case 'header':
      return text && `## ${text}`;
    case 'sub_header':
      return text && `## ${text}`;
    case 'sub_sub_header':
      return text && `### ${text}`;
    case 'text':
      return text || null;
    case 'bulleted_list':
      return text && `- ${text}`;
    case 'numbered_list':
      return text && `1. ${text}`;
    case 'quote':
      return text && `> ${text}`;
    case 'to_do':
      return text && `- [${value.properties?.checked?.[0]?.[0] === 'Yes' ? 'x' : ' '}] ${text}`;
    case 'code': {
      const lang = value.properties?.language?.[0]?.[0] ?? '';
      const raw = (value.properties?.title ?? []).map(([t]) => t).join('');
      return `\`\`\`${lang.toLowerCase()}\n${raw}\n\`\`\``;
    }
    case 'divider':
      return '---';
    case 'callout':
      return text && `> ${text}`;
    case 'page':
      return null; // 페이지 제목은 constant/project.ts 의 title 이 정본이다
    default:
      return null;
  }
}

function toMarkdown(block) {
  const resolve = (id) => {
    const entry = block[id];
    if (!entry) return null;
    return entry.value?.value ?? entry.value ?? null;
  };

  const page = Object.values(block)
    .map((e) => e.value?.value ?? e.value)
    .find((v) => v?.type === 'page');
  if (!page) throw new Error('page 블록을 찾지 못했다');

  const chunks = [];
  let skipped = 0;

  for (const id of page.content ?? []) {
    const value = resolve(id);
    if (!value) continue;
    const rendered = renderBlock(value);
    if (rendered === null) {
      if (value.type !== 'page') skipped++;
      continue;
    }
    chunks.push(rendered);
  }

  // 연속된 리스트 항목은 붙이고, 그 외에는 빈 줄로 띄운다
  let md = '';
  chunks.forEach((chunk, i) => {
    const prev = chunks[i - 1];
    const bothList = prev && /^([-*]|\d+\.|- \[)/.test(prev) && /^([-*]|\d+\.|- \[)/.test(chunk);
    md += (i === 0 ? '' : bothList ? '\n' : '\n\n') + chunk;
  });

  return { markdown: md.trim() + '\n', skipped, blockCount: (page.content ?? []).length };
}

async function main() {
  const targets = await readTargets();
  if (targets.length === 0) {
    console.error('대상이 없다. constant/project.ts 에 contentSlug 가 있는지 확인할 것.');
    process.exitCode = 1;
    return;
  }

  await fs.mkdir(OUT_DIR, { recursive: true });

  const seen = new Map();
  let failed = 0;

  for (const { title, slug, notionId } of targets) {
    if (seen.has(notionId)) {
      console.warn(`⚠  ${slug}: notionId 가 "${seen.get(notionId)}" 와 같다 — 같은 내용이 두 번 받아진다`);
    }
    seen.set(notionId, slug);

    try {
      const block = await loadPageChunk(notionId);
      const { markdown, skipped, blockCount } = toMarkdown(block);
      await fs.writeFile(path.join(OUT_DIR, `${slug}.md`), markdown, 'utf8');
      const note = skipped ? `, 미지원 블록 ${skipped}개 버림` : '';
      console.log(`✓ ${slug}.md  (${title} — ${blockCount} blocks${note}, ${markdown.length}자)`);
    } catch (error) {
      failed++;
      console.error(`✗ ${slug}  (${title}): ${error.message}`);
    }
  }

  if (failed) process.exitCode = 1;
}

await main();
