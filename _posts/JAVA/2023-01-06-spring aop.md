---
title: "[JAVA] 스프링 순환 종속성 문제"
excerpt: "@Component와 @Bean 등록을 동시에 하면 안되는 이유"

toc: true
toc_sticky: true
 
date: 2024-01-06
last_modified_at: 2024-01-06
---

# 순환 종속성이란?

<img src = "https://github.com/cmblir/cmblir.github.io/assets/75519839/8b258f84-ea6a-477d-925c-ddc32da033e5">

위와 같이 두 개 이상의 클래스나 컴포넌트가 서로를 상호 의존하는 상황을 말한다.

A Bean이 B Bean에 의존하고, B Bean이 다시 A Bean에 의존하는 경우를 말하기도 한다.

예를 들어, 두 개의 클래스 ClassA와 ClassB가 있다고 가정해보겠습니다.

ClassA는 ClassB의 인스턴스를 필요로 합니다.

ClassB는 ClassA의 인스턴스를 필요로 합니다.

이 경우, ClassA를 생성하려면 먼저 ClassB의 인스턴스가 필요하지만, ClassB 역시 ClassA의 인스턴스가 필요하기 때문에, 어느 한 쪽도 먼저 생성할 수 없는 상황이 발생합니다. 이것이 순환 종속성입니다.

스프링 프레임워크 같은 경우, 순환 종속성은 다음과 같은 형태로 나타날 수 있습니다:

ControllerA는 ServiceA를 주입받아 사용합니다.

ServiceA는 RepositoryA를 주입받아 사용합니다.

RepositoryA는 어떤 이유로 ControllerA를 주입받아 사용해야 하는 상황이 발생했습니다.

위의 문제를 해결하기 위해서는 아래와 같은 방법이 있다.

<img src = "https://github.com/cmblir/cmblir.github.io/assets/75519839/9035dfd0-eedb-49bc-a302-97d76f697139">

문제가 발생하는 코드를 @Bean에 있는 경우, 해당 @Bean을 삭제한다.

대신 이는 위의 timeTraceAop() 메서드에서 AOP로 처리하게 되는데 @Around 코드를 보면 TimeTraceAop가 생성하는 코드가 순환 참조를 일으키게 된다.

이때 @Conponent를 등록하게 되면 대상이 되는 그런 코드 자체가 없기 때문에 문제가 발생하지 않게 됩니다.

만약 AOP 설정 클래스를 빈으로 등록하면서 문제를 해결하고 싶으면 @Around 코드를 아래와 같이 바꿔줄 수 있다.

```
@Aspect
public class TimeTraceAop {
    @Around("execution(* hello.hellospring..*(..)) && !target(hello.hellospring.SpringConfig)")

    //  @Around("execution(* hello.hellospring..*(..))") 수정 전 코드

    public Object execute(ProceedingJoinPoint joinPoint) throws Throwable {...}

}
```

이렇게 하면 Aop가 타겟을 정하게 되므로 문제를 해결할 수 있게된다.

이는 인프런에서 김영한님이 직접 언급하신 @Bean과 @Component 순환 참조 에러 해결방법입니다.