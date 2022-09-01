---
title:  "[파이썬][라이브러리] Django 공식문서 - 2"
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

## 장고 흩어보기

### 1. Model

```python
from django.db import models

class Reporter(models.Model):
    full_name = models.CharField(max_length=70)

    def __str__(self):
        return self.full_name

class Article(models.Model):
    pub_date = models.DateField()
    headline = models.CharField(max_length=200)
    content = models.TextField()
    reporter = models.ForeignKey(Reporter, on_delete=models.CASCADE)

    def __str__(self):
        return self.headline
```

- 장고에는 모델을 사용할 수 있다.

```bash
$ python manage.py makemigrations
$ python manage.py migrate
```

- 데이터베이스를 자동으로 생성해주는 장고의 명령어이다.
- makemigrations 명령은 생성 가능한 모델을 찾아 테이블이 존재하지 않은 경우 마이그레이션을 생성한다.
- migrate는 사용자의 데이터베이스에 테이블을 생성한다.

```python
from django.db import models

class Article(models.Model):
    pub_date = models.DateField()
    headline = models.CharField(max_length=200)
    content = models.TextField()
    reporter = models.ForeignKey(Reporter, on_delete=models.CASCADE)
```

- 장고는 동적인 관리자 인터페이스이다.
- 장고 앱을 생성하는 하나의 전형적인 작업 흐름
    - 모델을 만든다.
    - 관리자 사이트를 올려서 가능한 빠르게 작동할 수 있게 한다.
    - 데이터 입력을 한다.

### 2. URL

```python
from django.urls import path

from . import views

urlpatterns = [
    path('articles/<int:year>/', views.year_archive),
    path('articles/<int:year>/<int:month>/', views.month_archive),
    path('articles/<int:year>/<int:month>/<int:pk>/', views.article_detail),
]
```

- 장고는 php나 asp같은 불필요한 내용없이도 url 설계가 가능하다.
    - 위와 같이 url을 설계한 경우 ‘/articles/2022/07/12345/’로 요청을 보내면 해당 사이트에 맞게끔 뷰를 호출한다.

### 3. View

```python
from django.shortcuts import render

from .models import Article

def year_archive(request, year):
    a_list = Article.objects.filter(pub_date__year=year)
    context = {'year': year, 'article_list': a_list}
    return render(request, 'news/year_archive.html', context)
```

- 각각의 뷰는 다음 중 하나를 수행하게 된다.
    1. HttpResponse
    2. Http404
- 일반적인 뷰는 파라미터들에 따라 데이터를 가져오며 템플릿을 로드하고 템플릿을 가져온 데이터로 렌더링한다.
- 위의 코드는 직전에 만든 articles의 yaer_archive에 대한 예제이다.

### 4. Templates

- 템플릿은 우리가 보여지는 곳을 말한다.

<script src="https://gist.github.com/godhin/2f469ae67c38c44b731428ad41508a32.js"></script>

- 위에서 article과 year_archive의 템플릿을 만들 수 있는 예제이다.