---
title:  "[파이썬][Codility_] BinaryGap"
excerpt: "Codility BinaryGap 문제 풀이"

categories:
  - 코딩테스트
tags:
  - [알고리즘, 라이브코딩, 코테, Codility, Lessons]

toc: true
toc_sticky: true
 
date: 2022-06-22
last_modified_at: 2022-06-22
---


## 1. 문제

A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

def solution(N)

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.


> 출처: Codility_, https://app.codility.com/programmers/

## 2. 해결방법 시간복잡도
1. 단순 코딩 O(1)


## 3. 문제 해결 및 코드
--- 

<script src="https://gist.github.com/godhin/334cd7a9c941c122e1b003be1f21228b.js"></script>

- 주석을 참고하면서 이해를 돕습니다.
---

## 4. 알고리즘 및 해설

1. bin() 함수를 통해 해당 문자열을 이진수로 바꿔준다.
2. strip()으로 좌우측 0과 1을 제외해준다.
    - 해당 문제에서 말하는 바이너리 갭은 110011처럼 숫자 사이에 낀 것을 뜻한다.
3. 이후 반복되는 수중 가장 길이가 긴 문자열의 길이를 출력한다.