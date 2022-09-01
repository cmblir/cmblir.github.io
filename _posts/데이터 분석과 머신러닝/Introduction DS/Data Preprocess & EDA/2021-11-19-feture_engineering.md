---
title:  "[파이썬][데이터분석] 데이터 분석과 머신러닝 - Feature Engineering"
excerpt: "Feature Engineering에 대해"

categories:
  - 데이터 분석과 머신러닝
tags:
  - [데이터 분석, 머신러닝]

toc: true
toc_sticky: true
 
date: 2021-11-19
last_modified_at: 2021-11-19
---


# 1.2 Feature-Engineering

## Feature Engineering

도메인 지식과 창의성을 바탕으로, 데이터셋에 존재하는 Feature들을 재조합하여 새로운 Feature을 만드는 것

![Untitled](https://user-images.githubusercontent.com/75519839/174546158-b9e62091-1a43-468e-b36a-57243f9fec71.png)

feature를 조합하여 (+) 새로운 feature을 만들어 낸 다음, 이를 분석에 사용할 수 있을 것이다.

![Untitled 1](https://user-images.githubusercontent.com/75519839/174546103-2e24c1b4-b889-4381-ba14-caf1e54fa65f.png)

# 실사용에서 사용하고 있는 것

더 좋은 퍼포먼스를 위하여 더 새롭고, 더 의미있는 패턴을 제공하는 것이 궁극적인 Feature Engineering의 목적이다.

## DataFrame

![Untitled 2](https://user-images.githubusercontent.com/75519839/174546116-07470c37-839f-433d-8d6b-2b742e54e0dd.png)

# Row (행), Column (열)

하나의 행에는 하나의 데이터 혹은 관측치

하나의 열에는 하나의 feature를 기반으로 저장하기를 권장한다.

이를 **tidy형태**라고 부르기도 한다.

## Dataset

![Untitled 3](https://user-images.githubusercontent.com/75519839/174546121-4375053b-4c0b-46cc-b412-2e23b406215e.png)

# kt&g의 기업 재무정보 데이터이다.

```python
import pandas as pd
df = pd.read_csv('https://ds-lecture-data.s3.ap-northeast-2.amazonaws.com/kt%26g/kt%26g.csv')
df
```

![Untitled 4](https://user-images.githubusercontent.com/75519839/174546129-a4923ac5-99c2-4c69-a138-bbcff7cda338.png)

```python
df.dtypes
```

![Untitled 5](https://user-images.githubusercontent.com/75519839/174546132-fdbe590b-3ae0-4597-9337-674f67731c59.png)

# object, float64, int64

```python
df['자본총계(비지배)'] 
```

![Untitled 6](https://user-images.githubusercontent.com/75519839/174546144-53e2fd81-7e5b-482f-990b-1c979d498a0d.png)

위의 NaN은, Not a Number의 줄임말로 pandas에서 결측치를 표현한다.

NaN은 프로그래밍상의 float라는 type을 갖는다.

이 때문에 562, 566은 int —> float로 어쩔 수 없이 type cast가 된 것이다.

## String

문자열(string)을 다루는 방법에 대해서 알아보자

![Untitled 7](https://user-images.githubusercontent.com/75519839/174546148-f8a37f8e-89ed-4fcd-8619-e81546b953d7.png)

앞서 발생한 문제를 해결하기 위해, 다음과 같은 단계를 거쳐야 한다.

1. 문자를 숫자로 바꾸기 위해 숫자가 아닌 부분을 제거
2. 문자를 숫자로 형변환

### string replace

replace 의 사용벙느 다음과 같다.

string variable.replace("삭제할 글자",")의 형태로 사용 (공백으로 대치)

```python
s.replace(',', '')
```

### Type casting

![Untitled 8](https://user-images.githubusercontent.com/75519839/174546153-cabe2981-c865-4d5c-b3a6-a53ce28da14c.png)

```python
testString = testString.replace(',','')
int(testString)
```

### as Function

```python
# 입력한 문자열에 대해서 같은 작업을 하는 함수 작성
def toInt(string):
		return int(string.replace(',',''))
```

```python
# 예시 데이터를 바탕으로 함수를 테스트
>>> toInt('25,970')
25970
```

```python
>>> type(toInt('25,970'))
int
```

### Apply

데이터의 모든 문자열에 대해서 일일히 toInt 함수를 반복 할 수는 없다.

대신 column 단위로 할 수 있다.

- **apply 사용법**
    1. apply 안에 들어갈 함수를 선언
    2. column에 apply 적용