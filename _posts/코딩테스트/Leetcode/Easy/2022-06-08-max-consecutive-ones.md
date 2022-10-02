---
title:  "[파이썬][Leetcode][릿코드] max consecutive ones"
excerpt: "Leetcode max consecutive ones 문제 풀이"

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

<h2>  Max Consecutive Ones</h2><hr><div><p>Given a binary array <code>nums</code>, return <em>the maximum number of consecutive </em><code>1</code><em>'s in the array</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,1,0,1,1,1]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [1,0,1,1,0,1]
<strong>Output:</strong> 2
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>nums[i]</code> is either <code>0</code> or <code>1</code>.</li>
</ul>
</div>

> 출처: Leetcode, https://leetcode.com/

## 2. 해결방법 시간복잡도
1. 단순 코딩 O(N)


## 3. 문제 해결 및 코드
--- 

<script src="https://gist.github.com/cmblir/6caecad823b230efc5abf5bf43c88c83.js"></script>

- 주석을 참고하면서 이해를 돕습니다.
---

## 4. 알고리즘 및 해설

1. 반복문을 통해 해당 값이 1이라면 카운트해준다.
    - 이때 만약 최대 중복 갯수값보다 크다면 그 값을 변경해준다.
2. 만약 중복값이 없고, 해당 값이 0이 아니라면 카운트는 0이 된다.
3. 최종 덮어준 값을 출력해준다.