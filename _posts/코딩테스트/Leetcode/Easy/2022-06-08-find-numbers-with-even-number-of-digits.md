---
title:  "[파이썬][Leetcode][릿코드] find numbers with even number of digits"
excerpt: "Leetcode find numbers with even number of digits 문제 풀이"

categories:
  - 코딩테스트
tags:
  - [알고리즘, 파이썬, 코테, Leetcode, 릿코드]

toc: true
toc_sticky: true
 
date: 2022-06-08
last_modified_at: 2022-06-08
---


## 1. 문제

<h2>  Find Numbers with Even Number of Digits</h2><hr><div><p>Given an array <code>nums</code> of integers, return how many of them contain an <strong>even number</strong> of digits.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [12,345,2,6,7896]
<strong>Output:</strong> 2
<strong>Explanation: 
</strong>12 contains 2 digits (even number of digits).&nbsp;
345 contains 3 digits (odd number of digits).&nbsp;
2 contains 1 digit (odd number of digits).&nbsp;
6 contains 1 digit (odd number of digits).&nbsp;
7896 contains 4 digits (even number of digits).&nbsp;
Therefore only 12 and 7896 contain an even number of digits.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [555,901,482,1771]
<strong>Output:</strong> 1 
<strong>Explanation: </strong>
Only 1771 contains an even number of digits.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 500</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>
</div>

> 출처: Leetcode, https://leetcode.com/

## 2. 해결방법 시간복잡도
1. 단순 코딩 O(N)


## 3. 문제 해결 및 코드
--- 

<script src="https://gist.github.com/godhin/f898a7c26ead839276fb65ea74070637.js"></script>

- 주석을 참고하면서 이해를 돕습니다.
---

## 4. 알고리즘 및 해설

1. 반복문을 통해 해당 문자열내 숫자가 짝수라면 값을 더해준다.
2. 최종값을 출력한다.