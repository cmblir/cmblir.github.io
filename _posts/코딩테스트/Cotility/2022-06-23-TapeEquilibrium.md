---
title:  "[파이썬][Codility_][코디리티] TapeEquilibrium"
excerpt: "Codility TapeEquilibrium 문제 풀이"

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

A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

For example, consider array A such that:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:

P = 1, difference = |3 − 10| = 7
P = 2, difference = |4 − 9| = 5
P = 3, difference = |6 − 7| = 1
P = 4, difference = |10 − 3| = 7
Write a function:

def solution(A)

that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000].
Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> 출처: Codility_, https://app.codility.com/programmers/

## 2. 해결방법 시간복잡도
1. 단순 코딩 O(N)


## 3. 문제 해결 및 코드
--- 

<script src="https://gist.github.com/godhin/49a2fb5ae8c51b4ffb7b83fbf11778b4.js"></script>

- 주석을 참고하면서 이해를 돕습니다.
---

## 4. 알고리즘 및 해설

1. 문제의 요점은 P까지의 합과 P이후의 합의 차를 절대값으로 구하고, 모든 P의 수 중 가장 작은 값을 도출하는 것이다.
2. 0이라는 값과 A 배열의 모든 합을 좌측 우측으로 지정해준다.
    3. 결과값은 None으로 지정해줘서 계속해서 업데이트 해준다.
4. 반복문을 통해 좌 우측 값을 업데이트하고 값을 계산해서, min()을 통해 결과값들을 비교후 가장 작은 값을 도출해준다.

## 5. 내가 처음 시도했던 방식
```python
result = None
for i in range(1, len(A)):
    if result == None: result = abs(sum(A[:i]) - sum(A[i:]))
    else: result = min(abs(sum(A[:i]) - sum(A[i:])), result)
return result
```

1. 위와 같은 방법이나 리스트내에서 현재 위치 i 이전의 합과, 현재 위치 i 이후의 값을 계산한다는 점에서 시간복잡도가 높게 나온 것 같다.
    - 해당 방식으로 해결한 결과 시간 복잡도 O(N*N)