# UMC 스터디 (web_study) — Claude Code 안내서

이 파일은 claude.ai 채팅에서 1~4주차를 진행하며 정해온 방식을 정리한 것. 아래 방식 그대로 이어서 진행해줘.

---

## 1. 나에 대해 / 답변 방식

- 경영학 → AI 전공 편입 3학년. CS 기초가 약함
- 한국어 반말, 친구처럼. 인사·감성적인 도입부 없이 바로 본론
- 어려운 개념은 **일상 비유**로 설명 (예: 커밋 = 프로젝트 사진, 태그 = 사진에 붙인 이름표)
- **정답 코드를 먼저 주고, 각 부분이 어떻게/왜 동작하는지 설명**
  - 코드 안에 짧은 주석, 코드 아래에 새로 나온 개념을 쉬운 말로 정리
- 명령어는 **Windows PowerShell** 기준, 어느 터미널(위치)에서 치는지 항상 명시
- 개념 정리는 **표**를 자주 사용 (용어 / 뜻 / 이번 주 예시)
- 확인 방법은 번호 체크리스트로 (어느 화면에서 뭘 누르면 뭐가 보여야 하는지)
- 내가 결과(스크린샷/로그)를 보내면 → 확인 → 커밋 명령 → 다음 단계 순서로 진행

---

## 2. 환경 / 저장소

- 로컬: `C:\Dev\web_study` = GitHub `0514swkim-web/UMC_study` (Public), 폴더 전체가 저장소 하나
- 주차별 폴더: `week_0` ~ `week_N`
- 백엔드는 `backend/` 아래 (NestJS: `backend/nest-study`)
- 패키지 매니저: pnpm

### 터미널 2개 규칙
| 터미널 | 위치 | 용도 |
|---|---|---|
| pnpm 터미널 | `C:\Dev\web_study\week_N\umcine` | `pnpm dev`, `pnpm add`, `pnpm build` |
| Git 터미널 | `C:\Dev\web_study` | `git add/commit/tag/push` |

### 프론트 프로젝트: umcine (영화 목록 앱, 8주차까지 이어짐)
- Vite + React + TypeScript, TanStack Router(파일 기반), Tailwind CSS v4(`@tailwindcss/vite`), `cn` 유틸(clsx + tailwind-merge)
- 라우트: `__root.tsx`(Header/Outlet/Footer), `index.tsx`(/), `search.tsx`(/search?query=, `validateSearch`), `movies.$movieId.tsx`(상세)
- 매주 이전 주차 umcine를 복사해서 시작:
  ```powershell
  # web_study에서
  robocopy week_3\umcine week_4\umcine /E /XD node_modules dist docs
  ```
  (robocopy 종료 코드 1은 정상)
- 타입 체크: `pnpm tsc`는 안 됨 → `pnpm exec tsc -p tsconfig.app.json --noEmit`
- `pnpm build` = `tsc -b && vite build` (타입 검사 + 배포 파일 생성), `dist`는 gitignore

---

## 3. 워크북 진행 흐름

워크북 파일 이름 규칙: `N_M` = N주차 M번째 워크북 (예: 4_1)

1. 워크북 섹션 순서대로 진행 (내가 섹션 내용을 붙여넣음)
2. 개념만 있는 섹션 → 표 하나 + 비유로 짧게 요약
3. 실습 섹션 → 정답 코드 + 설명 + 확인 체크리스트
4. 미니 실습이 끝나면 → practice 커밋 + 태그 → PRACTICE.md 기록 → docs 커밋
5. 섹션이 끝날 때 "다음 섹션 붙여줘" 식으로 넘어가기
6. 워크북에 "미니 실습"이라고 안 적혀 있어도, 코드가 단계별로 크게 바뀌는 지점은 미니 실습처럼 따로 커밋+기록 (스터디 때 변화 과정을 보여주기 위해)

---

## 4. Git 규칙

### 커밋 메시지
`접두사(weekN): 한글 설명`
| 접두사 | 용도 |
|---|---|
| `chore` | 세팅, 복사, 설정 |
| `feat` | 기능 추가 |
| `fix` | 버그 수정 |
| `docs` | PRACTICE.md, 스크린샷, 문서 |
| `practice` | 미니 실습 결과 (태그 붙임) |
- 미션 작업은 `feat(week3-mission): ...`처럼 표기

### 원칙
- `git add .` 대신 **경로를 지정**해서 커밋끼리 섞이지 않게 (`git add week_4/umcine/src/...`)
- 커밋 전 `git status`로 목록 확인
- 되돌리기: `git restore <경로>` / 스테이징 취소: `git restore --staged <경로>`
- `.env`는 `git check-ignore -v <경로>`로 무시되는지 확인

### 미니 실습 커밋 + 태그
```powershell
git add <변경 파일 경로>
git commit -m "practice(week4): 실습 내용"
git tag -a week4-practice-<이름> -m "4주차 미니 실습: 설명"
git push --follow-tags
git log --oneline   # 맨 윗줄 앞 7자리 = 커밋 해시 (PRACTICE.md 링크용)
```
- 실습 커밋만 보기: `git log --oneline --grep="practice"`
- 그 시점 코드 실행: `git checkout <태그>` → `pnpm dev` → `git checkout main`

### 미션 완료 태그
```powershell
git tag -a week4-mission -m "4주차 필수 미션: 설명"
git push --follow-tags
```

---

## 5. 미니 실습 기록: `week_N/umcine/PRACTICE.md`

- 첫 줄: `# N주차 M번째 워크북 미니 실습 기록`
- 스크린샷: 같은 위치 `docs/` 폴더 (`Win + Shift + S` → 캡처 도구 `Ctrl + S` → PNG)
- VS Code 미리보기: `Ctrl + Shift + V`
- 항목 형식 (제목에 워크북 섹션 번호를 꼭 넣음):

````md
## [섹션번호. 섹션 제목] 미니 실습: 실습 제목
- 목표:
- 변경 파일: `src/...`
- 핵심 코드:
```tsx
(핵심 몇 줄만)
```
- 배운 점:
  - (짧게 2~4개)
- 확인 결과: (화면 크기/동작별로 확인한 내용)
- 코드 변경 보기: [커밋 해시](https://github.com/0514swkim-web/UMC_study/commit/해시)
- 결과 화면: ![설명](./docs/파일이름.png)
````

기록 후:
```powershell
git add week_N/umcine/PRACTICE.md week_N/umcine/docs
git commit -m "docs(weekN): ○○ 미니 실습 기록 추가"
git push
```

---

## 6. 미션 마무리 루틴

1. **Console 오류 확인**: `F12` → Console. 모든 화면을 돌며 빨간 에러 0개 확인 (노란 경고, React DevTools 안내는 무시)
2. **`pnpm build`** 통과 (umcine 위치에서)
3. 미션 태그 + push
4. 노션 제출용 **미션 기록** 작성 (아래 7번)
5. 트러블슈팅 작성 (아래 8번)

---

## 7. 노션 제출용 미션 기록

- **과제 제출용 정중한 말투** (~했어요/~했습니다). 노션에 마크다운으로 붙여넣기 좋게
- 워크북 지시대로 **핵심 코드 + 최종 확인 결과만** (모든 명령·중간 과정은 X)
- 구성:
  ```
  ## ✅ 필수 미션 N. 미션 이름
  ### 구성 (폴더/라우트 트리)
  ### 핵심 코드 (파일 경로 표시 + 짧은 코드 + 한두 줄 설명)
  ### 확인 결과 (체크리스트 - [x])
  ### 결과 화면 (스크린샷 자리)
  ```
- 선택 미션은 별도 토글로

---

## 8. 트러블슈팅 양식 (UMC 공식 형식)

- 정중한 말투, 👉 사용, **오류 메시지는 요약하지 말고 원문 그대로**
- 실제로 에러가 난 것과 **에러 나기 전에 막은 것(사전 방지)**은 구분해서 표시
- 코드가 관련 있으면 수정 전/후 코드 블록 포함

```md
- ⚡ 이슈 No.1 (제목)

    **`이슈`**
    👉 [발생한 상태와 오류 메시지 원문]

    **`원인`**
    👉 [오류가 발생한 이유]

    **`해결`**
    👉 [시도한 방법과 최종 해결 방법]

    **`배운 점`**
    👉 [다음에 같은 문제를 만났을 때 확인할 내용]

    **`참고 레퍼런스`**
    - [공식 문서 링크 (MDN, React, Zustand 등)]
```
- 여러 개면 마지막에 **종합 정리 표** (문제 | 원인 | 해결)
- 진행 중 에러가 나면 그때그때 트러블슈팅 후보로 메모해두기

---

## 9. 핵심 키워드 / 블로그

- 핵심 키워드: 정의만 옮기지 말고 **내 말로 + 워크북에서 쓴 예시**와 같이 정리
- 블로그 챌린지: 워크북 추천 주제 중 1개

---

## 10. 백엔드 메모 (NestJS)

- `nest new --skip-git`이면 프로젝트 `.gitignore`가 없음 → 루트 `.gitignore`에 `*.tsbuildinfo`, `node_modules/`, `dist/` (Spring: `build/`, `.gradle/`, `.idea/`)
- Nest CLI 12.x: `@nestjs/observe` → No, 모듈 시스템 → **CJS** (워크북 import 경로와 맞춤)
- MySQL Workbench: 쿼리 전 `USE umc_study;`
- 3주차: Raw SQL, 3계층(Repository → Service → Controller), `?` 파라미터 바인딩 / 4주차부터 DTO, ORM

---

## 11. 현재 진행: 4_1 (Web Storage + Zustand)

- `week_4/umcine` = 3주차 umcine 복사본, `week_4/umcine/PRACTICE.md` 새로 시작
- 목표: 북마크를 Zustand로 목록/검색/상세에서 공유 + `persist`로 localStorage 유지
- 기록할 미니 실습
  | 섹션 | 내용 | 태그 |
  |---|---|---|
  | 3 | useState + localStorage로 새로고침 뒤 북마크 유지 (`src/utils/bookmark-storage.ts`) | `week4-practice-bookmark-localstorage` |
  | 4.2 | Zustand store(`src/stores/bookmark-store.ts`) + `BookmarkButton` 연결 | `week4-practice-zustand-store` |
  | 5.1 | `persist` 적용 (key: `umcine-bookmark-store`) | `week4-practice-zustand-persist` |
- 필수 미션: 목록/검색/상세 북마크 공유, 새로고침·브라우저 재실행 뒤 유지, Application 패널에서 값 삭제 시 빈 상태 복구, `pnpm build`
- 선택 미션: sessionStorage로 바꿔 차이 기록 / 화면 설정(카드 크기·정렬) 하나 저장
- 다음 할 일: 3주차에서 북마크 상태가 있는 파일을 찾아 3번 미니 실습 시작
