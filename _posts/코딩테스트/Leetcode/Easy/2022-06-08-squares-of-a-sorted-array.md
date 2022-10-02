---
title:  "[파이썬][Leetcode][릿코드] squares of a sorted array"
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

<h2>  Squares of a Sorted Array</h2><hr><div><p>Given an integer array <code>nums</code> sorted in <strong>non-decreasing</strong> order, return <em>an array of <strong>the squares of each number</strong> sorted in non-decreasing order</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [-4,-1,0,3,10]
<strong>Output:</strong> [0,1,9,16,100]
<strong>Explanation:</strong> After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [-7,-3,2,3,11]
<strong>Output:</strong> [4,9,9,49,121]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code><span>1 &lt;= nums.length &lt;= </span>10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>nums</code> is sorted in <strong>non-decreasing</strong> order.</li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Squaring each element and sorting the new array is very trivial, could you find an <code>O(n)</code> solution using a different approach?</div>

> 출처: Leetcode, https://leetcode.com/

## 2. 해결방법 시간복잡도
1. 단순 코딩 O(Nlog(N))


## 3. 문제 해결 및 코드
--- 

<script src="https://gist.github.com/cmblir/cd3fd14b5e5e090437780c31ee97a147.js"></script>

- 주석을 참고하면서 이해를 돕습니다.
---

## 4. 알고리즘 및 해설

1. 반복문을 통해 해당 위치값을 제곱으로 변경해준다.
2. 변경된 리스트를 정렬하여 불러온다.