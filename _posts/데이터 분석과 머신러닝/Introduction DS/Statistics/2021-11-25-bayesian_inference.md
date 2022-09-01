---
title:  "[파이썬][데이터분석] 데이터 분석과 머신러닝 - Bayesian Inference"
excerpt: "조건부 확률과 베이지안 통계란 무엇인가"

categories:
  - 데이터 분석과 머신러닝
tags:
  - [데이터 분석, 머신러닝]

toc: true
toc_sticky: true
 
date: 2021-11-25
last_modified_at: 2021-11-25
---

# 베이지안적 사고
사고에 앞서 확률론과 통계학에서 유명한 베이즈 정리와 베이지안 확률에 대해 알아보자
1. 베이즈 정리
    > 두 확률 변수의 사전 확률과 사후 확률 사이의 관계를 나타내는 정리
2. 베이지안 확률
    - 베이즈 정리를 통해 사전확률로부터 사후확률을 구할 수 있게 된다는 해석의 기초
    > 베이지안 확률, 화산이 폭발할 확률을 빈도 확률로 계산이 가능할까라는 문제에 우리가 동전 던지기하듯 화산을 폭발 시킬 수 없으므로 빈도 확률 방법으로 신뢰 가능한 값을 구하지 못한다. 이렇듯 일어나지 않은 일에 대한 확률을 불확실성의 개념, 사건과 관련 있는 여러 확률을 이용해 새롭게 일어난 사건을 추정하는 것을 베이지안 확률이라고 부른다.




## 몬티홀
> 문제: 당신은 몬티홀의 퀴즈쇼에 참가하였다. 세 개의 닫힌 문을 보여주며 한 개의 문 뒤에는 자동차가 있고, 2개의 문 뒤에는 염소가 있다고 한다.<br> 당신이 한개의 문을 선택하고 그 문을 열려던 순간, 몬티홀이 잠시 뜸을 들이다가 당신이 고르지 않은 두 개의 문 중 하나를 열어 염소를 보여준다. <br> 몬티홀은 어느 문 뒤에 무엇이 있는 지 알고 있기 때문에 당신이 무엇을 골랐던 나머지 문 중에서 염소를 보여준다. 그리고 선택을 바꿀 기회를 주며 바꾸겠냐고 묻는다.

- 이것이 몬티홀 딜레마라고 불리는 몬티홀 문제이다.

---
### 배이지안을 통한 몬티홀 문제 공식


H = Hypothesis<br>
    ```1번 문 뒤에 자동차가 있음```<br>
E = Evidence<br>
    ```진행자가 염소가 있는 문을 1개 열어줌```
    
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>P</mi>
  <mo stretchy="false">(</mo>
  <mi>H</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>E</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mfrac>
    <mrow>
      <mi>P</mi>
      <mo stretchy="false">(</mo>
      <mi>E</mi>
      <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
      <mi>H</mi>
      <mo stretchy="false">)</mo>
      <mi>P</mi>
      <mo stretchy="false">(</mo>
      <mi>H</mi>
      <mo stretchy="false">)</mo>
    </mrow>
    <mrow>
      <mi>P</mi>
      <mo stretchy="false">(</mo>
      <mi>E</mi>
      <mo stretchy="false">)</mo>
    </mrow>
  </mfrac>
  <mo>=</mo>
  <mfrac>
    <mrow>
      <mi>P</mi>
      <mo stretchy="false">(</mo>
      <mi>E</mi>
      <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
      <mi>H</mi>
      <mo stretchy="false">)</mo>
      <mi>P</mi>
      <mo stretchy="false">(</mo>
      <mi>H</mi>
      <mo stretchy="false">)</mo>
    </mrow>
    <mrow>
      <mi>P</mi>
      <mo stretchy="false">(</mo>
      <mi>E</mi>
      <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
      <mi>H</mi>
      <mo stretchy="false">)</mo>
      <mi>P</mi>
      <mo stretchy="false">(</mo>
      <mi>H</mi>
      <mo stretchy="false">)</mo>
      <mo>+</mo>
      <mi>P</mi>
      <mo stretchy="false">(</mo>
      <mi>E</mi>
      <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
      <mi>n</mi>
      <mi>o</mi>
      <mi>t</mi>
      <mi>H</mi>
      <mo stretchy="false">)</mo>
      <mi>P</mi>
      <mo stretchy="false">(</mo>
      <mi>n</mi>
      <mi>o</mi>
      <mi>t</mi>
      <mi>H</mi>
      <mo stretchy="false">)</mo>
    </mrow>
  </mfrac>
</math>

---

## 동전 던지기 베이지안
```python
import matplotlib.pyplot as plt
import numpy as np
import scipy.stats as stats
from IPython.core.pylabtools import figsize

figsize(15, 9)

dist = stats.beta
n_trials = [0, 1, 2, 3, 4, 5, 8, 15, 50, 300, 500, 1000]
data = stats.bernoulli.rvs(0.5, size = n_trials[-1]) # binomial with p(h) = 0.5
x = np.linspace(0, 1, 100)

for k, N in enumerate(n_trials):
  sx = plt.subplot(len(n_trials) / 2, 2, k+1)
  plt.xlabel("P(H)", fontsize = 13) if k in [0, len(n_trials) - 1] else None
  plt.setp(sx.get_yticklabels(), visible = False)
  heads = data[:N].sum()
  y = dist.pdf(x, 1 + heads, 1 + N - heads)
  plt.plot(x, y, label = 'Trial %d \n Head %d Times' % (N, heads))
  plt.fill_between(x, 0, y, color = '#348abd', alpha = .4)
  plt.vlines(0.5, 0, 4, color = 'k', linestyles = '--', lw = 1)

  leg = plt.legend()
  leg.get_frame().set_alpha(0.4)
  plt.autoscale(tight = True)

plt.suptitle('Bayesian Update (Probability of Head)', y = 1.02, fontsize = 14)
plt.tight_layout()
```

![d](https://user-images.githubusercontent.com/75519839/179468124-778cd98f-87b7-4270-847a-e1b702631d3e.png)

- 해당 코드를 통해 동전을 여러 번 던졌을 때 앞면이 나올 확률을 점점 추정하는 과정이다.


### 신뢰구간 베이지안
```python
import numpy as np

from scipy import stats

coinflips = np.random.binomial(1, 0.5, 20)

def confidence_interval(data, confidence = 0.95):
    data = np.array(data)
    mean = np.mean(data)
    n = len(data)
    s = data.std(ddof = 1)
    stderr = s / np.sqrt(n)
    print(stderr)
    
    t = stats.t.ppf( (1 + confidence) / 2.0 , n - 1)
    margin_of_error = t * stderr
    interval = stderr * stats.t.ppf((1 + confidence) / 2.0, n - 1)
    return (mean, mean - interval, mean + interval)

confidence_interval(coinflips)

```

- 위 코드를 통해 Frequency 기반 신뢰구간 추정이 가능하다.