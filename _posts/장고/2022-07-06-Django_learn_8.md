---
title:  "[파이썬][라이브러리] Django 공식문서 - 8"
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

## API 가지고 놀기

- 쉘을 통해 장고의 API를 자유롭게 가지고 놀아보자
    
    `$ python manage.py shell`
    
    - 쉘에 진입한 이후에는 데이터베이스 API를 사용할 수 있게 된다.
        - **영문의 내용을 직역한 것이므로 약간 이상할수도 있습니다!**
    
    ```bash
    >>> from polls.models import Choice, Question  
    # 방금 만든 모델의 클래스를 불러온다.
    
    # 아직 작성한 질문이 없으므로 아무것도 없는 쿼리가 뜰 것이다.
    >>> Question.objects.all()
    <QuerySet []>
    
    # 새 질문을 작성한다.
    # 기존 설정 파일에서 시간대가 활서화되어 있으므로
    # 장고에서는 pub_date에 대한 datetime을 통해 timezone을 사용한다.
    # 이렇게 해야 datetime.datetime.now()가 제대로 작동하게 된다.
    
    >>> from django.utils import timezone
    >>> q = Question(question_text="What's new?", pub_date=timezone.now())
    
    # 객체를 데이터베이스에 저장한다. 이떄 save() 함수를 사용해준다.
    >>> q.save()
    
    # 이제 ID가 생성되었다.
    >>> q.id
    1
    
    # 파이썬 속성을 통해 모델 필드값에 엑서스한다.
    >>> q.question_text
    "What's new?"
    >>> q.pub_date
    datetime.datetime(2012, 2, 26, 13, 0, 0, 775217, tzinfo=<UTC>)
    
    # 속성을 변경한 다음 save()를 호출하여 값을 변경해준다.
    >>> q.question_text = "What's up?"
    >>> q.save()
    
    # objects.all()를 통해 데이터베이스의 모든 질무늘 표시해준다.
    >>> Question.objects.all()
    <QuerySet [<Question: Question object (1)>]>
    ```
    

### 기존 model 파일 수정해주기

현재 위치는 polls/models.py

```python
import datetime

from django.db import models
from django.utils import timezone

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    def __str__(self):
        return self.question_text
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    def __str__(self):
        return self.choice_text
```

- 기존의 models 파일에서 __str__() 메소드를 추가하는 것은 객체의 표현을 대화식 프롬프트에서 편하게 보려는 이유오아 장고가 자동으로 생성하는 관리 사이트에서도 객체의 표현이 사용되기 때문이다.
- `import datetime`대신 장고의 시간대 관련 유틸리티인 `django.utils.timezone`를 추가해준다.

### 변경사항 반영후 다시

```bash
>>> from polls.models import Choice, Question

# __str__() 함수가 작동하는지 확인한다.
>>> Question.objects.all()
<QuerySet [<Question: What's up?>]>

# 장고는 전적으로 구동되는 풍부한 데이터베이스 검색 API를 제공한다.
# 키워드 인자
>>> Question.objects.filter(id=1)
<QuerySet [<Question: What's up?>]>
>>> Question.objects.filter(question_text__startswith='What')
<QuerySet [<Question: What's up?>]>

# 올해의 질문을 입력해보자
>>> from django.utils import timezone
>>> current_year = timezone.now().year
>>> Question.objects.get(pub_date__year=current_year)
<Question: What's up?>

# 존재하지 않은 ID를 요청하면 예외처리가 뜬다.
>>> Question.objects.get(id=2)
Traceback (most recent call last):
    ...
DoesNotExist: Question matching query does not exist.

# 기본 키로 조회하는 것이 가장 일반적인 경우이다. 장고도 마찬가지이다.
# 기본 키를 정확하게 조회하는 것 Question.objects.get(id=1)이다.
>>> Question.objects.get(pk=1)
<Question: What's up?>

# 내가 만든 것이 제대로 작동하는 지 확인해보자
>>> q = Question.objects.get(pk=1)
>>> q.was_published_recently()
True

# 질문에 몇 가지 선택사항을 제공한다.
# Choice 객체는 INSERT 문을 수행하고 집합에 선택 항목을 추가한다.
# 사용 가능한 선택 항목의 수를 반환하고 새로운 Choice 개체를 반환한다.
# ForeignKey 관계의 다른 쪽을 유지하도록 설정한다.
# 예를 들어 질문 선택과 같이 API를 통해 액세스할 수 있다.
>>> q = Question.objects.get(pk=1)

# 관련 개체 집합에서 선택 항목을 표시하는 것이지만 기존에 만든 것이 없으므로 아무것도 나오지 않는다.
>>> q.choice_set.all()
<QuerySet []>

# 3개의 선택지를 만든다.
>>> q.choice_set.create(choice_text='Not much', votes=0)
<Choice: Not much>
>>> q.choice_set.create(choice_text='The sky', votes=0)
<Choice: The sky>
>>> c = q.choice_set.create(choice_text='Just hacking again', votes=0)

# Choice 객체는 관련된 Question 객체에 대한 API 액세스 권한을 가진다.
>>> c.question
<Question: What's up?>

# 위의 반대의 경우도 마찬가지로 Question 객체도 Choice 객체에 액세스할 수 있다.
>>> q.choice_set.all()
<QuerySet [<Choice: Not much>, <Choice: The sky>, <Choice: Just hacking again>]>
>>> q.choice_set.count()
3

# API는 필요한 만큼 자동으로 관계를 따른다.
# 관계를 구분하라면 이중 밑줄을 사용해야한다.
# 원하는 만큼 깊은 수준까지 작동이 가능하고 제한은 없다.
# pub_date가 올해인 모든 질문에 대한 모든 선택을 찾기
# (위에서 생성한 'current_year' 변수 재사용).
>>> Choice.objects.filter(question__pub_date__year=current_year)
<QuerySet [<Choice: Not much>, <Choice: The sky>, <Choice: Just hacking again>]>

# 선택 항목중 하나를 삭제하기 위해서는 delete() 함수를 사용하면 된다.
>>> c = q.choice_set.filter(choice_text__startswith='Just hacking')
>>> c.delete()
```

### 관리자 생성

`$ python manage.py createsuperuser`

- 관리 사이트에 로그인할 수 있는 사용자를 생성해준다.

```bash
Username: admin
Email address: admin@example.com

Password: *******
Password(again): *******
```

- 사용할 이름, 이메일, 비밀번호를 입력해주면 해당 문구가 나올 것이다.
    
    `Superuser created successfully`
    

### 개발 서버 시작

`$ python manage.py runserver`

이후에 127.0.0.1:8000으로 접속하면 에러문구가 나올 것이다. 뒤에 /admin을 추가해서 해당 도메인으로 이동한다.

- 관리자 사이트에 접속하기
- 접속한 이후에는 아이디와 비밀번호를 입력하고 여러가지 컨텐츠를 사용할 수 있다.
    - 이는 django.contrib.auth 모듈에서 제동되는 인증 프레임워크이다.

### 관리 사이트 poll app 변경해서 사용하기
현재 위치는 polls/admin.py
```python
from django.contrib import admin

from .models import Question

admin.site.register(Question)
```
- 해당 코드는 질문 대상에 관리 인터페이스를 알려주는 것이다.