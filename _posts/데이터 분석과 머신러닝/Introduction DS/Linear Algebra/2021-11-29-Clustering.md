---
title:  "[파이썬][데이터분석] 데이터 분석과 머신러닝 - Clustering"
excerpt: "데이터 유사도에 대해"

categories:
  - 데이터 분석과 머신러닝
tags:
  - [데이터 분석, 머신러닝]

toc: true
toc_sticky: true
 
date: 2021-11-29
last_modified_at: 2021-11-29
---

# Clustering
- 클러스터링은 Unsupervised Learning Algorithm(비지도 학습 알고리즘)의 한 종류이다. 

## 목적
- 데이터들이 얼마나 또는 어떻게 유사한지를 알아보는 것이다.
- 비지도 학습답게 정답을 보장하지 않는다는 이슈가 있어서 간단한 분석이나 예측을 위한 모델링에 쓰이기보다 EDA 과정에서 많이 사용되는 기법이다.

### 종류
1. Hierachical
    - Agglomerative : 개별 포인트에서 시작후 점점 크게 합쳐간다.
    - Divisive : 한 개의 큰 클러스터에서 시작 후 점점 작은 클러스터로 나눠진다.
2. Point Assignment
    - 클러스터의 수를 정한 다음 시작하여, 데이터들을 하나씩 클러스터에 배정시킨다.

- Hard Clustering VS Soft Clustering
1. 하드 클러스터링에서 데이터는 하나의 클러스터에만 할당된다.
    - 일반적인 클러스터링의 경우 하드 클러스터링에 속한다.
2. 소프트 클러스터링에서 데이터는 여러 클러스터에 확률을 가지고 할당된다.

## Similarity
- 유사도란 두 데이터가 얼마나 같은지 나타내는 척도이다. 모든 분야에서 데이터 간의 유사도를 측정하는 것이 중요하고 특히 위에서 언급한 클러스터링이나 분류 알고리즘의 기반이 된다.

### 종류와 의미
1. Euclidean (유클리디안 유사도)
    
        가장 흔한 방법으로 실제 거리라는 의미에 부합하는 측정방법이다.
        두 벡터간의 직선 거리를 측정하는 것
2. Cosine (코사인 유사도)
        
        코사인 유사도또한 유클리디안 유사도와 마찬가지로 많이 사용되는 방법이다.
        두 벡터가 이루는 각의 코사인 값을 통해서 유사도를 측정하는 것이고, 코사인 유사도는 각이 작을수록 1에 가까워지고 커질수록 -1에 가까워진다. (이는 이루는 각이 90도에 가까울 수록 유사도는 0에 가깝다.)
3. Jaccard (자카드 유사드)

        두 문장을 각각의 단어의 집합을 통해 유사도를 측정하는 방법이다.
        이는 합집합의 개수와 교집합의 개수를 통해서 유사도를 구한다.
4. Manhattan Distance (맨해튼 유사도)

        맨해튼의 경우 정사각형 나뉜 곳을 기준으로 두 점 사이의 거리를 측정하는 방법이다.
        두 벡터간의 Cartesian coordinate의 차의 절대값의 합을 말한다.

## K-Means Clustering
- K-평균 알고리즘이라고도 불리며, 클러스터링을 해석해서 평균 군집화라고도 한다.
- K라는 데이터 셋에서 찾을 수 있는 클러스터(그룹)의 수를 통해서 각 데이터로부터 해당 데이터에 속한 클러스터의 중심까지의 평균거리를 계산하는 방법이다.

### 과정
1. K개의 랜덤한 데이터를 클러스터의 중심점으로 설정한다.
2. 중심점이 된 클러스터에 근접해 있는 데이터를 클러스터로 할당한다.
3. 변경된 클러스터에 대해서 중심점을 새로 계산한다.
4. 위의 2~3 과정을 변화가 없을때까지 반복한다.