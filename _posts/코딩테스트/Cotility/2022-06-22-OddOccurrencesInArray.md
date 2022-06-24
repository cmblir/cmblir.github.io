---
title:  "[파이썬][Codility_][코디리티] OddOccurrencesInArray"
excerpt: "Codility OddOccurrencesInArray 문제 풀이"

categories:
  - 코딩테스트
tags:
  - [알고리즘, 라이브코딩, 코테, Codility, 코디리티, Lessons]

toc: true
toc_sticky: true
 
date: 2022-06-22
last_modified_at: 2022-06-23
---


## 1. 문제

A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

def solution(A)

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.
Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> 출처: Codility_, https://app.codility.com/programmers/

## 2. 해결방법 시간복잡도
1. 단순 코딩 O(N) or O(Nlog(N))


## 3. 문제 해결 및 코드
--- 

<script src="https://gist.github.com/godhin/3ee3497ab7d98a79783abfd495e55a2d.js"></script>

- 주석을 참고하면서 이해를 돕습니다.
---

## 4. 알고리즘 및 해설

1. 해당 문제의 요점은 리스트내 짝을 이루는 값이 있는 지 확인하는 것이다.
2. 짝을 이룬다 == 해당 값이 2의 배수이다. 이므로 리스트를 정렬해준다.
3. 정렬된 리스트를 반복문을 통해 경우에 따라 값을 출력한다.
    - 경우 1. 짝수이므로 해당 위치 + 1이 마지막인 경우에는 홀수이므로 출력
    - 경우 2. 해당 위치값과 다음 값이 다른 경우에는 해당 위치값이 짝이 없는 것이므로 출력

## 5. 알아두면 좋은 정보
1. **sort()또는 sorted()** 함수의 경우 버블과 같이 느린 방식이 아닌 최적화된 정렬 알고리즘 방식을 사용하기 때문에 시간복잡도가 O(nlogn)이 된다.

정렬 알고리즘 문제 해결에 참고한 블로그 : [djm03178]('http://www.secmem.org/blog/2019/04/10/special-sorts/')

