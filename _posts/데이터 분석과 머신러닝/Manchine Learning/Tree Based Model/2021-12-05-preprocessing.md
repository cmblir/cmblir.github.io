---
title:  "[파이썬][머신러닝] 데이터 분석과 머신러닝 - Processing"
excerpt: "다양한 변수 전처리 방법에 대해"

categories:
  - 데이터 분석과 머신러닝
tags:
  - [데이터 분석, 머신러닝]

toc: true
toc_sticky: true
 
date: 2021-12-05
last_modified_at: 2021-12-05
---

## 전처리란?
분석에 활용되거나 모델 학습에 수집된 데이터를 사용하는 경우 누락이나 오차, 또는 불필요한 데이터들을 정리하는 것부터 시작한다.

쉽게 말하면 *좋은 식자료로 맛있는 음식 만들기는 쉽다.* 라고 표현할 수 있을 것 같다.

우리는 맛있는 음식(좋은 모델)을 만들기 위해 제각기 다른 재료들을 요리하기에 쉽게 좋은 식재료(가공된 데이터)를 만드는 재료 손질(전처리)를 하는 것이다.

- 데이터 전처리는 크게 5가지 종류라고 생각한다.

  1. Data Clearning
  2. Data Integration
  3. Data Transformation
  4. Data Reduction
  5. Data Discretization


## 결측치를 처리하는 방법

### 특성들의 평균값으로 채워주기
- 각각의 특성들에 대해 조건부에 성립하는 값들의 평균으로 값을 채우는 방법이다.

### 결측치 모두 방치하기
- 결측치들의 경우 대개는 불필요한 데이터인 경우가 많다. <br> 하지만 필요한 정보가 들어가는 경우가 있기때문에 방치하는 것도 결측치를 처리하는 하나의 방법이다.

### 결측치 모두 제거하기
- 불필요한 데이터가 들어가게 되면 오히려 모델 학습에 방해가 되거나 분석이 원할하게 되지 않고 잘못된 값이 나올 수도 있다. <br> 이를 방지하기 위해 삭제하는 방법이다.

### Sklearn의 SimpleImputer 사용하기
- 결측치를 제거하는 것이 아닌 대표값으로 채워주는 것도 하나의 방법이다.
  - 이는 데이터 수가 적거나 결측치가 매우 적을 경우 사용할 수 있는 방법 중 하나이다.


```python
import numpy as np
from sklearn.impute import SimpleImputer

nan_array = [[1.0, 2.0, np.nan], [1.0, 2.0, np.nan], [np.nan, 4.0, 5.0], [np.nan, np.nan, 6.0]]

imputer = SimpleImputer(strategy="median")
imputer.fit_transform(nan_array)
```

## 수치형 변수 전처리
> 수치형 변수의 경우 값 분포의 스케일만 변환시키는 변환을 하여 전처리가 가능하다.


### Min-Max Scaling
- 가장 단순한 기법이다.
  - 모든 값들을 0과 1사이의 값으로 스케일링한다.

```python
# 사이킷런을 활용한 MinMaxScaler
from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
```

### Standardization
- 특성의 평균을 0, 표준편차를 1로 조정하는 기법이다.

```python
# 사이킷런을 활용한 StandardScaler
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
```

### Clipping
- 특정 범위를 넘어서는 값들을 특정 경계값으로 변환시켜 주는 기법이다.
```python
# pandas의 clip함수를 활용
import pandas as pd
df = pd.DataFrame() # 데이터프레임 예시이다.
df.clip(lower = 0, upper = 100)
```

### log-Transformer
- 다수의 값들이 제한 범위 내에서만 존재하고 특정 값들이 굉장히 큰 형태의 분포에서 자주 적용되는 기법이다.
  - 흔히 댓글 수 분포와 같이 소수의 기사에 많은 댓글이 몰려있는 경우

```python
# numpy의 log1p함수를 활용
import pandas as pd
df = pd.DataFrame() # 데이터프레임 예시이다.
df['log-transformation'] = np.log1p(df['log'])
```

### Bucketing
- 수치형 변수와 범주형을 같이 다룰 수 있는 방법이다.
  - 각 값들이 속하는 범위를 미리 지정해 주고, 각 값들이 어떤 범위에 속하는 지를 숫자로 나타내는 기법이다.

```python
# 사이킷런을 활용한 KBinsDiscreatizer
from sklearn.preprocessing import KBinsDiscretizer
kbd = KBinsDiscretizer(n_bins = 8, encode = "ordinal", strategy = "uniform")

df['bucketed'] = kbd.fit_transform(df['bucketing'].values.reshape(-1, 1))
```

### Rank-Transformer
- 전체 데이터의 순위로 변환하는 기법이다.
  - 값들 간의 거리 정보들이 복구할 수 없는 형태로 변하고 대소 관계만 남는 것이 특징이다.

```python
# pandas의 rank 함수를 활용한 방법 1번
import pandas as pd
df = pd.DataFrame()
df['ranked'] = df['rank'].rank(pct = True)
```


```python
# 사이킷런을 활용한 QuantileTransformer
from sklearn.preprocessing import QuantileTransformer
qt = QuantileTransformer()
df['ranked'] = qt.fit_transform(df['rank'].values.reshape(-1, 1))
```

## 범주형 변수 전처리
> 범주형 변수의 경우 수치형과 다르기때문에 인코딩 과정을 통해 수치형 변수로 변환시켜줘야 한다.

### *One-Hot Encoding*
- 원핫 인코딩은 각 범주형 특성 값들을 각 값들에 대해 0과 1 값으로 인코딩하는 기법이다.
  - 명목형 변수는 원핫 인코딩을 이용하여 변환해줄 수 있다.
  - 단, Cardinarlity가 큰 경우 차원이 커져서 인코딩 방법을 적용하기는 쉽지 않다.
    - 그래서 트리 기반 모델에서는 사용하지 않는 기법이다.

```python
# category_encoders를 활용한 OneHotEncoder
from category_encoders import OneHotEncoder
oh_encoder = OneHotEncoder()
oh_encoded = oh_encoder.fit_transform(df['encode'])
```
### *Ordinal Encoding*
- 올디날 인코딩은 각 범주형 특성 값들을 서로 다른 정수값들로 인코딩하는 기법이다.
  - 원핫 인코딩과 반대로 선형 회귀나 로지스틱 회귀 모델을 사용할 때에는 명목형 변수를 올디날 인코딩 해주는 것은 적절하지 않다.
    - 이는 각 범주형 데이터가 양적 대소 관계를 가지게 되는 문제를 발생시킨다.

- 원핫 인코딩과 반대로 트리 기반 모델에서는 양적 대소 관계가 점점 사라져서 효율적이다.

```python
# category_encoders를 활용한 OrdinalEncoder
from category_encoders import OrdinalEncoder
od_encoder = OrdinalEncoder()
od_encoded = od_encoder.fit_transform(df['encode'])
```

### Count Encoding
- 빈도가 등장하는 데이터에서 사용되는 기법이다.

- 장점
  - 해석이 쉬움
- 단점
  - 빈도가 같은 특성들이 구분되지 않음

```python
# category_encoders를 활용한 CountEncoder
from category_encoders import CountEncoder

count_encoder = CountEncoder(normalize=True) 
# normalize=False -> frequency 자체를 반환시킨다.
count_encoded = count_encoder.fit_transform(df["encode"])
```

### Target Encoding

- 각 범주형 특성 값들을 해당 특성을 갖는 데이터의 타겟값의 평균으로 인코딩하는 기법이다.

- 장점
  - 해석이 쉬움
- 단점
  - 과적합 문제 발생할 수 있음

  ```python
# category_encoders를 활용한 TargetEncoder
from category_encoders import TargetEncoder

target_encoder = TargetEncoder(normalize=True) 
# normalize=False -> frequency 자체를 반환시킨다.
target_encoded = target_encoder.fit_transform(df["encode"])
```