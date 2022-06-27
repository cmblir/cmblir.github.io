---
title:  "[파이썬][Codility_][코디리티] FrogRiverOne"
excerpt: "Codility FrogRiverOne 문제 풀이"

categories:
  - 코딩테스트
tags:
  - [알고리즘, 라이브코딩, 코테, Codility, 코디리티, Lessons]

toc: true
toc_sticky: true
 
date: 2022-06-27
last_modified_at: 2022-06-27
---


## 1. 문제

A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

For example, you are given integer X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

Write a function:

def solution(X, A)

that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

If the frog is never able to jump to the other side of the river, the function should return −1.

For example, given X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
the function should return 6, as explained above.

Write an efficient algorithm for the following assumptions:

N and X are integers within the range [1..100,000];
each element of array A is an integer within the range [1..X].
Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> 출처: Codility_, https://app.codility.com/programmers/

## 2. 해결방법 시간복잡도
1. 단순 코딩 O(N)


## 3. 문제 해결 및 코드
--- 

<script src="https://gist.github.com/godhin/7756668f3933dafd35fe387471f98c8f.js"></script>

- 주석을 참고하면서 이해를 돕습니다.
---

## 4. 알고리즘 및 해설

1. 해당 문제의 요점은 반복문이 돌아가는 동안 해당 인덱스값까지의 배열의 합이 나왔을 대 해당 위치값을 반환하는 것이다.
    - ex) X = 5, A = [1, 3, 1, 4, 2, 3, 5, 4]
    - 5까지의 배열은 [1, 2, 3, 4, 5]이다. 해당 값이 모두 나왔을 때의 위치값을 반환해야하므로
    - [*1*, *3*, 1, *4*, *2*, 3, *5*]
    - 모든 값이 다 나온 시점인 A[6] 즉 6이 반환되야한다.
2. 일단 False라는 값으로 가득찬 리스트를 만들어준다.
    - *파이썬 3.x부터는 False는 0을 의미하고 True는 1을 의미한다.*
3. 이후 enumerate() 함수를 이용해 해당 위치값, 해당 인덱스값을 동시에 받아 반복문을 돌린다.
4. 반복문이 돌아가는 동안 해당 인덱스값을 직전에 만든 dp라는 리스트의 위치값에 True로 바꿔준다.
    - j - 1을 한 이유는 리스트는 숫자 0부터 시작하므로 1을 빼준것이다.
    - 우리가 찾아야하는 값은 X까지이므로 X-1까지의 값이 리스트 위치값이라고 생각하면 편하다.
5. 반복문이 도는 동안 만약 전체 배열을 찾았다면 해당 위치값을 반환해준다.
    - 아니라면 -1을 반환해준다.