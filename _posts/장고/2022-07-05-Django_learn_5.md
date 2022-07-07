---
title:  "Django 공식문서 - 5"
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


# 설문조사 앱 만들기

<aside>
🔥 프로젝트와 앱의 차이점
앱은 블로그 시스템, 공개 기록 데이터베이스 또는 소규모 의견조사 앱과 같은 작업을 수행하는 웹 어플리케이션이다. 프로젝트는 특정 웹 사이트에 대한 구성 및 앱의 모음이다.
그러므로 프로젝트에는 여러 개의 앱이 포함이 될 수 있고, 앱은 여러 프로젝트에 있을 수 있다.

</aside>

- 만들기에 앞서 4장에서 했던 mysite를 생성했는지 여부를 확인한다.

**`$** python manage.py startapp polls`

mysite라는 프로젝트에 manage.py를 통해 새로운 앱을 생성해준다.

```
polls/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    views.py
```

---

## 첫 번째 뷰 작성

```python
from django.http import HttpResponse

def index(request):
return HttpResponse("Hello, world. You're at the polls index.")
```

- 이전 장에서 설명했듯이 뷰는 보여지는 곳이다. 장고의 튜토리얼에서는 해당 문구를 불러오는 것으로 시작된다.

```python
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('polls/', include('polls.urls')),
    path('admin/', admin.site.urls),
]
```

- mysite안에 urls 파일을 수정해준다.
- urls는 우리가 접속하려는 주소를 통해 특정 조건의 파일을 호출하는 형식이 가능하다.
- include() 함수는 다른 URLconf들을 참조할 수 있도록 도와준다. 이때 장고가 include()를 만나게 되면, URL의 그 시점까지 일치하는 부분을 잘라내고, 남은 문자열 부분을 후속 처리를 위해 삽입된 URLconf로 전달한다.

<aside>
🔥 include() 함수의 경우 다른 URL 패턴을 포함할 경우 항상 사용된다고 보면 된다.
단, admin.site.urls는 예외처리된다.

</aside>

### path() 함수와 인수에 대해

- path() 함수에는 2개의 필수 인수인 route와 view, 2개의 선택 가능한 인수로 kwargs와 name까지 모두 4개의 인수가 전달된다.


1. **route**
    
    URL 패턴을 지닌 문자열이다. 요청이 처리될 때, 장고는 urlpatterns의 첫 번째 패턴부터 시작하여 일치하는 패턴을 찾을 때까지 요청된 URL을 각 패턴과 리스트의 순서대로 비교한다.
    
2. **view**
    
    일치하는 패턴을 찾으면, HttpRequest 객체를 첫번째 인수로 하고, 경로로 부터 ‘캡처된' 값을 키워드 인수로 하여 특정한 view 함수를 호출한다.
    
3. **kwargs**
    
    임의의 키워드 인수들은 목표한 view에서 사전형으로 전달된다.
    
4. **name**
    
    URL에 이름을 지으면, 템플릿을 포함한 장고 어디에서나 명확하게 참조가 가능하다.
    
    이 기능을 사용하여, 단 하나의 파일만 수정해도 프로젝트내의 모든 URL 패턴을 바꿀 수 있도록 도와준다.