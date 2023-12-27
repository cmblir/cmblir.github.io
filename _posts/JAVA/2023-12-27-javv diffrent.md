---
title: "[JAVA] 자바가 파이썬과 다른 첫번째 이유"
excerpt: "정적인 언어의 매력"

toc: true
toc_sticky: true
 
date: 2023-12-27
last_modified_at: 2023-12-27
---

# 오버로딩 이라는 개념이 있다.

```java
package method;

public class Overloading1 {
    public static void main(String[] args) {
        System.out.println(add(1, 2));
        System.out.println(add(1, 2, 3));
    }

    public static int add(int a, int b) {
        return a + b;
    }

    public static int add(int a, int b, int c) {
        return a + b + c;
    }
}
```

파이썬의 경우 위와 같은 코드를 작성하려고 하면 아래와 같이 해야한다.

```python
def add(*args):
    return sum(args)
```

파이썬은 오버로딩을 지원하지 않으므로 2개의 함수를 만들어서 재현해야하는데, 자바는 그렇지 않은 것 같다. 만약 위와 같이 하나의 함수를 사용해서 결과 출력을 하면 메소드 오류가 난다.

자바의 경우 정적 타입 언어이면서 전통적인 메소드를 지원하지만 파이썬은 그렇지 않다.

이는 파이썬의 철학적인 문제인데 “단순함이 복잡함보다 낫다” 라는 철학으로 오버로딩을 통한 메소드의 복잡성 증가를 지양한다.

그래서 파이썬의 유연성을 이용해서 가변 인자를 주거나, 데코레이터를 사용해서 할 수 있다.

오버로딩의 재미있는 점

```java
package method;

public class Overloading3 {
    public static void main(String[] args) {
        myMethod(1.2, 1.2);
        myMethod(1, 2);
    }

    public static void myMethod(int a, int b) {
        System.out.println("int");
    }
    public static void myMethod(double a, double b) {
        System.out.println("double");
    }

}
```

위와 같이 작성하면 타입도 자동으로 맞춰서 들어가게 된다.

1.2 → double 순서와 상관없이 들어가고, 1은 int로 들어간다.