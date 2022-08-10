---
title:  "데이터 분석과 머신러닝 - High dimensional data"
excerpt: "벡터와 데이터 처리(차원 축소)에 대해"

categories:
  - 데이터 분석과 머신러닝
tags:
  - [데이터 분석, 머신러닝]

toc: true
toc_sticky: true
 
date: 2021-11-28
last_modified_at: 2021-11-28
---

# Vector transformation
- 벡터 변환에 대해서 알아보자.
R2 공간에서의 벡터 변환, 즉 선형 변환은 임의의 두 벡터를 더하거나 혹은 스칼라 값을 곱하는 것을 의미한다.
이전 linear algebra에서 올린 내용중 linear projection도 일종의 벡터 변환이라고 볼 수 있다.


### 간단하게 코드로 구현
```python
import matplotlib.pyplot as plt
import numpy as np

input_vec = np.array([3, 4])
transform_mat = np.array([[2, 1], [1, -3]])
output_vec = np.matmul(transform_mat, input_vec)
```

입력할 벡터를 만든 다음 변환시킬 벡터값을 만들어준다.
이후 numpy의 `matmul`을 통해서 벡터값을 만들어준다.

```python
plt.arrow(0, 0, input_vec[0], input_vec[1], head_width = .05, head_length = .05, color ='#d63031')
plt.arrow(0, 0, output_vec[0], output_vec[1], head_width = .05, head_length = .05, color ='#0984e3')
plt.xlim(0, 12)
plt.ylim(-10, 5)
plt.title("Transformed Vector")
plt.show()
```

![Figure_1](https://user-images.githubusercontent.com/75519839/183892955-9ada6985-1038-4071-b8bd-2b7e544725c5.png)


## 고유 벡터 (Eigenvector)

- 행렬 A라는 선형 변환이 변환 결과가 자기 자신의 상수배가 되는 0이 아닌 벡터를 고유 벡터라고 한다.
- 또는 전환에 영향을 받지 않는 벡터또는 회전축이라고 불린다.

## 고유값 (Eigenvalue)

- 위의 고유 벡터에서 상수배 값을 고유값이라고 한다.
- 변환하는 크기는 스칼라 값으로 변화할 수 밖에 없는데, 이때 특정 스칼라 값을 지칭하기도 한다.

## Dimension Reduction

- 차원축소, 데이터의 크기가 큰 또는 데이터 셋의 feature가 많으면 많을 수록 문제가 많이 발생하게 된다. 이는 데이터 시각화또는 탐색에 어려워지며 모델링의 overfitting 문제로도 이어지기도 한다.
- 이때 해당 문제를 해결하기 위해서 머신러닝에서는 다양한 차원축소 기술을 가지고 있다.

### Feature Selection

- 데이터 셋에서 제일 다양하게 분포되어 있는 1개의 feature를 사용하는 것을 말한다.
- 이때 데이터 셋에서 덜 중요한 feature를 제거하는 방법이다.

### Feature Extraction

- 기존에 있는 Feature 혹은 그것을 바탕으로 하는 Feature를 사용하는 것을 말한다.
- PCA또한 위 방법의 일종이다.

    Feature Selection 과 Extraction의 차이
    ![68747470733a2f2f692e696d6775722e636f6d2f797546516b4c612e706e67](https://user-images.githubusercontent.com/75519839/183894827-4d2a890e-e97c-4b25-ab59-57ffd8a7861e.png)

    1. Selection
        - 장점 : Feature 해석이 쉽다.
        - 단점 : Feature 간의 연관성을 고려해야 한다.
        - 예시 : LASSO, Genetic Algorythm

    2. Extraction
        - 장점 : Feature 들간의 연관성이 고려되고, Feature 수가 많이 줄어든다.
        - 단점 : Selection과 반대로 해석이 어렵다.
        - 예시 : PCA, Auto-Encoder

### PCA

- 고차원 데이터를 효과적으로 분석하는 기법중의 하나이다.
- 낮은 차원으로 차원을 축소시키고, 고차원 데이터를 효과적으로 시각화와 클러스터링이 가능하다.
- 기존의 고차원 데이터의 정보를 최대한 유지하는 벡터를 찾고, 해당 벡터에 대해 데이터를 Projection한다.


    - Sklearn의 PCA 라이브러리
    ```python
    from sklearn.decomposition import PCA
    from sklearn.preprocessing import StandardScaler, Normalizer

    scaler = StandardScaler()
    Z = scaler.fit_transform(X)
    ```

    - 위의 만든 PCA를 이용해본 예시
    ```python
    pca = PCA(2)

    pca.fit(Z)

    print("\n Eigenvectors: \n", pca.components_)
    print("\n Eigenvalues: \n",pca.explained_variance_)

    B = pca.transform(Z)
    print("\n Projected Data: \n", B)]
    ```

PCA의 특징🔥

    데이터에 대해 독립적인 축을 찾는데 사용할 수 있다.
    데이터의 분포가 정규성을 띄지 않으면 적용시키기가 어렵다.
        커널 PCA를 통해 해결이 가능하다.
    분류또는 예측 문제에 대해서 데이터의 라벨을 고려하지 않기 떄문에 효과적 분리가 어렵다.
        PLS를 통해 해결이 가능하다.
