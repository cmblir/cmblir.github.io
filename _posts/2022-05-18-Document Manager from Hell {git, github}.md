---
layout: post
title: Document Manager from Hell {git, github}
comments: true
categories : [git]
tags: [git, github]
---

# Document Manager from Hell {git, github}

![document-manager1](https://user-images.githubusercontent.com/75519839/169370460-49527621-95f8-4054-a0da-8de45b47827f.png)

```bash
$ git
```
깃 명령어 확인

```bash
$ git config
```
깃 사용자 정보 설정

```bash
$ git config —global [user.name](http://user.name)
``` 
깃 이름 확인

```bash
$ git config —global [user.email](http://user.email)
``` 
깃 이메일 확인

```bash
$ git config —global core.editor “notepad++”
```
깃의 기본 편집기를 Notepad++ 로 변경

```bash
$ git init
```
initialize의 약자, 깃을 사용할 수 있도록 디텍터리 초기화

```bash
$ git status
```
깃 상태 확인

> “Change to be commited: “라는 메시지가 나타나면 커밋 직전 단계인 staged 상태인 것이다.
> 

```bash
$ git add test.txt
```
깃 스테이징 (test.txt라는 파일을 깃에 올린다.)

```bash
$ git add .
```
해당 디텍터리에 있는 모든 파일 스테이징

```bash
$ git commit -m
```
“쓰고 싶은 메시지" : 깃에 파일을 커밋, -m {OPTION}을 사용해서 함께 저장할 메시지 추가

```bash
$ git commit —amend
```
커밋 메시지를 잘못 입력했다면 커밋을 만든 즉시 커밋 메시지를 수정

```bash
$ git log
```
방금 커밋한 버전에 대한 설명 확인, 커밋을 만든 사람, 만든 시간과 커밋 메시지 등등 확인

```bash
$ git log —stat
```
커밋에 관련된 파일 함께보기

```bash
$ git diff
```
수정한 파일과 최신 버전의 파일이 어떻게 다른 지 변경사항 확인

```bash
$ git checkout — test.txt
```
작업 트리에서 수정한 파일 되돌리기

- ```bash
    $ git reset commands
    ```
    
    ```bash
    $ git reset HEAD test.txt
    ```
    스테이징된 파일 내리기 (unstage 작업)
    
    ```bash
    $ git reser HEAD^
    ```
    HEAD가 가르키는 브랜치의 최신 커밋을 HEAD^라고 한다. 이렇게 되돌리면 커밋 취소 + 스테이지에서도 내려오기
    
    ```bash
    $ git reset —soft HEAD^
    ```
    최근 커밋을 하기 전 상태로 작업 트리 되돌리기
    
    ```bash
    $ git reset —mixed HEAD^
    ```
    최근 커밋과 스테이징을 하기 전 상태로 작업 트리 되돌리기, {OPTION}없이 git reset 명령을 사용할 경우 이 옵션을 기본으로 작동한다.
    
    ```bash
    $ git reset —hard HEAD^
    ```
    최근 커밋과 스테이징, 파일 수정을 하기 전 상태로 작업 트리를 되돌린다. 이 옵션으로 되돌린 내용은 복구할 수 없다.
    

<aside>
🚧 .gitignore 파일로 버전 관리에서 제외가 가능하다. 해당 파일의 내용에 a.txt, a/, .py 같이 파일이나 디텍터리, 확장자를 버전관리에서 제외시킬 수 있다. (a와 py는 파일 이름과 확장자를 예시로 든 것이다.)

</aside>

![document-manager2](https://user-images.githubusercontent.com/75519839/169370477-71abe6fb-ca4c-4ac8-a28a-2c4dba6fb939.png)

[GitHub.com Help Documentation](https://docs.github.com/en)

# 깃허브 참고 문헌