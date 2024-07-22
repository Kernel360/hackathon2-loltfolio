# Loltfolio
롤트폴리오는 LOL API를 기반으로 게임 정보를 통해 스스로를 알 수 있는 사이트입니다.

## 기술 스택
```
# yarn berry
# vite
# react
# react-router
# styled component
# axios
```

## 작업 flow
1.  이슈 생성 ( 이슈는 작은 단위 )
2. 자기 레포에서 fetch 작업 진행 ( 원본 레포 - main fetch )
3.  local 에서 자기 레포 main pull 진행
4. 기능-#이슈넘버의 이름을 가진 브랜치로 분기 처리
5. 작업 시작

## Convention
### Coding convention
> 추후 추가 예정입니다.

### GIT convention
**git flow** 를 사용한다.
### Branch name convention
[type-#issue number]
```
feat-#10 // do
refactor#10 // not to do
```

### Pull Request convention
```
[관련된 이슈의 type/#이슈 번호] PR type: PR title
```
의 형식으로 PR제목을 붙인다.
브랜치 병합은 Squash & Merge 방식을 채택한다.
### Commit convention
#### 제목
- 제목은 50자 이내로 요약하며, 문장 끝 마침표는 금지한다.
- [commit type: 작업내용] 형식으로 기술한다.
```
feat: 헤더 구현 // do
헤더 구현. // not to do
```
#### 본문
- 본문은 한 줄에 최대 72글자를 입력한다.
-  왜 수정했는지, 무엇을 수정했는지 간략하게 설명한다.
- 본문이 여러줄의 메세지를 작성할 땐, "-"를 붙여 구분한다.
```
// do
- 헤더에서 생기는 렌더링 버그 때문에 로그인이 확인되지 않았습니다.
- 따라서 헤더에서 생기는 렌더링 버그를 수정했습니다.

// not to do
헤더 관련 로직 수정
```
#### Commit type
```
# [커밋 타입] 리스트 
# comment : 필요한 주석 추가 및 변경 
# design : CSS 등 사용자 UI 디자인 변경 
# docs : 문서 (문서 추가, 수정, 삭제) 
# feat : 기능 (새로운 기능) 
# fix : 버그 (버그 수정) 
# refactor : 리팩토링 
# style : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음) 
# remove : 파일을 삭제하는 작업만 수행한 경우 
# rename : 파일 혹은 폴더 명을 수정하거나 옮기는 작업만 수행한 경우 
# etc : 위의 커밋 타입 중 어디에도 해당하지 않는 경우
```
