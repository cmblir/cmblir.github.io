---
title:  "[Github] 깃허브 커밋 Rule"
excerpt: "알고 하는 커밋 법칙"

categories:
  - 깃
tags:
  - [깃허브, 깃]

toc: true
toc_sticky: true
 
date: 2022-09-19
last_modified_at: 2022-09-19
---

```console
user@cmblir:~$ git add
user@cmblir:~$ git commit -m "Update getting started documentation with git commit"
user@cmblir:~$ git push origin main
```


*깃허브에 커밋하는 것도 규칙이 다 있었다.*

# github commit rules

개발자라면 깃허브를 매일 마주하게 될 것이다. 

저또한 1일 1커밋 운동을 하면서 매일매일 깃허브를 사용했었는데 가끔 드는 의문점이 있었습니다.

> 커밋을 이렇게 막 올려도 되는건가? 나중에 log 찾아볼 때 헷갈리면 어떡하지

그러던 와중 찾게된 깃허브 커밋 법칙!

### What is commit?

> commit은 의미있는 변화에 대해 기록하는 것을 말합니다.<br> 해당 기록들은 `$ git log`를 통해서 기록들을 살필 수 있는데, 이의 경우 여러가지 방면에서 프로젝트의 진행과정 또는 같은 팀 동료의 수정사항을 확인 할 수 있는 좋은 지표가 될 수 있습니다.


## commit message structure

- 커밋의 구조는 아래와 같다.

```markdown
Type : Subject

body

footer
```

## Specifics for length Summary


```text
The purpose is easy readability.

This is the git official convention.

This is the same convention as writing an email message.
```

- 일반적으로 깃허브의 제목 커밋은 50글자 이내로 요약해야합니다.
- 본문의 경우 72글자 이내로 요약해야 한다.

다음과 같은 조건을 따르는 것을 추천한다.
1. 마침표 사용을 하지 않는다.
2. 아래 Standard Terminology
3. 과거시제를 사용하지 않는다.
4. 본문은 첫 줄을 띄워서 분리한다.


이유는 다음과 같습니다.
1. 쉬운 가독성
2. git 공식 컨벤션
3. 이메일 메시지 작성법과 동일

- 줄바꿈을 하는 경우 한 줄에 최대 72자까지 허용됩니다.



## Reject these formats

커밋에서는 아래와 같은 형식을 일반적으로 허용하지 않습니다.

1. [bug]
2. (release)
3. #12345
4. docs:
5. JIRA-666 #time #resolve
6. ticket ID number

> 시간 추적 구문 사용을 권장하지 않습니다.<br>
*대신 시간 추적을 원한다면 메시지 본문에 "YYYY-MM-DDTHH:MM:SSZ" 형식의 ISO 8601 포맷을 적용해서 사용하세요.*


## commit standard terminology

> *Thank you for your reference in writing and for your help, Joel Parker Handerson and Pierre. :)*

> *해당 게시글을 쓰면서 참조하였고 도움이 되준 Joel Parker Handerson과 Pierre의 글에 감사합니다. :)*

> 글에 앞서 Refactoring(리팩토링)은 소프트웨어 공학에서 '결과의 변경 없이 코드의 구조를 재조정' 하는 경우를 말한다.

1. Add
    - 기능, 테스트, 종속성과 같은 기능을 만들때 사용
2. Cut
    - 기능, 테스트, 종속성과 같은 기능을 삭제
3. Fix
    - 버그, 오타, 문제, 또는 잘못된 설명들을 수정
4. Bump
    - 종속성 버전을 수정
5. Make
    - 빌드 프로세스, 도구 또는 인프라를 변경
6. Start
    - 무언가를 시작하거나 기능 플래그를 추가
7. Stop
    - 무언가를 끝내거나 기능 플래그를 삭제
8. Stop
    - 단지 리팩도링해야하는 코드를 변경
9. Refactor
    - 단순한 리팩토링
10. Reformat
    - 서식에 대해 리팩토링 진행
    - 예시 : 공백 생략
11. Optimize
    - 퍼포먼스에 대해 리팩토링 진행
    - 예시 : 코드 속도 향상, 성능 향상
12. Document
    - 도움말 파일과 같은 문서 리팩토링
13. Rearrange
    - 위치를 조정할 때 사용
14. Redraw
    - 웹 앱이 작동하는 것을 확인
15. Reword
    - 웹 상의 텍스트를 수정
16. Chore
    - 빌드 업무 수정, 패키지 매니저 수정
17. Test
    - 테스트 코드로 리팩토링 코드 추가
18. Style
    - 세미콜론 누락이나 코드 변경이 없는 경우
19. Docs
    - 문서 수정
20. Feat
    - 새로운 기능 추가

> 이외에도 커밋의 경우 What, Why 형식에 맞춰서 써야한다. <br>
무엇을 왜 하였는지

---

### 예시들

1. 좋은 예시

- `Refactor Subsystem X for readability`
- `Update getting started documentation`
- `Remove deprecated methods`
- `Release Version 1.0.0`

2. 나쁜 예시

- `fixed bug with Y`
- `changing behavior of X`


3. 매우 나쁜 예시

- `More fixes for broken stuff`
- `Sweet new API methods`
- `42`


## Optional
__아래의 내용은 선택사항입니다. 참고하면 좋은 내용이라서 정리해봤습니다.__

### use footer
- 커밋에 꼬릿말을 작성하는 방법이다.
- 주로 Issue Tracker ID 작성시 사용된다.

```console
user@cmblir:~$ git add
user@cmblir:~$ git commit -m "Resolves: #42"
또는
user@cmblir:~$ git commit -m "See also: # 42"
user@cmblir:~$ git push origin main
```

### use contact email address
- 커밋 작업을 두 명 이상이서 작업을 할경우 페어 프로그래밍을 해야합니다.
- 이를 위해서 추적이 가능하게 커밋할 때 한 줄에 본인의 이메일을 첨부합니다.

```console
user@cmblir:~$ git add
user@cmblir:~$ git commit -m "Co-authored-by : Nicholas yoo <cmblir@google.com>"
user@cmblir:~$ git push origin main
```

### use task tracking links
- 작업 추적 시스템을 사용해서 더 자세하게 해당 웹페이지에 설명을 해줍니다. 
- 이런 방식을 분석이 좀 더 쉬워집니다.

```console
user@cmblir:~$ git add
user@cmblir:~$ git commit -m "See: [Request for help with sign in](https://github.com/cmblir/repo/~~)"
또는
user@cmblir:~$ git commit -m "See: [Add feature foo](https://python.org/123)"
또는
user@cmblir:~$ git commit -m "See: [Wikipedia Quicksort](https://wikipedia/quicksort)"
user@cmblir:~$ git push origin main
```

### use resource tracking metrics
- 리소스 추적 시스템또는 메트릭 스크립트를 만들어줍니다. 
- 프로젝트 관리자가 커밋에 소요된 시간, 기능 분기별 스토리 포인트 추정 또는 버그 수정을 위해서 개발자 고용 비용을 추적해야하는 일부 스포젝트에서 용의합니다.

```console
user@cmblir:~$ git add
user@cmblir:~$ git commit -m "Time : 7 staff hours"
또는
user@cmblir:~$ git commit -m "Cost : $42"
또는
user@cmblir:~$ git commit -m "Points : 42"
user@cmblir:~$ git push origin main
```


### use keywords, importance, references
- 중요도또는 우선 순위, 참조등을 사용합니다.
- 해당 로그를 통해서 작업하면서 볼 수 있는 것도 하나의 좋은 방법입니다.

```console
user@cmblir:~$ git add
user@cmblir:~$ git commit -m "Keywords: Security, Encryption, authentication"
또는
user@cmblir:~$ git commit -m "Importance : High"
또는
user@cmblir:~$ git commit -m "References : [cmblir blog](https://cmblir.github.io)"
user@cmblir:~$ git push origin main
```

## a good example



## **Reference**

> referenced these blogs.

- 해당 게시글을 작성할 때 참조한 사이트입니다.


[joel parker henderson github post](https://github.com/joelparkerhenderson/git-commit-message)

[Pierre github](https://gist.github.com/turbo)

[openstack wiki](https://wiki.openstack.org/wiki/GitCommitMessages#Information_in_commit_messages)