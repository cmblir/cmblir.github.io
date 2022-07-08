---
title:  "Django 공식문서 - 6"
excerpt: "공식문서 가이드를 따라가면서 공부하기"

categories:
  - 장고
tags:
  - [장고]

toc: true
toc_sticky: true
 
date: 2022-07-06
last_modified_at: 2022-07-06
---
[출처 : 장고 공식문서]


## 데이터베이스 설치

mysite/settings.py 파일을 중심으로 이루어집니다.

- 장고는 기본적으로 SQLite를 사용하도록 구성되어 있다.
    - 이는 파이썬에서 기본으로 제공되기때문에 사용하는 것이다.
- 다른 데이터베이스를 사용하고 싶다면, 적절한 데이터베이스 바인딩을 설치해줘야한다.
    - DATABASES의 ‘default’값을 밑의 리스트중 바꿔주면 된다.
        
        ENGINE
        
        - `django.db.backends.sqlite3`
        - `django.db.backends.postgresql`
        - `django.db.backends.mysql`
        - `django.db.beckends.oracle`
    - 이외에도 SQLite를 제외한 다른 데이터베이스를 사용할 경우 여러 설정들이 필요하다.
        - USER
        - PASSWORD
        - HOST

- INSTALLED_APPS의 장고와 함께 제공되는 것들
    - `django.contrib.admin`
        - 관리용 사이트
    - `django.contrib.auth`
        - 인증 시스템
    - `django.contrib.contenttypes`
        - 컨텐츠 타입을 위한 프레임워크
    - `django.contrib.sessions`
        - 세션 프레임워크
    - `django.contrib.messages`
        - 메세징 프레임워크
    - `django.contrib.staticfiles`
        - 정적 파일을 관리하는 프레임워크
        
- 데이터베이스에서 테이블 생성하기
    
    `$ python manage.py migrate`
    
    - migrate 명령어는 INSTALLED_APPS의 설정을 탐색하여, settings의 데이터베이스 설정과 app과 함께 제공되는 database migrations에 따라 데이터베이스 테이블을 생성한다.
    - 생성된 내용이 궁금하다면 각각의 데이터베이스에 따라 클라이언트에 접속 후 확인이 가능하다.
        
        **PostgreSQL**
        
        - `\dt`
        
        **MariaDB, MySQL**
        
        - `SHOW TABLES;`
        
        **SQLite**
        
        - `.tables`
        
        **Oracle**
        
        - `SELECT TABLE_NAME FROM USER_TABLES;`