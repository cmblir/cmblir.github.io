---
title:  "[파이썬][데이터분석] 데이터 분석과 머신러닝 - Vector Matrix"
excerpt: "벡터와 매트릭스, 그리고 선형대수에 대해"

categories:
  - 데이터 분석과 머신러닝
tags:
  - [데이터 분석, 머신러닝]

toc: true
toc_sticky: true
 
date: 2021-11-26
last_modified_at: 2021-11-26
---

# 벡터와 스칼라
1. 스칼라는 단순히 변수 형태로 저장된 숫자이며 벡터 혹은 매트릭스와 곱해지는 경우 해당 값에 곱한 값으로 결정된다.
2. 벡터는 파이썬에서 주로 리스트형태로 사용되며, 데이터셋을 구성하고 있는 데이터프레임의 행과 열로써 사용된다.
3. 매트릭스는 벡터의 모음정도로 이해하면 좋다.

## 스칼라
- 단일 숫자로 변수에 저장할 때는 일반적으로 소문자를 이용해서 표기한다.
```python
import math
import matplotlib.pyplot as plt
import numpy as np
vec = [.5, .3]

green = np.multiply(5, vec)
red = np.multiply(math.pi, vec)
orange = np.multiply(-3.12, vec)

# 각각의 값에 스칼라를 곱한 벡터들
```

```python
# 스케일이 바뀐 벡터를 그림

plt.arrow(0, 0, red[0], red[1], head_width = .1, head_length = .1, color = '#d63031')
plt.arrow(0, 0, green[0], green[1], head_width = .1, head_length = .1, color = '#00b894')
plt.arrow(0, 0, vec[0], vec[1], head_width = .1, head_length = .1, color = '#0984e3')
plt.arrow(0, 0, orange[0], orange[1], head_width = .1, head_length = .1, color = '#e17055')
plt.xlim(-2, 3)          
plt.ylim(-2, 2)
plt.title("Vector example 1")
plt.show()

```
![ss](https://user-images.githubusercontent.com/75519839/179469582-802797b6-d963-4ba2-b49a-a47c6bdb8417.png)


## 벡터
- n 차원의 벡터는 컴포넌트라 불리는 n개의 원소를 가지는 순서 모음이다.
    - 컴포넌트는 스칼라로 간주하지 않는다.
- 벡터는 일반적으로 -> 소문자로 표기된다.

### 벡터의 크기
1. 벡터는 Norm 혹은 Magnitude는 단순히 길이에 지나지 않는다.
2. 벡터는 선이기 떄문에 피타고라스 정리로 구할 수 있다.

### 벡터의 내적
두 벡터 a와 b의 내적은 각 구성요소를 곱한 뒤 합한 값과 같다.

- 내적은 교환법칙이 적용된다. <br>
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&#x22C5;</mo>
  <mi>b</mi>
  <mo>=</mo>
  <mi>b</mi>
  <mo>&#x22C5;</mo>
  <mi>a</mi>
</math>

- 내적은 분배법칙이 적용된다. <br>
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&#x22C5;</mo>
  <mo stretchy="false">(</mo>
  <mi>b</mi>
  <mo>+</mo>
  <mi>c</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>a</mi>
  <mo>&#x22C5;</mo>
  <mi>b</mi>
  <mo>+</mo>
  <mi>a</mi>
  <mo>&#x22C5;</mo>
  <mi>c</mi>
</math>


## 매트릭스
- 행과 열을 통해 배치되어 있는 숫자들이다. 매트릭스를 표현하는 변수는 일반적으로 대문자로 표기된다.

- 이때 매트릭스는 2가지 조건을 통해 일치한다고 볼 수 있다.<br>
    1. 차원의 개수가 동일한가
    2. 각 해당하는 구성요소가 동일한가

### 정사각 매트릭스
- 정방 매트릭스라고도 불리우며 선형대수 강의에서 배우는 가장 기초적인 매트릭스이다.
- 이름에서 나와있듯 행과 열의 수가 동일한 매트릭스이다.

### 단위 매트릭스
- Diagonal 매트릭스 중에서, 모든 값이 1인 경우로 임의의 정사각 매트릭스에 단위 행렬을 곱하면 그 결과값은 원본 정사각 매트릭스로 나온다.
- 반대로 임의의 매트릭스에 대해서 곱했을 때 단위 매트릭스가 나오게 되는 매트릭스를 역행렬이라고 부른다.