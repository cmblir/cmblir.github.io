---
title:  "[파이썬][머신러닝] 데이터 분석과 머신러닝 - Interperting ML Model"
excerpt: "데이터 시각화 및 모델 해석"

categories:
  - 데이터 분석과 머신러닝
tags:
  - [데이터 분석, 머신러닝]

toc: true
toc_sticky: true
 
date: 2021-12-10
last_modified_at: 2021-12-10
---

## Partial Dependence Plots (PDP)

> 부분의존도그래프라는 뜻을 가진 시각화 방법으로 예측모델을 만들었을 때, 어떤 특성이 예측모델의 변수에 어떠한 영향을 미치는 지 알기 위한 방법이다. <br> 이는 회귀문제와 분류문제 모두에서 사용이 가능하다.

### 간단하게 구현하기

선형회귀모델에서 특정 특성을 사용한 PDP를 그려본 것이다.

```python
import matplotlib.pyplot as plt
from pdpbox import pdp # pdpbox 를 이용해서 예측관계 구현이 가능하다.
feature = 'Feature'
features = X_val_encoded.columns
pdp_dist = pdp.pdp_isolate(model=model, dataset=X_val_encoded, model_features=features, feature=feature)
pdp.pdp_plot(pdp_dist, feature)
```

![image](https://user-images.githubusercontent.com/75519839/196685483-f97bf17a-e991-4ede-9246-d69ec48ea483.png)

두 특성간의 상호작용 PDP로 확인한 것이다.

```python
from pdpbox.pdp import pdp_interact, pdp_interact_plot # pdpbox 을 이용해서 두 특성간의 상호작용 확인하기

features = ['FeatureOne', 'FeatureTwo']

interaction = pdp_interact(
    model=boosting, 
    dataset=X_val_encoded,
    model_features=X_val.columns, 
    features=features
)

pdp_interact_plot(interaction, plot_type='grid', 
                  feature_names=features)
```

![image](https://user-images.githubusercontent.com/75519839/196686348-259d79a6-5ec0-4e2d-a8e6-50a97738e7e8.png)

- 이외에도 Sklean 공식문서를 참고하면 다양한 방법론들이 정리되어있다.<br>
Sklearn 공식문서 - [scikit-learn](https://scikit-learn.org/stable/modules/partial_dependence.html)

## SHAP (SHapley Additive exPlanations)

모든 기계 학습 모델의 결과(출력)을 설명하기 위한 게임 이론적인 접근 방식이다.<br>
> 게임 이론과 연관된 고전적인 Shapley value를 사용하여 최적의 신뢰할 만한 내용을 로컬 설명과 연결지은 것이다.

![img](https://raw.githubusercontent.com/slundberg/shap/master/docs/artwork/shap_header.svg)

사진 출처 : [SHAP 깃허브](https://github.com/slundberg/shap)


### 간단하게 구현하기

```python
import shap # 위에서 언급한 SHAP 라이브러리를 사용하면 된다.

explainer = shap.Explainer(model)
shap_values = explainer(X)
shap.plots.waterfall(shap_values[0])
```

![image](https://user-images.githubusercontent.com/75519839/196688543-cf3d9bec-f28d-4c8e-9c7e-82f39debfb81.png)