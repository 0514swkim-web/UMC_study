# UMC 스터디 (web_study)

UMC 웹 스터디 워크북 실습 저장소. 매주 워크북을 섹션 순서대로 풀고, 미니 실습과 미션을 기록한다.

## 답변 방식
- 한국어 반말, 친구처럼. 인사·감성적인 도입부 없이 바로 본론
- 나는 경영학 → AI 전공 편입생이라 CS 기초가 약함. 어려운 개념은 **일상 비유**로 설명
- **정답 코드를 먼저 작성하고, 각 부분이 어떻게/왜 동작하는지 설명** (새 개념은 표로 정리)
- 확인 방법은 번호 체크리스트로 (어느 화면에서 뭘 누르면 뭐가 보여야 하는지)
- 명령어는 Windows PowerShell 기준

## 저장소 구조
- `C:\Dev\web_study` = GitHub `0514swkim-web/UMC_study`
- `week_N/umcine` : 프론트 프로젝트 (매주 이전 주차를 복사해서 이어감)
- `backend/nest-study` : NestJS 백엔드
- 워크북 이름 규칙: `N_M` = N주차 M번째 워크북

## umcine 스택과 명령어
- Vite + React + TypeScript, pnpm, TanStack Router(파일 기반 `src/routes`), Tailwind CSS v4, `cn` 유틸(clsx + tailwind-merge)
- 개발 서버 `pnpm dev`는 **내가 직접 켜둠** (Claude는 실행하지 않음)
- 타입 체크: `pnpm exec tsc -p tsconfig.app.json --noEmit` (`pnpm tsc`는 안 됨)
- 빌드: `pnpm build`
- 새 주차 복사: `robocopy week_3\umcine week_4\umcine /E /XD node_modules dist docs` (종료 코드 1은 정상)

## 워크북 진행 방식
1. 내가 워크북 섹션을 붙여넣으면, 개념 섹션은 표+비유로 짧게, 실습 섹션은 코드 작성 + 설명
2. 코드 수정 후에는 **타입 체크를 직접 돌려서 통과 확인**하고 결과를 보여줄 것
3. 브라우저 확인(새로고침, Application 패널 등)은 내가 하고 결과를 알려줌
4. 미니 실습이 끝나면 `/practice-record`로 커밋·태그·기록
5. 워크북에 "미니 실습"이라고 안 적혀 있어도 코드가 단계별로 크게 바뀌는 지점은 미니 실습처럼 따로 기록

## Git 규칙
- 커밋 메시지: `접두사(weekN): 한글 설명` / 접두사 `chore` `feat` `fix` `docs` `practice` / 미션은 `feat(weekN-mission)`
- **IMPORTANT: `git add .` 금지.** 항상 파일 경로를 지정해서 커밋끼리 섞이지 않게
- 커밋 전 `git status`로 목록 확인
- `.env`는 절대 커밋·출력하지 않음

## 관련 스킬
- `/practice-record` : 미니 실습 커밋 + 태그 + PRACTICE.md 기록
- `/troubleshooting` : 트러블슈팅 기록 (UMC 양식)
- `/mission-record` : 미션 마무리 점검 + 노션 제출용 기록

## 현재 진행: 4_1 (Web Storage + Zustand)
- 목표: 북마크를 Zustand로 목록/검색/상세에서 공유 + `persist`로 localStorage 유지
- 미니 실습 계획
  - [3] useState + localStorage로 북마크 유지 (`src/utils/bookmark-storage.ts`) → `week4-practice-bookmark-localstorage`
  - [4.2] Zustand store + `BookmarkButton` → `week4-practice-zustand-store`
  - [5.1] `persist` 적용 (key `umcine-bookmark-store`) → `week4-practice-zustand-persist`
- 필수 미션: 3화면 북마크 공유, 새로고침·브라우저 재실행 유지, 저장값 삭제 시 빈 상태 복구, `pnpm build`
