---
title:  "[파이썬][데이터분석] 데이터 분석과 머신러닝 - Hypothesis Test"
excerpt: "가설 검정에 대해"

categories:
  - 데이터 분석과 머신러닝
tags:
  - [데이터 분석, 머신러닝]

toc: true
toc_sticky: true
 
date: 2021-11-22
last_modified_at: 2021-11-22
---

# 1.5 Hypothesis Test
- 가설 검정에 대하여
가설 검정이란 주어진 상황에 대해서 하고자 하는 주장의 진위여부를 확인하는 것
데이터 분석에서는 모집단의 실제 값에 대한 sample의 통계치를 사용해서 통계적으로 유의한 지 아닌 지 확인하는 것

## Descriptive Statics (기술 통계치)
- 데이터를 설명하는 값들

### 기술 통계치의 시각화

1. Boxplot
<img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Michelsonmorley-boxplot.svg/1920px-Michelsonmorley-boxplot.svg.png'></img>

2. Bagplot
<img src = 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Bagplot.png'></img>

3. Violin plot
<img src = 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Violin_plot.gif'></img>

[사진 출처 : 위키백과]

## Inferential Statics (추리 통계치)
- 수집한 데이터를 설명하는 값

### 표본 평균의 표준 오차의 연관성

표본의 수가 많아질수록, 추측은 더 정확해지고 높은 신뢰도를 바탕으로 모집단에 대해 예측 가능

## T-test
### One Sample t-test
- 1개의 샘플값들의 평균이 특정값과 동일한지 비교
1. T-test Process
  - 귀무 가설을 설정한다.
  - 대안 가설을 설정한다.
  - 신뢰도를 결정한다. (모수가 신뢰구간 안에 포함될 확률)
  - P-value를 확인한다.
    - P-value는 주어진 가설의 신빙성에 대한 값을 0과 1 사이로 나타내는 지표이다.
    -  값이 낮다는 건 귀무가설이 틀렸을 확률이 높다를 의미한다.
  - P-value 바탕으로 가설에 대한 결론 도출

### P-value의 기준
1. p-value < 0.01 (엄격한 기준)
  - 귀무가설이 맞을 확률이 1퍼 이하 == 틀렸다.
2. p-value < 0.05 (일반적인 기준)
  - 귀무가설이 맞을 확률이 5퍼 이하 == 틀렸다.
3. 0.05 < p-value < 0.1
  - 애매하므로 재실험한다.
4. p-value > 0.1
  - 귀무가설이 맞을 확률이 10퍼 이상 == 맞거나 틀리지 않을 것

데이터를 바탕으로 p = 0.5인 경우에 대해 가설검정하는 예시
```python
from scipy import stats
import numpy as np
import random

np.
coinflips = np.random.binomial(n = 1, p = 0.5, size = 1000)
stats.ttest_lsamp(coinflips, .5)
```

- One-side test
  샘플 데이터의 평균이 "X"보다 크다 혹은 작다 / 크지 않다. 작지 않다를 검정
- Two-side test
  샘플 데이터의 평균이 "X"와 같다 / 같지 않다를 검정

### Two Sample t-test
- 2개의 샘플값들의 평균이 서로 동일한지 비교

1. 귀무가설 : 두 확률은 같다.
2. 대안가설 : 같지 않다.