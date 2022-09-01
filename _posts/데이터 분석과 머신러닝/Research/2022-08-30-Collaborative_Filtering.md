---
title:  "[파이썬][추천 알고리즘] Collaborative Filtering (협업 필터링)"
excerpt: "추천 시스템 구현에 대해 알아보자"

categories:
  - 추천 시스템
tags:
  - [추천 시스템]

toc: true
toc_sticky: true
 
date: 2022-08-30
last_modified_at: 2022-08-30
---

# 협업 필터링(Collaborative Filtering)

### 추천 알고리즘의 2종류

1. 관심사를 찾아본다. → Content Based Filtering
2. 취향을 찾아본다. → Collaborative Filtering

### 특징

정보가 축적된 데이터를 기반으로 추천

1. 예시 
    - 검은셔츠 구매이력
        - 소비자(1)가 검은 셔츠를 사면서 청바지를 샀다.
        - 소비자(2)가 검은 셔츠를 사면서 슬랙스를 샀다.
        - 소비자(3)가 검은 셔츠를 샀다.
        - 소비자(4)가 검은 셔츠를 사면서 양말을 샀다.
        - …
        - 소비자(123)가 검은 셔츠를 사면서 청바지를 샀다.
2. 결과
    - **검은 셔츠를 샀는데 청바지를 추천해줬다.**
    

### 종류

1. Memory-Based Approach
    - User, Item 유사한 데이터를 사용한다.
        - Cosine Similarity, Pearson Correlation을 사용한다.
            - KNN 방법도 가능
    - 가능한 빠르고 쉽게 만들수 있다.
    - 가독성이 좋다.
    - 도메인 지식이 불필요하다.
    
2. Model Based Approach
    - 기계학습을 통해 추천하는 방식
        - 최적화 방법이나, 매개변수 사용
            - Matrix Factorization, SVD, 신경망
    - Sparse한 데이터 처리 가능하다.
    - 가독성이 안좋다.


## Filtering

### User-based Filtering

- User를 선택하는 방식
    - SNS 친구 추천 서비스
    - 평점 유사도를 기반으로 나와 유사한 사용자를 찾음
    - 유사한 사용자가 좋아하는 것을 추천
- 예시
    - 당신과 비슷한 A는 청바지를 좋아합니다.
    

### Item-based Filtering

- Item을 선택하는 방식
- 해당 사용자들이 공통적으로 좋아했던 다른 item을 찾음
- 예시
    - 검은 셔츠를 구매한 고객이 대개 청바지를 구매하였습니다.