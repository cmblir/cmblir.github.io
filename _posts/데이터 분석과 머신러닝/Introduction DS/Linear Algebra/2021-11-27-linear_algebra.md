---
title:  "데이터 분석과 머신러닝 - Linear Algebra"
excerpt: "공분산과 분산에 대해"

categories:
  - 데이터 분석과 머신러닝
tags:
  - [데이터 분석, 머신러닝]

toc: true
toc_sticky: true
 
date: 2021-11-27
last_modified_at: 2021-11-27
---

# 분산이란?
- 데이터가 얼마나 퍼져있는지
- 데이터 분석에서 Variance 라고 불리우며 분산을 통해 평균을 구하고, 평균을 통해 분산을 구할 수도 있다.

모집단의 분산은 모집단의 PARAMETER (aspect, property, attribute, etc)이며,
샘플의 분산은 샘플의 STATISTIC (estimated attribute)이다.

![ㅁㅁ](https://user-images.githubusercontent.com/75519839/179471482-63af451c-8205-4e4d-a04a-5333e9293aaa.png)

## 공분산이란?
- 2개의 확률변수의 선형 관계를 나타내는 값이다.
- 2개의 변수 중 하나의 값이 상승하는 경향을 보일 때 다른 값도 상승하는 선형 상관성이 있다면 양수의 공분산을 가진다.
- 반대로 하나의 값이 상승하는 경향을 보일 때 다른 값이 하강하는 선형 상관성을 보인다면 공분산의 값은 음수가 된다.

# 표준편차
- 평균에 대한 오차이다.
- 실 데이터 값이 평균을 기준으로 할 때 얼마나 기복 여부가 있는 지 나타내는 것이다.

![cov](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Covariance_trends.svg/100px-Covariance_trends.svg.png)

[출처 : 위키백과]