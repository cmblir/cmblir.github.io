---
title:  "[파이썬][클라우드] Heroku 에러"
excerpt: "Compiled slug size: 1G is too large (max is 500MB)."

categories:
  - 클라우드
tags:
  - [클라우드, Heroku]

toc: true
toc_sticky: true
 
date: 2022-10-6
last_modified_at: 2022-10-6
---

## Heroku 배포 에러

![heroku error](https://user-images.githubusercontent.com/75519839/194216673-eedea201-72a4-4b4f-a77d-65af57abdfe9.png)

위와 같은 에러는 예시를 든 것이다. 사실상 Slug 메모리 초과가 500MB인데 1기가를 넘어가면 해결이 불가능하므로 유료 서버를 이용하는 것이 맞다. 하지만 조금 애매하게 많을 경우 아래와 같은 방법으로 해결이 가능하다.

### 해결 방법

```console
$ heroku plugins:install heroku-repo
```

일단 heroku-repo를 다운받아줘야 해당 heroku 내에서 툴 사용이 가능하다.

```console
$ heroku repo:gc -a appname
```

> 여기서 appname은 본인이 만든 heroku app의 이름을 말하는 것이다.

```console
heroku repo:purge_cache -a appname
```

```console
heroku repo:reset -a appname
```

해당 방법을 통해서 heroku의 slug size error을 해결할 수 있다.

번외로 사이즈가 약간 모자랄 경우 폴더 내부의 파일중 불필요한 라이브러리의 일부를 삭제하는 방법도 있다.

특히 tensorflow의 경우 기본 400MB에 육박하나, tensorflow-cpu로 변경할 시 반 이상이 줄어든다.