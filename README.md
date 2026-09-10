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

각 프로젝트의 상세 본문은 `public/content/projects/<contentSlug>.md` 에 마크다운으로
들어 있습니다. 런타임에 노션을 호출하지 않으므로 외부 상황에 영향을 받지 않습니다.

내용은 노션에서 작성하고, 바뀌면 아래를 돌려 마크다운을 다시 받아 커밋합니다.

```bash
yarn sync:content
```

대상은 `constant/project.ts` 의 `contentSlug` + `notionId` 쌍에서 읽습니다.
노션 페이지가 **웹에 공개**되어 있어야 받아집니다.

---

## 링크

- GitHub: [github.com/yunuchoiii](https://github.com/yunuchoiii)
- LinkedIn: [linkedin.com/in/seowon-choi-677844241](https://www.linkedin.com/in/seowon-choi-677844241)
