---
title:  "Django 공식문서 - 4"
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


## django 버젼 확인하기

 `$ python -m django —version`

- Django의 공식문서에서는 Django 버젼 4.0, Python 3.8 이후의 버젼을 지원합니다.
- 이전 버젼의 Python의 경우 faq-python-version-supprot에서 호환되는 Django를 이용할 것
    - 새로 작업을 하는 경우 버젼확인은 필수불가결적인 것이다.

## 프로젝트 만들기

`$ django-admin startproject mysite`

- 장고의 프로젝트를 기획할 때 코드를 자동으로 생성하는데 이때 최소한의 옵션들을 불러오는 코드릀 ㅏ용하게 된다. mysite 위치에 내가 사용할 폴더명을 지정해주면 된다.

<aside>
🔥 해당 공식문서에서는 웹 서버의 최상단에 코드 전체를 작성하는 경우가 익숙할 것임을 인지하고, Python코드의 경우 보안을 위해 DocumentRoot의 바깥에 두는 것을 권장한다.

</aside>

```
mysite/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

---

### 구조들에 대해 살펴보자

- mysite
    - 디텍토리 밖은 프로젝트를 담는 공간이다. 처음에 mysite로 생성했기때문에 해당 폴더명으로 장고가 만들어지나 폴더명을 변경해도 무관하다.
- manage.py
    - 장고 프로젝트와 다양한 방법으로 상호작용하는 커맨드라인 유틸리티이다. 프로젝트의 몸통과도 같은 느낌이라고 이해했다.
- mysite/
    - 디텍토리 내부로 실 프로젝트 패키지들이 저장된다.
    - __init__.py
        - 해당 디텍토리를 패키지처럼 다루라고 알려주는 용도의 단순한 빈 파일이다.
    - settings.py
        - 장고 프로젝트의 환경 및 구성을 저장한다.
    - urls.py
        - 장고 프로젝트의 URL 선언을 저장한다. 목차로 이해할 수있다.
    - asgi.py
        - 현재 프로젝트를 서비스하기 위한 ASGI-호환 웹 서버의 진입점이다. ASGI를 사용하여 배포를 진행할 때 사용하는 파일이다.
    - wsgi.py
        - 현재 프로젝트를 서비스하기 위한 WSGI 호환 웹 서버의 진입점이다. WSGI를 사용하여 배포를 진행할 때 사용하는 파일이다.

---

## 개발 서버

`$ python [manage.py](http://manage.py) runserver`

- mysite에 들어가서 해당 프로젝트를 로컬서버에서 실행하는 커맨드이다.

```bash
Performing system checks...

System check identified no issues (0 silenced).

You have unapplied migrations; your app may not work properly until they are applied.
Run 'python manage.py migrate' to apply them.

7월 07, 2022 - 15:50:53
Django version 4.0, using settings 'mysite.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

- 실행을 하기될 시 위와같이 출력문이 나오게된다.
    - 여기서 127.0.0.1:8000에 접속해서 해당 프로젝트의 결과물을 확인이 가능하다.
        - localhost:8000으로도 가능하다.

### 포트 변경하기

**`$** python manage.py runserver 8080`

- 위의 커맨드와 동일하나 뒤에 포트번호를 입력해주면 내가 지정하는 포트로 들어가게 된다.
- 이는 추후에 Docker나 다른 로컬서버로 동시에 실행하게 될 때 유의미하다.

<aside>
🔥 **runserver의 자동 변경 기능**
서버를 돌린 상태에서 파일을 수정할 경우 자동으로 변경사항이 반영되기 때문에 서버를 재기동 하지 않아도 된다. 이는 작업물을 계속해서 수정할 경우 굉장히 용이한데, 파일을 추가하거나 몇몇 동작의 경우 서버가 자동으로 인식을 하지 못하기떄문에 재기동해줘야 하는 경우도 있다.

</aside>