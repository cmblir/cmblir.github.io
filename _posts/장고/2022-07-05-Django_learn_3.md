---
title:  "Django 공식문서 - 3"
excerpt: "공식문서 가이드를 따라가면서 공부하기"

categories:
  - 장고
tags:
  - [장고]

toc: true
toc_sticky: true
 
date: 2022-07-05
last_modified_at: 2022-07-05
---
[출처 : 장고 공식문서]

## 파이썬 설치하기

1. 파이썬 공식 홈페이지인 [https://www.python.org/downloads/](https://www.python.org/downloads/) 에서 설치하기를 바란다.

## 데이터베이스 설정하기

1. PostgreSQL, MariaDB, MySQL, Oracle과 같은 규모의 데이터베이스 엔진을 사용하여 작업할 때만 필요하다.

## 파이썬에 장고 확인하기

```bash
>>> import django
>>> print(django.get_version())
4.0
```