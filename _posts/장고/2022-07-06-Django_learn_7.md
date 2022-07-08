---
title:  "Django 공식문서 - 7"
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

## 모델 만들기

- 장고에서의 모델이란 부가적인 메타데이터를 가진 데이터베이스의 구조를 말한다.

현재 수정중인 파일은 polls/models

```python
from django.db import models

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
```

- 장고 공식문서에서는 여론조사 앱을 만든다.
    - 그래서 여기서 사용될 두 가지 모델을 만들 것이다.
        1. Question
            
            질문과 발행일을 위한 두 개의 필드를 지님
            
        2. Choice
            
            선택 텍스트와 투표 집계를 위한 두 개의 필드를 지님
            

---

여기서의 각 모델은 :class: `django.db.models.Model`의 하위 클래스로 표현된다.

- 데이터베이스의 각 필드는 Field 클래스의 인스턴스로 표현된다.
- CharField는 문자 필드로 표현된다.
- DataTimeField는 날짜와 시간 필드를 표현한다.

이때 각각의 필드 인스턴스의 이름은 기계가 읽기 좋은 형식(machine-friendly format)의 데이터베이스 필드 이름이다.

- 몇몇 Field 클래스들은 필수 인수가 필요하다.
    - CharField의 경우 max_length를 입력해줘야하며 이것은 데이터 스키마에서만 필요한 것이 아닌 값을 검증할 때도 쓰이게 된다.
    - Field는 다양한 선택적 인수를 가지게 되는데, 해당 공식문서에서는 default로 해서 votes의 기본값을 0으로 설정했다.
    
- 데이터베이스의 관계설정
    - ForeignKey를 사용한 관계설정이다. 이는 다른 데이터베이스 공부를 할 때에도 많이 사용되며 중요하다.
    - 장고에서는 다대일, 다대다, 일대일 모든 일반 데이터베이스의 관계를 지원한다. 예제에서는 각각의 Choice가 하나의 Question에 관계되어 있다.

## 모델의 활성화

현재 수정중인 파일은 mysite/settings.py

```python
INSTALLED_APPS = [
    'polls.apps.PollsConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

- 우리는 여기에 `polls.apps.PollsConfig` 을 추가해줄 것이다.
- 이후 해당 polls 앱이 포함되어있는 것을 알았으니 명령어를 사용해서 새로운 모델을 만들어보자

`$ python [manage.py](http://manage.py) makemigrations polls`

해당 명령어를 실행하게 되면 이런 식으로 표시가 될 것이다.

```bash
Migrations for 'polls':
  polls/migrations/0001_initial.py
    - Create model Question
    - Create model Choice
```

- makemigratioins를 실행시킴으로 새로운 모델을 만들었다.(변경시킨 내용이 포함된다.)
    - 이후에 변경사항이 생길 시 `migration` 을 통해 장고를 업데이트해준다.
    - migration은 장고가 모델(데이터베이스 스키마)의 변경사항을 디스크에 저장하는 방법이다. 원할 경우 새로운 파일을 만들어 새 모델에 대한 migration을 읽어올 수도 있다.
        - 이 경우 polls/migrations/0001_initial.py 같이 새로운 파일을 만들어준다.
        

### migration 내부적으로 SQL 문장 실행하기

`$ python [manage.py](http://manage.py) sqlmigrate polls 0001`

```sql
BEGIN;
--
-- Create model Question
--
CREATE TABLE "polls_question" (
    "id" serial NOT NULL PRIMARY KEY,
    "question_text" varchar(200) NOT NULL,
    "pub_date" timestamp with time zone NOT NULL
);
--
-- Create model Choice
--
CREATE TABLE "polls_choice" (
    "id" serial NOT NULL PRIMARY KEY,
    "choice_text" varchar(200) NOT NULL,
    "votes" integer NOT NULL,
    "question_id" integer NOT NULL
);
ALTER TABLE "polls_choice"
  ADD CONSTRAINT "polls_choice_question_id_c5b4b260_fk_polls_question_id"
    FOREIGN KEY ("question_id")
    REFERENCES "polls_question" ("id")
    DEFERRABLE INITIALLY DEFERRED;
CREATE INDEX "polls_choice_question_id_c5b4b260" ON "polls_choice" ("question_id");

COMMIT;
```

위와 같은 결과물이 나오게 될 것이다.

- 여기서 sqlmigrate 명령어는 실제 데이터베이스에서 마이그레이션을 실행하는 것이 아니라 화면에 인쇄하여 필요한 SQL 장고를 확인할 수 있도록 한다.
- 장고의 경우 외래 키 필드명에 “_id” 이름을 자동으로 추가하는 데 이것의 경우 나중에 재지정이 가능하다.
- migration을 수행하거나 데이터베이스 수행중 문제가 발생하여 프로젝트에 차질이 되었다면 해당 명령어로 간단하게 확인이 가능하다.
    
    `$ python [manage.py](http://manage.py) check`
    
    ```bash
    System check identified no issues (0 silenced).
    ```
    
    - PC에서 실행해본 결과 해당 데이터베이스를 건드리지 않았고 문제또한 없기에 프로젝트 문제가 없다고 나왔다.

### migrate를 통해 데이터베이스 테이블 생성

`$ python [manage.py](http://manage.py) migrate`

- 해당 명령어를 입력하게 된다면 마이그레이션을 모두 수집에 이를 장고가 모델의 변경 사항과 데이터베이스의 스키마의 동기화를 이루게 된다.
    
    ```bash
    Operations to perform:
      Apply all migrations: admin, auth, contenttypes, polls, sessions
    Running migrations:
      Rendering model states... DONE
      Applying polls.0001_initial... OK
    ```