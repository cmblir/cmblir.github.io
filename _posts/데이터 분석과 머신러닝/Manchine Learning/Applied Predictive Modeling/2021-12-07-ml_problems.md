---
title:  "[파이썬][머신러닝] 데이터 분석과 머신러닝 - Metrics"
excerpt: "데이터 누수와 평가 지표에 대해"

categories:
  - 데이터 분석과 머신러닝
tags:
  - [데이터 분석, 머신러닝]

toc: true
toc_sticky: true
 
date: 2021-12-07
last_modified_at: 2021-12-07
---

# Metics

> 평가지표라고 불리며 모델의 성능을 평가하는 수치적으로 명확한 지표로 다양한 학습 목적에 따라서 적절한 평가지표를 사용할 수 있다. <br> 성능 평가는 모델의 학습 능력을 체크하는 하나의 좋은 방법중에 하나이므로 학습에 있어서 핵심이라고 볼 수 있다.
 

- 머신러닝의 모델에는 크게 예측/회귀 와 분류로 나뉜다.

## Prediction Metrics

예측 모델에서의 성능평가 지표이다. 이의 경우 오차를 기반으로 계산하기 때문에 해당 값이 작을수록 모델의 성능이 좋다는 것을 의미한다.

### MSE (Mean Squared Error)
- 평균 제곱 오차
> 실제 값과 예측 값의 차이를 제곱해 평균한 것

```python
from sklearn.metrics import mean_squared_error
# Sklearn의 mean_squared_error 활용

metics = mean_squared_error(y_true, y_pred)
```

### RMSE (Root Mean Squared Error)
- 평균 제곱근 오차
> MSE 제곱의 값을 사용하여 실제 오류의 평균보다 값이 더 커지는 특성이 있어서 MSE 제곱에 루트를 씌우는 것이다.

```python
from sklearn.metrics import mean_squared_error
# Sklearn의 mean_squared_error 활용

metics = mean_squared_error(y_true, y_pred)**0.5
```

### MAE(Mean Absolute Error)
- 평균 절대 오차
> 실제 값과 예측 값의 차이를 절대값으로 변환시킨 후 평균한 것

```python
from sklearn.metrics import mean_absolute_error
# Sklearn의 mean_absolute_error 활용

metics = mean_absolute_error(y_true, y_pred)
```

### MAPE(Mean Absolute Percentage Error)
- 평균 절대비율 오차
> 위의 MSE와 RMSE의 단점들을 보완한 것

```python
import numpy as np
# Skleanr에 해당 함수는 없으므로 numpy로 직접 구현한다.

def MAPE(y_true, y_pred):
	return np.mean(np.abs((y_true - y_pred) / y_true)) * 100 
    
MAPE(y_true, y_pred)
```

### MPE(Mean Percentage Error)
- 평균 확률 오차
> MAPE에서 절대값을 제외한 지표

```python
import numpy as np
# Skleanr에 해당 함수는 없으므로 numpy로 직접 구현한다.
def MAE(y_true, y_pred): 
	return np.mean((y_true - y_pred) / y_true) * 100)
    
MAE(y_true, y_pred)
``` 

## Classification Metrics

### Accuracy
- 정확도
> TP(True Positive), TN(True Nagative), FP(False Positive), FN(False Nagative) 4가지의 확률을 기반으로 예측하는 것이다. <br> 
진짜이면서 참, 진짜이면서 거짓, 가짜이면서 참, 가짜이면서 거짓을 아래의 공식으로 계산한 
것 

**Accuracy = TP + TN / TP + TN + FP + FN**

```python
from sklearn.metrics import accuracy_score
# Sklearn의 accuracy_score 활용

metics = accuracy_score(y_true, y_pred)
```

### Confusion Matrix
- 오차 행렬
>위의 TP, TN, FP, FN을 표로 정리해놓은 것으로 예측 오류가 어떠한 유형으로 발생하고 얼마인 지를 나타낸다.

```python
from sklearn.metrics import confusion_matrix
# Sklearn의 confusion_matrix 활용

metrics = confusion_matrix(y_true, y_pred)
```

### Precision
- 정밀도
> 진짜가 참일 확률



**Precision = TP / TP + FP**

```python
from sklearn.metrics import precision_score
# Sklearn의 precision_score 활용

metics = precision_score(y_true, y_pred)
```

### Recall
- 재현율
> 진짜가 참으로 판단될 확률로 둘 중의 값이 작아지면 나머지 하나의 값이 커지는 전형적인 Trade-off 관계이다.

**Recall = TP / TP + FN**

```python
from sklearn.metrics import recall_score
# Sklearn의 recall_score 활용

metics = accuracy_score(y_true, y_pred)
```


### F1 Score
> 정밀도 + 재현율로 어느 한쪽에 치우지지 않는 수치일 경우 F1 Score의 값은 올라간다.

**F1 Score = 2 * Precision * Recall / (Precision + Recall)**

```python
from sklearn.metrics import f1_score
# Sklearn의 f1_score 활용

metics = f1_score(y_true, y_pred)
```



### Sklearn Classification Metrics

```python
from sklearn.metrics import classification_report

metrics = classification_report(y_true, y_pred)
```
---

## Data Leakage

    데이터 누수 또는 정보의 누설이라고 말한다. 
    이와 같은 현상이 일어나게 되면 잘못된 예측 모델을 만들거나, Over-fitting 또는 Under-fitting이 된 모델을 만들게 된다.

학습에 필요한 데이터 이외의 불필요한 데이터가 들어오는 경우를 말합니다.

이는 학습을 시킬 때 학습자(개발자인 우리)가 판단해서 관계성을 확인할 필요가 있다.

대개는 이전 글에서 설명했듯이 데이터의 양이 현저히 적거나 또는 너무 과도하게 많거나 혹은 데이터의 양이 너무 일정해서 발생하는 현상으로, 다양한 환경에서 이러한 "정보의 누설" 즉, 데이터 누수를 막을 방법을 찾는 것도 중요한 것 같다.

- 데이터 누수의 2가지 유형

1. Target leakage
> 예측에 사용할 수 없는 데이터가 들어온 상황이다. 

2. Train-Test contamination
> 검증 데이터와 훈련 데이터의 경계선이 모호해진 경우이다. 이는 전처리에 영향을 줘서 생기는 경우이다.