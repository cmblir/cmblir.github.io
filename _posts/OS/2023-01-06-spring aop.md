---
title: "[Arch Linux] yay 설치해서 편하게 라이브러리 설치하는 방법"
excerpt: "Arch Linux의 기존 yay 설치방법으로는 스팀 OS의 호환성 문제가 생김"

toc: true
toc_sticky: true
 
date: 2024-06-06
last_modified_at: 2024-06-06
---

일단 Arch Linux(아치 리눅스)의 경우, 일반 리눅스와 다르게 apt-get 또는 apt를 사용하지 않는다.
이는 Pacman 패키지 관리자를 사용하기 때문이닫.

> 참고로 아치 리눅스는 주드 비넷이라는 사람이 미니멀리즘 CRUX라는 배포판을 보고 영감받아서 만들었다. 그래서 기본적으로 리눅스 배포판중에서 소프트웨어 업데이트도 빠른 편이며, 굉장히 컴포트하다.

아치 리눅스는 pacman이라는 명령어를 통해서 공식 패키지를 다운로드할 수 있지만, AUR(Arch User Repository) -> 아치 사용자 레포의 경우 다운로드 지원을 하지 않는다.
이를 해결하기 위해서 pacman wrapper인 yay를 설치하는 것이다.

기존의 yay 설치 방법
```
pacman -S --needed git base-devel
# 기본 개발도구 설치
git clone https://aur.archlinux.org/yay.git
# yay 패키지 다운
cd yay
# yay 패키지 설치
makepkg -si
# makepkg 사용
```
만약에 중간에 권한 오류가 날 경우, 아래와 같이 하면 된다.
```
sudo chmod 777 yay
```
이거는 현재 내가 위치한 디렉토리가 yay일 경우, cd ..로 yay를 포함한 위치 디렉토리로 이동하면 된다.
```
ls
```
를 했을 때, yay 폴더가 보이면 그 상태에서 chmod 777로 권한을 부여하면 된다.

---

SteamOS yay 설치 방법
```
sudo steamos-readonly disable
# 이거는 스팀OS가 보안문제때문에 기본적으로 막아놔서 그거 잠깐 푸는거
sudo pacman-key --init
sudo pacman-key --populate archlinux
# pacman 키 복사

sudo pacman -S --needed git base-devel
sudo pacman -S git base-devel

git clone https://aur.archlinux.org/yay-bin.git
# 기존 아치 리눅스와 다르게 스팀OS는 bin으로 해야 오류가 안남, 위로 할경우 다양한 오류를 만나볼 수 있음
cd yay-bin
makepkg -si

sudo steamos-readonly disable
# 다시 한번 풀기
```

이로써, yay 패키지 설치하였습니다.
yay가 설치되면 기존에 다운받지 못했던 burp suite나 java 다른 버전들 등등 패키지 이용이 가능해집니다.