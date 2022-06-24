---
title:  "데이터 분석과 머신러닝 - Hypothesis Test - 2"
excerpt: "가설 검정에 대해 - 2"

categories:
  - 데이터 분석과 머신러닝
tags:
  - [데이터 분석, 머신러닝]

toc: true
toc_sticky: true
 
date: 2021-11-23
last_modified_at: 2021-11-23
---

# 1.6 Hypothesis Test
- 가설 검정에 대하여
가설 검정이란 주어진 상황에 대해서 하고자 하는 주장의 진위여부를 확인하는 것
데이터 분석에서는 모집단의 실제 값에 대한 sample의 통계치를 사용해서 통계적으로 유의한 지 아닌 지 확인하는 것

- 이전편에서 이어지는 내용에 T-test를 사용하기 위해서 조건이 필요한게 해당 조건에 대해 알아보자

## T-test 특성
1. 독립성
    - 두 그룹이 연결되어 있는 쌍인지
2. 등분산성
    - 두 그룹이 어느정도 유사한 수준의 분산 값을 가지는지
3. 정규성
    - 데이터가 정규성을 나타나는지

## Type Error
<img src = 'https://cdn.scribbr.com/wp-content/uploads/2021/01/type-i-and-ii-error-2.png'></img>
[이미지 출처 : https://www.scribbr.com/statistics/type-i-and-type-ii-errors/]

### Type 1 error (1종 오류)
- 귀무가설이 실제로 참이지만, 귀무가설이 기각하는 오류
- 음성을 양성으로 판정 => Negative ~> Positive
- 거짓 양성또는 알파 오류로 불림 (False Positive) or (∂ error)
- 1종 오류의 0.05% 또는 5% 유의수준은 귀무가설이 5% 확률로 잘못 기각됨


### Type 2 error (2종 오류)
- 귀무가설이 실제로 거짓이지만, 귀무가설을 채택하는 오류
- 양성을 음성으로 판정 => Positive ~> Negative
- 거짓 음성 또는 베타 오류로 불림 (False Negative) or (ß error)