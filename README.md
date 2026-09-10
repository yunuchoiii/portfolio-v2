# 최서원 포트폴리오

사람의 시선과 흐름을 먼저 떠올리는 프론트엔드 개발자 **최서원**의 포트폴리오 웹사이트입니다.

**Live** → [https://seowonchoiii.vercel.app](https://seowonchoiii.vercel.app)

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Content | 마크다운 (`public/content/projects/*.md`) |
| Deploy | Vercel |

---

## 섹션 구성

- **Home** — 인트로 및 간단한 소개
- **About** — 경력, 학력, 수상 이력
- **Skills** — 기술 스택 및 소프트 스킬
- **Projects** — 회사 프로젝트 및 개인 프로젝트
- **Contact** — 연락처 및 링크

---

## 로컬 실행

```bash
yarn install
yarn dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

---

## 프로젝트 상세 내용

각 프로젝트의 상세 본문은 `public/content/projects/<contentSlug>.md` 에 있습니다.
**이 파일이 정본입니다.** 외부 서비스를 거치지 않고 여기서 직접 고치면 됩니다.

프로젝트와 파일은 `constant/project.ts` 의 `contentSlug` 로 연결됩니다.

```ts
{
  title: "루틴 아일랜드",
  contentSlug: "routine-island",   // → public/content/projects/routine-island.md
  ...
}
```

`contentSlug` 가 없으면 상세 모달에서 본문 영역이 그냥 그려지지 않습니다.
이미지·기술 태그·기간은 그대로 나오므로, 본문이 아직 없는 프로젝트는 비워두면 됩니다.

### 쓸 수 있는 문법

`react-markdown` + `remark-gfm` 으로 그립니다. 스타일은 `app/globals.css` 의
`.project-content` 에 있습니다.

| 문법 | 결과 |
|------|------|
| `## 제목` | 섹션 제목 (초록–파랑 그라디언트) |
| `### 소제목` | 하위 제목 |
| `- 항목` | 불릿 목록 |
| `**강조**` | 굵게 |
| `` `코드` `` | 인라인 코드 (초록) |
| `[링크](url)` | 링크 |
| `> 인용` | 인용 블록 |

### ⚠️ 한국어에서 `**강조**` 가 안 먹는 경우

닫는 `**` **앞이 구두점이고 뒤에 글자가 바로 붙으면** 마크다운이 강조로 보지 않고
별표를 그대로 출력합니다. 한국어는 조사가 바로 붙어서 자주 걸립니다.

```markdown
**"자연스러운 환경"**을 만들었습니다.      <!-- ✗ 별표가 그대로 보임 -->
**관리자(Admin)**와 대시보드를 구축        <!-- ✗ -->
**Optimistic Update**를 활용               <!-- ✓ 앞이 글자라 정상 -->
```

이럴 때만 `<strong>` 을 씁니다. `rehype-raw` 가 붙어 있어 그대로 렌더됩니다.

```markdown
<strong>"자연스러운 환경"</strong>을 만들었습니다.
<strong>관리자(Admin)</strong>와 대시보드를 구축
```

기존 파일에 `<strong>` 이 섞여 있는 건 전부 이 이유입니다. 그 외에는 평범한 `**` 를 씁니다.

---

## 링크

- GitHub: [github.com/yunuchoiii](https://github.com/yunuchoiii)
- LinkedIn: [linkedin.com/in/seowon-choi-677844241](https://www.linkedin.com/in/seowon-choi-677844241)
