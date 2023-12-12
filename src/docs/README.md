# 로또 (변형 버전)

# 🚀 기능 요구 사항

> 기능 구현 완료시 기능 목록 옆에 '⭕️' 표시가 되어있습니다.

## 1. 당첨 번호 6개를 먼저 생성한다.

## 2. 보너스 번호를 입력받는다.

### 🔍 입, 출력 예시

```
보너스 번호를 입력해 주세요.
```

### ❗️ 예외사항 ❗️

1. 보너스 번호는 1이상 20이하의 양의 정수 숫자여야한다.

## 2. 로또를 구매할 사람을 입력받는다.

### 🔍 입, 출력 예시

```
로또 구매자를 입력해주세요. (,기준)
포비, 준, 제이슨
```

### ❗️ 예외사항 ❗️

1. 로또 구매자는 최대 5명이며, 각 구매자의 이름은 최대 4글자여야한다. 이 조건을 충족 못할시 예외처리한다.

## 3. 각 구매자의 이름을 출력하며 로또를 구매할 금액을 입력받는다.

### 🔍 입, 출력 예시

```
포비의 로또 금액을 입력해주세요.
3000

준의 로또 금액을 입력해주세요.
8000

제이슨의 로또 금액을 입력해주세요.
12000
```

### ❗️ 예외사항 ❗️

1. 로또 구입 금액은 최대 10만원이다. 100장을 넘어갈시에 "[ERROR] 복권 및 복권기금법에 따라 동일인이 한 회차에 10만원을 초과하여 구매할 수 없습니다." 라는 메세지를 출력하고 다시 입력받는다.

## 4. 각 구매자에 맞는 결과값을 출력해준다.

### 🔍 입, 출력 예

```
포비의 로또 통계 결과입니다.

3개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]

당첨 번호 입니다.
[1, 2, 3, 4, 5, 11] + [7]

당첨 결과 입니다.
[8, 21, 35, 41, 42, 43]
[✓3, ✓5, ✓11, 16, 32, 38]
[•7, ✓11, 16, 35, 36, 44]

당첨 통계 입니다.
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.


준의 로또 통계 결과입니다.

8개를 구매했습니다.

... 중략
```

### ❗️ 알아두어야 할 점 ❗️

1. [ ] 당첨 번호와 일치할 경우 숫자 앞에 '✓'를 표시 한다.
2. [ ] 보너스 번호와 일치할 경우 숫자 앞에 '•'를 표시

# 🎯 프로그래밍 요구 사항

- <details>
    <summary> .nvmrc 에 노드 버전 기재</summary>

  `v18.17.1`
  </details>

- <details>
    <summary>eslint 룰 적용</summary>

  `npm install --save-dev eslint eslint-plugin-jsdoc@latest eslint-plugin-jest@latest eslint-plugin-prettier@latest eslint-config-prettier @babel/eslint-parser` 로 설치하고 .eslintrc.cjs 파일을 만들어서 룰 적용
  </details>

- <details>
    <summary> indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다</summary>

  eslint 에 `max-depth': ['error', 2]` 룰 추가
  </details>

- <details>
  <summary>JavaScript 코드 컨벤션을 지키면서 프로그래밍 한다</summary>

  `npm install --save-dev eslint-config-airbnb` 설치 후 .eslintrc.cjs 에서 `extends : ['airbnb']` 추가

- <details>
    <summary> 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.</summary>

  eslintrc.cjs에 `'max-lines-per-function': ['error', 15],` 룰 추가
  </details>

- <details>
    <summary> 사용자가 잘못된 값을 입력할 경우 throw문을 사용해 예외를 발생시킨다. 그런 다음, "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 입력을 다시 받는다. </summary>

  `asyncFnHandlerWithError` 라는 유틸 함수 생성 후 각 입력 받는 함수마다 실행
  </details>

# ✏️ 과제 진행 요구 사항

- <details>
    <summary>기능을 구현하기 전 docs/README.md에 구현할 기능 목록을 정리해 추가한다.</summary>

  README.md 파일 작성 중
  </details>

# - 📂 폴더 구조

<details>
<summary>자세히 보기</summary>

```
// 여기에 폴더 구조 삽입
```

</details>

# 🔍 테스트 커버리지

jest의 커버리지 기능으로 테스트 실행 결과를 확인합니다.

```
npx jest --coverage
```

<details>
<summary>테스트 결과 보기</summary>

```
// 여기에 커버리지 삽입
```

</details>
