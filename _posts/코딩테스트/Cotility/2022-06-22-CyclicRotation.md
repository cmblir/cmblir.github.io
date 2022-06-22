---
title:  "[파이썬][Codility_] CyclicRotation"
excerpt: "Codility CyclicRotation 문제 풀이"

categories:
  - 코딩테스트
tags:
  - [알고리즘, 라이브코딩, 코테, Codility, Lessons]

toc: true
toc_sticky: true
 
date: 2022-06-22
last_modified_at: 2022-06-23
---


## 1. 문제

An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

Write a function:

def solution(A, K)

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given

    A = [3, 8, 9, 7, 6]
    K = 3
the function should return [9, 7, 6, 3, 8]. Three rotations were made:

    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
For another example, given

    A = [0, 0, 0]
    K = 1
the function should return [0, 0, 0]

Given

    A = [1, 2, 3, 4]
    K = 4
the function should return [1, 2, 3, 4]

Assume that:

N and K are integers within the range [0..100];
each element of array A is an integer within the range [−1,000..1,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.


> 출처: Codility_, https://app.codility.com/programmers/

## 2. 해결방법 시간복잡도
1. 덱(deque) O(1)


## 3. 문제 해결 및 코드
--- 

<script src="https://gist.github.com/godhin/ef883c5fa2f2e33ef23bba0c5606a8ae.js"></script>

- 주석을 참고하면서 이해를 돕습니다.
---

## 4. 알고리즘 및 해설

1. 해당 문제의 경우 리스트내 값을 뒤에서 앞으로 바꿔오는 게 핵심이다.
2. deque를 통해 제일 뒤에 값을 앞에 만들어주고, 제일 뒤에 값을 빼는 형식으로 구현해봤다.

## 5. 파이썬 deque 구현
```python
from collections import deque # 덱 라이브러리
def solution(N):
    N = deque(N) # 덱 형태로 변환
```