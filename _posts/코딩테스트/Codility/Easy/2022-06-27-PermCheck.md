---
title:  "[파이썬][Codility_][코디리티] PermCheck"
excerpt: "Codility PermCheck 문제 풀이"

categories:
  - 코딩테스트
tags:
  - [알고리즘, 파이썬, 코테, Codility, 코디리티, Lessons]

toc: true
toc_sticky: true
 
date: 2022-06-27
last_modified_at: 2022-06-27
---


## 1. 문제

A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

def solution(A)

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> 출처: Codility_, https://app.codility.com/programmers/

## 2. 해결방법 시간복잡도
1. 단순 코딩 O(N) or O(Nlog(N))


## 3. 문제 해결 및 코드
--- 

<script src="https://gist.github.com/godhin/9ef2b358e77b2f7e68ccd6a856b325de.js"></script>

- 주석을 참고하면서 이해를 돕습니다.
---

## 4. 알고리즘 및 해설

1. 해당 문제의 요점은 순열인지 확인하는 것이다.
    - 순열이란?
        - 1에서 N까지 연속적인 숫자들의 나열
2. 순열을 확인하기 위해 해당 리스트를 정렬한 이후 현재 값 + 1이 다음값이 아닌 경우와 맞는 경우를 나눈다.
    - 현재 값 + 1이 다음 값이 아니라면 순열이 아니므로 0을 반환한다.
3. 반복문이 끝나는 동안 별다른 문제가 없었다면 순열이므로 1을 반환한다.