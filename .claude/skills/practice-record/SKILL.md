---
name: practice-record
description: UMC 워크북 미니 실습을 마쳤을 때 practice 커밋, annotated 태그, PRACTICE.md 기록, docs 커밋까지 한 번에 진행
disable-model-invocation: true
---

# 미니 실습 기록

인자: $ARGUMENTS (예: `3 북마크를 새로고침 뒤에도 유지하기`)

## 1. practice 커밋 + 태그
1. `git status`로 이번 실습에서 바뀐 파일만 확인해서 나에게 보여줌
2. 그 파일만 경로 지정해서 `git add` (절대 `git add .` 쓰지 않기)
3. `git commit -m "practice(weekN): 실습 내용"`
4. `git tag -a weekN-practice-<영문-이름> -m "N주차 미니 실습: 설명"`
5. `git push --follow-tags`
6. `git log --oneline -1`로 커밋 해시 7자리 확인

## 2. PRACTICE.md 기록
- 위치: `week_N/umcine/PRACTICE.md` (없으면 첫 줄 `# N주차 M번째 워크북 미니 실습 기록`으로 생성)
- 스크린샷 위치: `week_N/umcine/docs/` — 파일 이름을 정해서 나에게 알려주고, 내가 캡처해서 넣음
- 파일 맨 아래에 이 형식으로 추가 (제목에 워크북 섹션 번호 필수):

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
- 확인 결과:
- 코드 변경 보기: [커밋 해시](https://github.com/0514swkim-web/UMC_study/commit/해시)
- 결과 화면: ![설명](./docs/파일이름.png)
````

## 3. docs 커밋
스크린샷을 넣었다고 내가 말하면:
```
git add week_N/umcine/PRACTICE.md week_N/umcine/docs
git commit -m "docs(weekN): ○○ 미니 실습 기록 추가"
git push
```
