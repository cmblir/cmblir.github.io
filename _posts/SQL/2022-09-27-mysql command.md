---
title: "[Mysql] ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES) / ERROR 1064 (42000)"
excerpt: "Mysql 에러와 기본 명령어 정리"

toc: true
toc_sticky: true
 
date: 2022-09-27
last_modified_at: 2022-09-27
---

# Mysql 명령어 모음

### ****ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES) / ERROR 1064 (42000)****

1. 위의 경우는 비밀번호가 없는데 비밀번호를 사용했다(입력) 라는 에러로 비밀번호 초기화를 해준다.

```sql
mysql -u root -p
# 비밀번호 없이 엔터

alter user 'root'@'localhost' identified with mysql_native_password by '1234';
# 비밀번호를 1234로 업데이트한다.

flush privileges;
# 저장해준다. 이것을 생략할 시 먹통이 되므로 꼭 해준다.
```

---

### 이외  상황에 따른 명령어들

1. USER 추가하기

```sql
mysql -u root -p
# 비밀번호 입력

create user USER_ID@localhost identified by 'USER_PASSWORD';
# USER_ID로 내가 원하는 유저 아이디를 로컬로 만들어준다.
# USER_PASSWORD에 내가 사용할 비밀번호를 입력해준다.

grant all privileges on *.* to USER_ID@localhost;
# grant로 만들어줘서 해당 유저 아이디에 권한을 부여해준다.
```

1. 특정 데이터베이스에 대한 권한 부여하기

```sql
mysql -u root -p
# 비밀번호 입력

grant all privileges on *DATABASE_NAME.* to USER_ID@localhost identified by 'USER_PASSWORD';
# 데이터베이스에 한해서 해당 유저에게 권한을 모두 부여한다.
```

1. 비밀번호 변경

```sql
mysql -u root -p
# 비밀번호 입력

update mysql.user set password=PASSWORD('USER_PASSWORD') where user='USER_ID';
# USER_PASSWORD에는 변경할 비밀번호와 USER_ID에는 변경하고자 하는 ID를 입력한다.

flush privileges;
# 해당 내용을 적용해준다.
```

1. USER 삭제

```sql
mysql -u root -p
# 비밀번호 입력

delete from user where user='USER_ID';
# 삭제할 USER_ID를 입력해준다.

flush privileges;
# 해당 내용을 적용해준다.
```

> **flush privileges는 권한을 수정하거나 내용을 수정하였을 경우 새로고침을 해서 바로 적용하는데 사용된다.**
> 

---

1. USER 확인하기

```sql
mysql -u root -p
# 비밀번호 입력

use mysql;
# mysql 자체 접속하기

select user, host from user;
# 유저 목록과 접속 허용된 ip 확인
```

1. PORT 확인하기

```sql
mysql -u root -p
# 비밀번호 입력

show global variables like 'port';
# 글로벌 변수로 port 값을 확인한다.
```