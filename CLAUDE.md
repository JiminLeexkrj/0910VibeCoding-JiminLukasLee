# 프로젝트 개요

개인 소개 페이지 (1페이지). 이름, 소개 글, 관심사, 링크 등을 보여주는 단순한 자기소개 사이트.

# 기술 스택

- Next.js (App Router)
- TypeScript
- Tailwind CSS

# 범위

- 페이지는 1개(단일 페이지)로 구성. 소개 글 / 관심사 / 링크 섹션이면 충분함.
- 라우팅, 다중 페이지, 블로그 등 추가 기능은 만들지 않음.

# 데이터

- 모든 콘텐츠(이름, 소개, 관심사, 링크 등)는 로컬 JSON 파일에서 읽어온다 (예: `data/profile.json`).
- DB 연동은 지금 하지 않음 — 나중에 별도로 진행 예정.

# 하지 말 것

- Vercel 배포 설정/작업 금지 (나중에 별도 진행)
- Supabase 등 백엔드/DB 연동 금지 (나중에 별도 진행)
- 위 범위를 벗어나는 기능(다중 페이지, 인증, API 라우트 등) 추가 금지

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
