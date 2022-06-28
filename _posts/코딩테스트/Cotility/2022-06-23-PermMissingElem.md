---
title:  "[파이썬][Codility_][코디리티] PermMissingElem"
excerpt: "Codility PermMissingElem 문제 풀이"

categories:
  - 코딩테스트
tags:
  - [알고리즘, 파이썬, 코테, Codility, 코디리티, Lessons]

toc: true
toc_sticky: true
 
date: 2022-06-23
last_modified_at: 2022-06-24
---


## 1. 문제

Task description
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

def solution(A)

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> 출처: Codility_, https://app.codility.com/programmers/

## 2. 해결방법 시간복잡도
1. 단순 코딩 O(N) or O(Nlog(N))


## 3. 문제 해결 및 코드
--- 

<script src="https://gist.github.com/godhin/5afa6fba851afcc2151af39c0909989b.js"></script>

- 주석을 참고하면서 이해를 돕습니다.
---

## 4. 알고리즘 및 해설

1. 문제의 요점은 순차적으로 증가하는 배열에서 규칙에 맞지않는 수를 찾는 것이다.
2. 내가 사용한 방법은 해당 규칙의 모든 수의 합 - 배열의 합을 한 것이다.
    - 이때 예외처리를 해야하는 것은 배열이 없는 경우는 1로 출력한다.