---
title:  "[파이썬][머신러닝] 데이터 분석과 머신러닝 - Model Selection"
excerpt: "교차 검증과 하이퍼 파라미터에 대해"

categories:
  - 데이터 분석과 머신러닝
tags:
  - [데이터 분석, 머신러닝]

toc: true
toc_sticky: true
 
date: 2021-12-06
last_modified_at: 2021-12-06
---

# 하이퍼 파라미터란?

> Parameter(매개변수)는 모델 내부에서 데이터로부터 결정되는 변수이다. 
- MLM(Machine Learning Mastery)에서 기술한 하이퍼 파라미터는 모델링할 때 직접 세팅해주는 값이라고 말한다. 이는 모델 학습에 나오는 learning rate나 SVM의 C, sigma, KNN의 K값 등등 모델을 세팅할 때 우리가 설정하는 값을 설명한다.
흔히 많은 사람들이 모델 설계를 할 때 값을 조정하는 것을 "하이퍼 파라미터를 조정한다."라고 말한다.

## 최적의 하이퍼 파라미터 찾기

### Research

모델을 튜닝하는 방법에는 다양한 방법이 존재한다. 그 중 직접 튜닝하는 방법은 여러가지 지식또는 기법을 통해서 개발자가 비교하면서 찾는 방법으로 가장 기초적인 방식이다.

### Exhaustive Grid Search

검증을 목표로 하는 하이퍼 파라미터의 범위 내에서 모든 조합에 대해 모델을 학습하고, 그 중 가장 좋은 metric 조합을 선택한다.

> 시간적인 여유가 있다면 굉장히 좋겠지만, 조합의 수가 굉장히 많아서 비효율적이다.

### Randomized Search

검증을 목표로 하는 하이퍼 파라미터의 범위 내에서 랜덤하게 조합을 선택하여, 그 중 가장 좋은 metric 조합을 선택하는 것이다.

탐색 횟수를 지정해주기에 하이퍼 파라미터 수가 많고 범위가 넓더라도 탐색이 가능하다.

> 랜덤하게 선택하기 때문에 이상적인 조합을 찾기가 쉽지 않다.

### Bayesian Search

검증을 목표로 하는 하이퍼 파라미터의 범위 내에서 이전 조합중 가장 성능이 잘 나온 조합을 중심으로 탐색하고 선택하여, 그 중 가장 좋은 metric 조합을 선택하는 것이다.

위 2가지 탐색기법중에서 가장 똑똑하고 효율적으로 하이퍼 파라미터 조합을 찾을 수 이;ㅆ다.

### Grid Search 간단하게 구현해보기

```python
from category_encoders import OrdinalEncoder
from sklearn.impute import SimpleImputer
from xgboost import XGBClassifier
from sklearn.pipeline import make_pipeline

# 간단하게 파이프라인을 형성해준다.

pipe = make_pipeline(
    OrdinalEncoder(),
    SimpleImputer(strategy="median"),
    XGBClassifier(
        objective="binary:logistic",
        eval_metric="error",
        n_estimators=200,
        random_state=42,
        n_jobs=-1,
        learning_rate=0.1,
        use_label_encoder=False,
    ),
)

params = {
    "xgbclassifier__max_depth": [2, 4, 6],
    "xgbclassifier__min_child_weight": [2, 4, 8],
    "xgbclassifier__colsample_bytree": [0.6, 0.8, 1.0],
}

from sklearn.model_selection import GridSearchCV
# Sklearn의 GridSearchCV를 활용한다. 

grid_search = GridSearchCV(pipe, param_grid=params, scoring="roc_auc", cv=3, verbose=3)
# 위의 지정해준 파라미터를 기준으로 Grid Search를 시작한다.

grid_search.fit(X_train, y_train)
```

### 결과 확인하기

```python
print("최적의 하이퍼파라미터: ", grid_search.best_params_)
print("최적의 AUC: ", grid_search.best_score_)
```

### 최적의 하이퍼 파라미터 조합 순위로 확인하기

```python
pd.DataFrame(grid_search.cv_results_).sort_values(by="rank_test_score").T
```

### Hyperopt Bayesian Search

```python
from hyperopt import hp

params = {
    "simpleimputer__strategy": hp.choice("strategy", ["median", "mean"]),
    "xgbclassifier__max_depth": hp.quniform("max_depth", 2, 10, 2),
    "xgbclassifier__min_child_weight": hp.quniform("min_child_weight", 2, 10, 2),
    "xgbclassifier__colsample_bytree": hp.uniform("colsample_bytree", 0.5, 1.0),
}

from hyperopt import fmin, tpe, Trials, STATUS_OK
from sklearn.model_selection import cross_val_score
import numpy as np

def fit_eval(params):
  pipe = get_pipe(params)
  score = cross_val_score(pipe, X_train, y_train, cv = 3, scoring = "roc_auc")

  return {"loss" : - avg_cv_score, "status" : STARUS_OK}
  # rou_auc 값이 클ㄹ수록 좋은 metric이므로, hyperopt.fmin이 rou_auc 최대화도록 하기 위해 -부호를 붙여 반환한다.


trials = (Trials())

best_params = fmin(fn = fit_and_eval, trials = trials, space = params, algo = tpe.suggest, max_evals = 10)
```

### 모든 trial 정보 출력하기

```python
trials.trials
```

## 교차 검증이란?

> 학습 시킨 모델을 검증 데이터를 사용하는 방식을 통해서 검증하는 것을 의미한다.
- 우리는 흔히 모델을 학습 시킨 이후에 2가지로 나눠서 모델의 성능을 측정하게 된다.
  - 학습 데이터 (Train)
  - 시험 데이터 (Test)

- 위의 방식으로 측정을 하게 되도 무관하나, 시험 데이터에 과적합을 하게 되거나 실 데이터를 가져와서 원하는 결과를 가지고 오지 못할 가능성이 있다.

그래서 *교차 검증*을 통해서 3가지로 나눠서 검증을 한다.
  - 학습 데이터 (Train)
  - **검증 데이터 (Validation)**
  - 시험 데이터 (Test)

### 교차 검증의 장단점

1. 장점
    - 데이터의 활용도 증가
      - 성능향상으로 이어진다.
    - 과적합
      - 데이터를 나눠서 사용하게 되기에 시험 데이터에 과적합되는 현상을 방지할 수 있다.


2. 단점
    - 학습 시간 증가
      - iteration 증가로 인해서 시간이 오래 걸릴 가능성이 있다.

## Feature Selection

> 모델의 분류 정확도를 향상시키기 위해, 원본 데이터에서 가장 좋은 성능을 보여줄 수 있는 데이터의 부분집합 (Subset)을 찾는 방법이다.

결론적으로 특성 중에서 훈련에 가장 유용한 특성을 선택하는 것을 말한다.

### 특성 중요도 기반 특성 선택

1. Check Score

```python
# AUC 점수를 체크한다.
print("Validation AUC: ", pipe.score(X_val, y_val))
```

2. Feature Selection

```python
# 특성 중요도를 시각화하여 특성 중요도가 낮은 몇몇 특성들을 확인한다.
import matplotlib.pyplot as plt

feature_importances = list(
    zip(X_train.columns, pipe.named_steps["xgbclassifier"].feature_importances_)
)
feature_importances = sorted(feature_importances, key=lambda x: x[1], reverse=True)

plt.figure(figsize=(10, 10), dpi=120)
plt.barh(*list(zip(*feature_importances[::-1])))
plt.axvline(0.015, color="red", linewidth=0.5)
```

3. Feature Drop 
불필요한 특성들은 오히려 학습에 방해가 되므로 제외하고 재학습을 진행해준다.

```python
features_selected = list(filter(lambda x: x[1] >= 0.015, feature_importances))

# 0.015 중요도 미만의 값들을 선택해준다.

selected_feature_names = list(map(lambda x: x[0], features_selected))
```

3. re-Check Score

```python
X_train_selected = X_train[selected_feature_names]
X_val_selected = X_val[selected_feature_names]

pipe.fit(X_train_selected, y_train)
print("Validation AUC: ", pipe.score(X_val_selected, y_val))
```

### 통계 기반 특성 선택
1. 피어슨 상관계수
> 공분사산 / 표준편차의 제곱으로, 등간척도(간격척도)나 비례척도(비율척도)의 데이터에서 두 변수의 공분산(Covariance)을 각각의 표준 편차의 곱으로 나눈 값이다.

- 표준 피어슨의 상관계수 r 로부터 표본 결정계수 r^2을 얻을 수 있다.
- 모집단 피어슨의 상관계수 p 로부터 모집단 결정계수 p^2을 얻을 수 있다.
- *numpy*로 간단하게 구할 수 있다.

```python

x = np.random.normal(0, 5, 1000)
y = x**3 + np.random.normal(0, 1, 1000)

# 두 특성이 선형 관계는 아니지만 단조 관계일 때를 확인

plt.plot(x, y, ".")

print("Pearson Corrcoef:", np.corrcoef(x, y)[0, 1])
print("Spearman Corrcoef:", spearmanr(x, y))
```


2. 스피어만 상관계수
> 두 변수의 순위 사이의 통계적 의존성을 측정하는 비모수적인 척도이다.

- 두 변수 간의 스피어만 상관 계수는 두 변수의 순위 값 사이의 피어슨 상관 계수와 같다.
- *Scipy*로 간단하게 구할 수 있다.

```python
from scipy.stats import spearmanr

x = np.random.normal(0, 5, 1000)
y = 4 * x + 7 + np.random.normal(0, 1, 1000)

# 두 특성이 선형 관계일 때 pearson, spearman corrcoef 값을 확인

plt.plot(x, y, ".")

print("Pearson Corrcoef:", np.corrcoef(x, y)[0, 1])
print("Spearman Corrcoef:", spearmanr(x, y))
```

### Sklearn의 특성 선택 라이브러리
> sklearn.feature_selection.SelectKBest

**통계량 옵션 선택**

- Classification Options
1. f_calssif
2. mutual_info_classif
3. chi2


- Regression Options
1. f_regression
2. mutual_info_regression

### Sklearn Regression 문제 특성 선택
위에서 

```python
from category_encoders import OneHotEncoder

enc = OrdinalEncoder()
imp = SimpleImputer()

X_train_encoded = enc.fit_transform(X_train)
X_train_imputed = imp.fit_transform(X_train_encoded)

X_val_encoded = enc.transform(X_val)
X_val_imputed = imp.transform(X_val_encoded)
# 회귀 문제이므로 간단하게 원-핫 인코딩을 진행해준다.

from sklearn.feature_selection import SelectKBest, mutual_info_classif
# 위에서 언급한 Sklearn의 SelectKBest와 mutual_info_classif 를 사용해서 간단하게 문제의 특성을 선택해준다.

selector = SelectKBest(score_func=mutual_info_classif, k=6)
X_train_selected = selector.fit_transform(X_train_imputed, y_train)
X_val_selected = selector.transform(X_val_imputed)


print("Feature Selection: ", X_train_encoded.columns[selector.get_support()].tolist())
```