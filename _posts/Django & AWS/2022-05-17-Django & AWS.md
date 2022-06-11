---
title:  "django를 시작해보자"
excerpt: "장고로 시작해서 AWS까지 - 1"

categories:
  - django
tags:
  - [django, aws]

toc: true
toc_sticky: true
 
date: 2022-06-09
last_modified_at: 2022-06-09
---

# 장고와 AWS 설치하기

### 프로젝트 배포를 위해 Django와 AWS를 공부해보았다.

1. 사용하기 위한 환경 구현
    1. 프로젝트에 사용할 환경변수 설정 (필자는 conda를 활용)
        ```bash
        conda create —name test python=3.8
        ```
         (파이썬은 3.8을 사용)
        
    2. Django 라이브러리 설치
        
        ```bash
        pip install django
        ```
        
2. 프로젝트 만들기
    1. 배포할 프로젝트 만들기
        
        ```bash
        django-admin startproject test
        ```
        
    2. 프로젝트에 앱 만들기
        
        ```bash
        cd test
        ```
        
        ```bash
        python [manage.py](http://manage.py) startapp main
        ```
        
    3. 프로젝트 설정 수정하기
        
        ![Django-AWS1](https://user-images.githubusercontent.com/75519839/168793812-97023850-ee97-40cf-a7e9-ee9df7cff6ba.png)
        
        # main 을 INSTALLED_APPS에 추가한다.
        
        <aside>
        💡 만약 앱이 여러개일 경우 해당 APPS에 본인이 사용할 앱 폴더명을 넣으면 된다.
        ex) app1, app2, app3 총 3개가 있다면,
        `INSTALLED_APPS = [
        ’app1’,
        ’app2’,
        ’app3’,
        ...]`
        
        </aside>
        
    4. 배포에 사용할 웹 구현
        
        ![Django-AWS2](https://user-images.githubusercontent.com/75519839/168793856-e0047e72-f84a-4d01-a633-574dfef1130f.png)
        
        내가 사용할 앱에 templates/main 폴더를 만들고 사용할 html 파일을 만든다.
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1> 장고를 화면에 띄웠습니다! </h1>
        </body>
        </html>
        ```
        
    5. views와 url 설정
        
        ```python
        from django.shortcuts import render
         
        # Create your views here.
        def index(request):
            return render(request, "main/index.html")
        # index.html은 필자가 사용한 html 파일 이름이다. 만약 이름이 다르면 변경하고 폴더주소도 다를경우 변경
        ```
        
        ```python
        from django.contrib import admin
        from django.urls import path
        from main import views as main_views
         
        urlpatterns = [
            path('', main_views.index, name="index"), # html 파일 이름을 사용한다
            path('admin/', admin.site.urls),
        ]
        ```
        
    6. 기본 모델들 migrate
        
        ```bash
        python [manage.py](http://manage.py) makemigrations && manage.py migrate
        ```
        
    7. 서버 구동
        
        ```bash
        python [manage.py](http://manage.py) runserver
        ```
        
        [http://127.0.0.1:8000/](http://127.0.0.1:8000/) 주소 접속
        
    8. 서버 컴퓨터에 패키지 설치를 위해 requirements.txt 만들기
        
        ```bash
        pip freeze >> requirements.txt
        ```
        
        ```bash
        cat requirements.txt
        ```
        requirements 내용 확인