---
title:  "[파이썬][머신러닝] 데이터 분석과 머신러닝 - Feature Importance"
excerpt: "특성 중요도에 대해"

categories:
  - 데이터 분석과 머신러닝
tags:
  - [데이터 분석, 머신러닝]

toc: true
toc_sticky: true
 
date: 2021-12-09
last_modified_at: 2021-12-09
---

## Feature Importance

> 특성 중요도는 각 특성이 모델의 예측 결과에 영향을 얼마나 크게 미쳤는지를 나타내는 평가지표이다. <br> 특성 중요도를 통해서 데이터의 구조 또는 데이터에 대한 정보, 모델의 구조를 직관적으로 파악이 가능하고, 중요한 특징만 골라내어 더 효율적인 모델또한 구축이 가능하다.

### 특성 중요도의 3가지 방법

1. Mean Decrease Impurity (MDI)

        평균 불순도 감소는 각 변수가 분리될 때의 불순도 감소분의 평균을 중요도로 구하는 방법이다.

- 장점 : 빠르고 직관적으로 표현이 가능하다.
- 단점 : 범주형 변수에 대해서는 특성에 편향되어 과적합을 일으키기 쉽고, 잘못된 해석이 가능하다.

```python
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(random_state=0)
# 특성 중요도를 확인하기 위해 간단하게 랜덤포레스트 모델 구현
model.fit(X_train, y_train)
importances = model.feature_importances_
# 모델의 특성 중요도를 빠르게 확인이 가능하다.
```

2. Drop-Column Importance (DCI)

        컬럼 제거 중요도는 말에서 알 수 있듯이 컬럼을 하나씩 제거하면서 중요도를 구하는 방법이다.

- 장점 : 직관적이고 해석이 매우 쉽다.
- 단점 : 매 특성을 Drop하고 재학습을 해줘야하므로 시간이 매우 오래걸린다.

```python
drop_before = model.score(X_val, y_val)
# Drop을 진행하기 이전의 점수

drop_after = model.score(X_val.drop(columns=column), y_val)
# Drop을 진행한 이후의 점수

DCI = drop_before - drop_after
# 컬럼에 대한 DCI
```


3. Permutation Importance (PI)

        순열 중요도는 위의 3가지중 사용되는 것으로 어떠한 특성의 값이 랜덤 분포될 경우의 성능이 얼마나 떨어지는 지를 측정하는 방법이다.

- 장점 : 재학습이 필요없어서 속도가 매우 빠르고, 직관적인 해석이 가능하다.
- 단점 : 상관관계가 높은 특성값에 대해서 이상한 데이터 조합이 생설될 가능성이 높다.

```python
import eli5
import pandas as pd
from eli5.sklearn import PermutationImportance
# eli5의 순열 중요도 라이브러리를 써서 간단하게 구현이 가능하다.

PI = PermutationImportance(model.named_steps['rf'], scoring = 'accuracy', n_iter= 4, random_state = 42)

X_val_transformed = model.named_steps['preprocessing'].transform(X_val)

PI.fit(X_val_transformed, y_val)

features = X_val.columns.tolist()
pd.Series(PI.feature_importances_, feature_name).sort_values()
# Pandas의 Series를 이용해서 마지막으로 순열 중요도와 특성을 순서대로 출력하여 확인한다.
```