var store = [{
        "title": "저에 관하여 👨🏻‍💻",
        "excerpt":"🇰🇷 한국어 소개 성장하는 개발자의 블로그 🌸 시작하며 🫀 블로그를 시작한 이유는 제 스스로의 성장과정을 하나의 글로 담아보려고 합니다. 기억은 마치 한 순간처럼 눈 깜빡할 사이에 사라진다고 생각합니다. 순간을 기억하고 싶다면 우리는 사진을 찍습니다. 개발자는 순간을 기억하고 싶으면 기록을 해야한다고 생각합니다. 그래서 블로그를 시작하게 되었습니다. 완벽하지는 않지만 공들인 글 🙏🏻...","categories": [],
        "tags": [],
        "url": "/about/",
        "teaser": null
      },{
        "title": "데이터 분석과 머신러닝 - EDA",
        "excerpt":"1.1 Data EDA 데이터셋 불러오기 데이터를 분석한다 데이터를 다룬다 데이터로부터 모델링을 한다 데이터셋을 불러오기 위한 단계: 1. Description을 통해 데이터셋에 대한 정보를 파악합니다. 행과 열의 수 열에 헤더가 있는지 (or “데이터 이름”이 있는지?) 결측 데이터 (Missing data)가 있는지 확인 원본의 형태를 확인하기 : 여러분이 기대하던 형태가 아닐 수도 있다. pandas.read_csv()를...","categories": ["데이터 분석과 머신러닝"],
        "tags": ["데이터 분석","머신러닝"],
        "url": "/%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EB%B6%84%EC%84%9D%EA%B3%BC%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D/eda/",
        "teaser": null
      },{
        "title": "데이터 분석과 머신러닝 - Feature Engineering",
        "excerpt":"1.2 Feature-Engineering Feature Engineering 도메인 지식과 창의성을 바탕으로, 데이터셋에 존재하는 Feature들을 재조합하여 새로운 Feature을 만드는 것 feature를 조합하여 (+) 새로운 feature을 만들어 낸 다음, 이를 분석에 사용할 수 있을 것이다. 실사용에서 사용하고 있는 것 더 좋은 퍼포먼스를 위하여 더 새롭고, 더 의미있는 패턴을 제공하는 것이 궁극적인 Feature Engineering의 목적이다. DataFrame...","categories": ["데이터 분석과 머신러닝"],
        "tags": ["데이터 분석","머신러닝"],
        "url": "/%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EB%B6%84%EC%84%9D%EA%B3%BC%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D/feture_engineering/",
        "teaser": null
      },{
        "title": "데이터 분석과 머신러닝 - Data Manipulation",
        "excerpt":"1.3 Data Manipulation pandas로 데이터 합치기 Concat (Concatenate) concat은 ‘더한다’ 혹은 ‘붙인다’라는 의미로 이해하면 된다. 예를 들어, 2개의 문자열을 + 연산자를 이용해 붙일 수 있다. &gt;&gt;&gt; '\"+\" 연산자를 ' + '사용하여' + '붙일 수 있다.' '\"+\" 연산자를 사용하여 붙일 수 있다. string + 다른 방법으로 문자열을 더할 수 있다. tostring...","categories": ["데이터 분석과 머신러닝"],
        "tags": ["데이터 분석","머신러닝"],
        "url": "/%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EB%B6%84%EC%84%9D%EA%B3%BC%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D/manipulation/",
        "teaser": null
      },{
        "title": "데이터 분석과 머신러닝 - Basic Derivative",
        "excerpt":"1.4 Basic Derivation 미분 우리가 수학시간에 많이 들어봤던 단어로 말 그대로 작게 나누는 것이다. X라는 값이 들어갔을 때 해당 값을 나누는 것이다. 미분을 파이썬으로 구현하는 방법은 대표적으로 2가지가 있다. 직접 구현하는 경우 def numerical_diff(f, x): delta = 0.001 # 매우 작은 값 return (f(x+delta) - f(x)) / delta Scipy 라이브러리를...","categories": ["데이터 분석과 머신러닝"],
        "tags": ["데이터 분석","머신러닝"],
        "url": "/%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EB%B6%84%EC%84%9D%EA%B3%BC%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D/derivative/",
        "teaser": null
      },{
        "title": "데이터 분석과 머신러닝 - Hypothesis Test",
        "excerpt":"1.5 Hypothesis Test 가설 검정에 대하여 가설 검정이란 주어진 상황에 대해서 하고자 하는 주장의 진위여부를 확인하는 것 데이터 분석에서는 모집단의 실제 값에 대한 sample의 통계치를 사용해서 통계적으로 유의한 지 아닌 지 확인하는 것 Descriptive Statics (기술 통계치) 데이터를 설명하는 값들 기술 통계치의 시각화 Boxplot &lt;/img&gt; Bagplot &lt;/img&gt; Violin plot &lt;/img&gt;...","categories": ["데이터 분석과 머신러닝"],
        "tags": ["데이터 분석","머신러닝"],
        "url": "/%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EB%B6%84%EC%84%9D%EA%B3%BC%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D/hypothesis/",
        "teaser": null
      },{
        "title": "데이터 분석과 머신러닝 - Hypothesis Test - 2",
        "excerpt":"1.6 Hypothesis Test 가설 검정에 대하여 가설 검정이란 주어진 상황에 대해서 하고자 하는 주장의 진위여부를 확인하는 것 데이터 분석에서는 모집단의 실제 값에 대한 sample의 통계치를 사용해서 통계적으로 유의한 지 아닌 지 확인하는 것 이전편에서 이어지는 내용에 T-test를 사용하기 위해서 조건이 필요한게 해당 조건에 대해 알아보자 T-test 특성 독립성 두 그룹이...","categories": ["데이터 분석과 머신러닝"],
        "tags": ["데이터 분석","머신러닝"],
        "url": "/%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EB%B6%84%EC%84%9D%EA%B3%BC%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D/hypothesis/",
        "teaser": null
      },{
        "title": "데이터 분석과 머신러닝 - Confidence Interval",
        "excerpt":"신뢰구간이란? 통계적 추론을 통해 예측되는 값의 범위를 말한다. 데이터분석에서 신뢰도가 높을 수록 해당 문제 측정의 결과가 일관성을 가진다는 의미다. 즉, 신뢰도가 95% 라는 의미는 표본을 100번 뽑았을 때 95번은 신뢰 구간에 모집단의 평균이 포함된다는 뜻이다. ANOVA(one-way) 쉽게 세 개 이상의 집단의 차이를 통계적으로 검정하는 방법 두 개 이상 다수의 집단을...","categories": ["데이터 분석과 머신러닝"],
        "tags": ["데이터 분석","머신러닝"],
        "url": "/%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EB%B6%84%EC%84%9D%EA%B3%BC%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D/confidence_interval/",
        "teaser": null
      },{
        "title": "데이터 분석과 머신러닝 - Bayesian Inference",
        "excerpt":"베이지안적 사고 사고에 앞서 확률론과 통계학에서 유명한 베이즈 정리와 베이지안 확률에 대해 알아보자 베이즈 정리 두 확률 변수의 사전 확률과 사후 확률 사이의 관계를 나타내는 정리 베이지안 확률 베이즈 정리를 통해 사전확률로부터 사후확률을 구할 수 있게 된다는 해석의 기초 베이지안 확률, 화산이 폭발할 확률을 빈도 확률로 계산이 가능할까라는 문제에 우리가...","categories": ["데이터 분석과 머신러닝"],
        "tags": ["데이터 분석","머신러닝"],
        "url": "/%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EB%B6%84%EC%84%9D%EA%B3%BC%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D/bayesian_inference/",
        "teaser": null
      },{
        "title": "데이터 분석과 머신러닝 - Vector Matrix",
        "excerpt":"벡터와 스칼라 스칼라는 단순히 변수 형태로 저장된 숫자이며 벡터 혹은 매트릭스와 곱해지는 경우 해당 값에 곱한 값으로 결정된다. 벡터는 파이썬에서 주로 리스트형태로 사용되며, 데이터셋을 구성하고 있는 데이터프레임의 행과 열로써 사용된다. 매트릭스는 벡터의 모음정도로 이해하면 좋다. 스칼라 단일 숫자로 변수에 저장할 때는 일반적으로 소문자를 이용해서 표기한다. ```python import math import matplotlib.pyplot...","categories": ["데이터 분석과 머신러닝"],
        "tags": ["데이터 분석","머신러닝"],
        "url": "/%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EB%B6%84%EC%84%9D%EA%B3%BC%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D/vector_matrix/",
        "teaser": null
      },{
        "title": "데이터 분석과 머신러닝 - Linear Algebra",
        "excerpt":"분산이란? 데이터가 얼마나 퍼져있는지 데이터 분석에서 Variance 라고 불리우며 분산을 통해 평균을 구하고, 평균을 통해 분산을 구할 수도 있다. 모집단의 분산은 모집단의 PARAMETER (aspect, property, attribute, etc)이며, 샘플의 분산은 샘플의 STATISTIC (estimated attribute)이다. 공분산이란? 2개의 확률변수의 선형 관계를 나타내는 값이다. 2개의 변수 중 하나의 값이 상승하는 경향을 보일 때 다른...","categories": ["데이터 분석과 머신러닝"],
        "tags": ["데이터 분석","머신러닝"],
        "url": "/%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EB%B6%84%EC%84%9D%EA%B3%BC%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D/linear_algebra/",
        "teaser": null
      },{
        "title": "밑바닥부터 시작하는 딥러닝",
        "excerpt":"Deep learning from the bottom up (밑바닥부터 시작하는 딥러닝) CH1   Deep Learning for Scratch   사이토 고키 지음 / 齋藤康毅／著      Deep Learning 1  ","categories": ["밑바닥부터 시작하는 딥러닝"],
        "tags": ["밑바닥부터 시작하는 딥러닝","딥러닝"],
        "url": "/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EC%8B%9C%EC%9E%91%ED%95%98%EB%8A%94%20%EB%94%A5%EB%9F%AC%EB%8B%9D/Deep-learning-from-bottom-up-(%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0-%EC%8B%9C%EC%9E%91%ED%95%98%EB%8A%94-%EB%94%A5%EB%9F%AC%EB%8B%9D)/",
        "teaser": null
      },{
        "title": "[파이썬][백준 4892번] 숫자 맞추기 게임",
        "excerpt":"1. 문제 [Bronze III] 숫자 맞추기 게임 - 4892 문제 링크 성능 요약 메모리: 30840 KB, 시간: 80 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 숫자 맞추기 게임은 초등학교 학생들 사이에서 유행하는 게임이다. 선생님은 학생들의 연산 실력과 논리적인 사고력을 기르기위해 학생들에게 이 게임을 권유하고 있다. 이 게임을 시작할 때는 친구가...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/4892/",
        "teaser": null
      },{
        "title": "[파이썬][백준 5217번] 쌍의 합",
        "excerpt":"1. 문제 [Bronze III] 쌍의 합 - 5217 문제 링크 성능 요약 메모리: 30840 KB, 시간: 64 ms 분류 구현(implementation) 문제 설명 1보다 크거나 같고 12보다 작거나 같은 자연수 n이 주어졌을 때, 합이 n이 되는 두 자연수의 쌍을 찾는 프로그램을 작성하시오. 예를 들어, 5가 주어진 경우 가능한 쌍은 1,4와 2,3이...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/5217/",
        "teaser": null
      },{
        "title": "[파이썬][백준 5086번] 배수와 약수",
        "excerpt":"1. 문제 [Bronze III] 배수와 약수 - 5086 문제 링크 성능 요약 메모리: 30840 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(N) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘 및 해설 while문을 통해 두 값이 0인 경우가 아닌...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/5086/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1000번] A + B",
        "excerpt":"1. 문제 [Bronze V] A+B - 1000 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10) 출력 첫째 줄에 A+B를 출력한다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1000/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1001번] A - B",
        "excerpt":"1. 문제 [Bronze V] A-B - 1001 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10) 출력 첫째 줄에 A-B를 출력한다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1001/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1008번] A / B",
        "excerpt":"1. 문제 [Bronze IV] A/B - 1008 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10) 출력 첫째 줄에 A/B를 출력한다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1008/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10171번] 고양이",
        "excerpt":"1. 문제 [Bronze V] 고양이 - 10171 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 구현(implementation) 문제 설명 아래 예제와 같이 고양이를 출력하시오. 입력 없음. 출력 고양이를 출력한다. 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10171/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10172번] 개",
        "excerpt":"1. 문제 [Bronze V] 개 - 10172 문제 링크 성능 요약 메모리: 30860 KB, 시간: 68 ms 분류 구현(implementation) 문제 설명 아래 예제와 같이 개를 출력하시오. 입력 없음. 출력 개를 출력한다. 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10172/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10430번] 나머지",
        "excerpt":"1. 문제 [Bronze V] 나머지 - 10430 문제 링크 성능 요약 메모리: 30860 KB, 시간: 80 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 (A+B)%C는 ((A%C) + (B%C))%C 와 같을까? (A×B)%C는 ((A%C) × (B%C))%C 와 같을까? 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오. 입력...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10430/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10718번] We love krill",
        "excerpt":"1. 문제 [Bronze V] We love kriii - 10718 문제 링크 성능 요약 메모리: 30860 KB, 시간: 72 ms 분류 구현(implementation) 문제 설명 ACM-ICPC 인터넷 예선, Regional, 그리고 World Finals까지 이미 2회씩 진출해버린 kriii는 미련을 버리지 못하고 왠지 모르게 올해에도 파주 World Finals 준비 캠프에 참여했다. 대회를 뜰 줄 모르는...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10718/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10869번] 사칙연산",
        "excerpt":"1. 문제 [Bronze V] 사칙연산 - 10869 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 입력 두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000) 출력...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10869/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10926번] ? ? !",
        "excerpt":"1. 문제 [Bronze V] ??! - 10926 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 구현(implementation) 문제 설명 준하는 사이트에 회원가입을 하다가 joonas라는 아이디가 이미 존재하는 것을 보고 놀랐다. 준하는 놀람을 ??!로 표현한다. 준하가 가입하려고 하는 사이트에 이미 존재하는 아이디가 주어졌을 때, 놀람을 표현하는 프로그램을 작성하시오. 입력...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10926/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10998번] A x B",
        "excerpt":"1. 문제 [Bronze V] A×B - 10998 문제 링크 성능 요약 메모리: 30872 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10) 출력 첫째 줄에 A×B를 출력한다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10998/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2557번] Hello World",
        "excerpt":"1. 문제 [Bronze V] Hello World - 2557 문제 링크 성능 요약 메모리: 30860 KB, 시간: 72 ms 분류 구현(implementation) 문제 설명 Hello World!를 출력하시오. 입력 없음 출력 Hello World!를 출력하시오. 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(1) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2557/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2753번] 윤년",
        "excerpt":"1. 문제 [Bronze IV] 윤년 - 2753 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 구현(implementation), 수학(math) 문제 설명 연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오. 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다. 예를 들어, 2012년은 4의 배수이면서 100의...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2753/",
        "teaser": null
      },{
        "title": "[파이썬][백준 9498번] 시험 성적",
        "excerpt":"1. 문제 [Bronze IV] 시험 성적 - 9498 문제 링크 성능 요약 메모리: 30864 KB, 시간: 76 ms 분류 구현(implementation) 문제 설명 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/9498/",
        "teaser": null
      },{
        "title": "[파이썬][백준 14681번] 사분면 고르기",
        "excerpt":"1. 문제 [Bronze IV] 사분면 고르기 - 14681 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 기하학(geometry), 구현(implementation), 수학(math) 문제 설명 흔한 수학 문제 중 하나는 주어진 점이 어느 사분면에 속하는지 알아내는 것이다. 사분면은 아래 그림처럼 1부터 4까지 번호를 갖는다. \"Quadrant n\"은 \"제n사분면\"이라는 뜻이다. 예를 들어, 좌표가...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/14681/",
        "teaser": null
      },{
        "title": "[파이썬][백준 18108번] 1998년생인 내가 태국에서는 2541년생?!",
        "excerpt":"1. 문제 [Bronze V] 1998년생인 내가 태국에서는 2541년생?! - 18108 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 ICPC Bangkok Regional에 참가하기 위해 수완나품 국제공항에 막 도착한 팀 레드시프트 일행은 눈을 믿을 수 없었다. 공항의 대형 스크린에 올해가 2562년이라고 적혀 있던 것이었다. 불교...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/18108/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2588번] 곱셈",
        "excerpt":"1. 문제 [Bronze IV] 곱셈 - 2588 문제 링크 성능 요약 메모리: 30864 KB, 시간: 76 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다. (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2588/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2884번] 알람 시계",
        "excerpt":"1. 문제 [Bronze III] 알람 시계 - 2884 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 상근이는 매일 아침 알람을 듣고 일어난다. 알람을 듣고 바로 일어나면 다행이겠지만, 항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다. 상근이는 모든 방법을 동원해보았지만, 조금만 더...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2884/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10870번] 피보나치 수 5",
        "excerpt":"1. 문제 [Bronze II] 피보나치 수 5 - 10870 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 구현(implementation), 수학(math) 문제 설명 피보나치 수는 0과 1로 시작한다. 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1이다. 그 다음 2번째 부터는 바로 앞 두 피보나치 수의 합이 된다. 이를 식으로...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10870/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10871번] X보다 작은 수",
        "excerpt":"1. 문제 [Bronze III] X보다 작은 수 - 10871 문제 링크 성능 요약 메모리: 30864 KB, 시간: 76 ms 분류 구현(implementation), 수학(math) 문제 설명 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 N과 X가 주어진다. (1 ≤ N,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10871/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10950번] A + B - 3",
        "excerpt":"1. 문제 [Bronze III] A+B - 3 - 10950 문제 링크 성능 요약 메모리: 30860 KB, 시간: 76 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있으며,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10950/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10952번] A + B - 5",
        "excerpt":"1. 문제 [Bronze III] A+B - 5 - 10952 문제 링크 성능 요약 메모리: 30860 KB, 시간: 84 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. 입력 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스는 한 줄로 이루어져 있으며,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10952/",
        "teaser": null
      },{
        "title": "[파이썬][백준 11021번] A + B - 7",
        "excerpt":"1. 문제 [Bronze III] A+B - 7 - 11021 문제 링크 성능 요약 메모리: 30860 KB, 시간: 84 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있으며,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/11021/",
        "teaser": null
      },{
        "title": "[파이썬][백준 11022번] A + B - 8",
        "excerpt":"1. 문제 [Bronze III] A+B - 8 - 11022 문제 링크 성능 요약 메모리: 30860 KB, 시간: 84 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있으며,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/11022/",
        "teaser": null
      },{
        "title": "[파이썬][백준 15552번] 빠른 A + B",
        "excerpt":"1. 문제 [Bronze II] 빠른 A+B - 15552 문제 링크 성능 요약 메모리: 30864 KB, 시간: 1452 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 본격적으로 for문 문제를 풀기 전에 주의해야 할 점이 있다. 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점이다. C++을 사용하고 있고 cin/cout을...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/15552/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2438번] 별 찍기 - 1",
        "excerpt":"1. 문제 [Bronze III] 별 찍기 - 1 - 2438 문제 링크 성능 요약 메모리: 30864 KB, 시간: 76 ms 분류 구현(implementation) 문제 설명 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제 입력 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다. 출력 첫째 줄부터...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2438/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2439번] 별 찍기 - 2",
        "excerpt":"1. 문제 [Bronze III] 별 찍기 - 2 - 2439 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 구현(implementation) 문제 설명 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오. 입력 첫째 줄에 N(1 ≤...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2439/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2741번] N 찍기",
        "excerpt":"1. 문제 [Bronze III] N 찍기 - 2741 문제 링크 성능 요약 메모리: 30864 KB, 시간: 116 ms 분류 구현(implementation) 문제 설명 자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다. 출력 첫째 줄부터 N번째 줄 까지 차례대로...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2741/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2742번] 기찍 N",
        "excerpt":"1. 문제 [Bronze III] 기찍 N - 2742 문제 링크 성능 요약 메모리: 30864 KB, 시간: 120 ms 분류 구현(implementation) 문제 설명 자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다. 출력 첫째 줄부터 N번째 줄 까지 차례대로...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2742/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2480번] 주사위 세개",
        "excerpt":"1. 문제 [Bronze IV] 주사위 세개 - 2480 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다. 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 같은 눈이 2개만...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2480/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2525번] 오븐 시계",
        "excerpt":"1. 문제 [Bronze IV] 오븐 시계 - 2525 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 KOI 전자에서는 건강에 좋고 맛있는 훈제오리구이 요리를 간편하게 만드는 인공지능 오븐을 개발하려고 한다. 인공지능 오븐을 사용하는 방법은 적당한 양의 오리 훈제 재료를 인공지능 오븐에 넣으면 된다. 그러면...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2525/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2739번] 구구단",
        "excerpt":"1. 문제 [Bronze III] 구구단 - 2739 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다. 입력 첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다. 출력 출력형식과...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2739/",
        "teaser": null
      },{
        "title": "[파이썬][백준 8393번] 합",
        "excerpt":"1. 문제 [Bronze III] 합 - 8393 문제 링크 성능 요약 메모리: 30864 KB, 시간: 76 ms 분류 구현(implementation), 수학(math) 문제 설명 n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오. 입력 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다. 출력 1부터 n까지 합을 출력한다. 출처: 백준, https://https://www.acmicpc.net/ 2....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/8393/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10818번] 최소, 최대",
        "excerpt":"1. 문제 [Bronze III] 최소, 최대 - 10818 문제 링크 성능 요약 메모리: 148396 KB, 시간: 412 ms 분류 구현(implementation), 수학(math) 문제 설명 N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오. 입력 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10818/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10951번] A + B - 4",
        "excerpt":"1. 문제 [Bronze III] A+B - 4 - 10951 문제 링크 성능 요약 메모리: 30860 KB, 시간: 88 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. 입력 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스는 한 줄로 이루어져 있으며,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10951/",
        "teaser": null
      },{
        "title": "[파이썬][백준 15596번] 정수 N개의 합",
        "excerpt":"1. 문제 [Bronze II] 정수 N개의 합 - 15596 문제 링크 성능 요약 메모리: 383960 KB, 시간: 132 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오. 작성해야 하는 함수는 다음과 같다. C, C11, C (Clang), C11 (Clang): long long sum(int *a, int...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/15596/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2562번] 최댓값",
        "excerpt":"1. 문제 [Bronze II] 최댓값 - 2562 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 구현(implementation) 문제 설명 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오. 예를 들어, 서로 다른 9개의 자연수 3, 29, 38, 12, 57,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2562/",
        "teaser": null
      },{
        "title": "[파이썬][백준 8958번] OX퀴즈",
        "excerpt":"1. 문제 [Bronze II] OX퀴즈 - 8958 문제 링크 성능 요약 메모리: 30864 KB, 시간: 76 ms 분류 구현(implementation), 문자열(string) 문제 설명 \"OOXXOXXOOO\"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/8958/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1546번] 평균",
        "excerpt":"1. 문제 [Bronze I] 평균 - 1546 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 세준이는 기말고사를 망쳤다. 세준이는 점수를 조작해서 집에 가져가기로 했다. 일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 그리고 나서 모든 점수를 점수/M*100으로 고쳤다. 예를 들어,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1546/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2577번] 숫자의 개수",
        "excerpt":"1. 문제 [Bronze II] 숫자의 개수 - 2577 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오. 예를...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2577/",
        "teaser": null
      },{
        "title": "[파이썬][백준 3052번] 나머지",
        "excerpt":"1. 문제 [Bronze II] 나머지 - 3052 문제 링크 성능 요약 메모리: 30864 KB, 시간: 76 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. 수 10개를 입력받은...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/3052/",
        "teaser": null
      },{
        "title": "[파이썬][백준 4344번] 평균은 넘겠지",
        "excerpt":"1. 문제 [Bronze I] 평균은 넘겠지 - 4344 문제 링크 성능 요약 메모리: 30860 KB, 시간: 76 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다. 입력 첫째 줄에는 테스트 케이스의 개수 C가 주어진다. 둘째 줄부터 각 테스트 케이스마다...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/4344/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10809번] 알파벳 찾기",
        "excerpt":"1. 문제 [Bronze II] 알파벳 찾기 - 10809 문제 링크 성능 요약 메모리: 33484 KB, 시간: 132 ms 분류 구현(implementation), 문자열(string) 문제 설명 알파벳 소문자로만 이루어진 단어 S가 주어진다. 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오. 입력 첫째 줄에...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10809/",
        "teaser": null
      },{
        "title": "[파이썬][백준 11654번] 아스키 코드",
        "excerpt":"1. 문제 [Bronze V] 아스키 코드 - 11654 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 구현(implementation) 문제 설명 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오. 입력 알파벳 소문자, 대문자, 숫자 0-9 중 하나가 첫째 줄에 주어진다. 출력 입력으로...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/11654/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2675번] 문자열 반복",
        "excerpt":"1. 문제 [Bronze II] 문자열 반복 - 2675 문제 링크 성능 요약 메모리: 30860 KB, 시간: 72 ms 분류 구현(implementation), 문자열(string) 문제 설명 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2675/",
        "teaser": null
      },{
        "title": "[파이썬][백준 11720번] 숫자의 합",
        "excerpt":"1. 문제 [Bronze II] 숫자의 합 - 11720 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math), 문자열(string) 문제 설명 N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/11720/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1152번] 단어의 개수",
        "excerpt":"1. 문제 [Bronze II] 단어의 개수 - 1152 문제 링크 성능 요약 메모리: 37996 KB, 시간: 100 ms 분류 구현(implementation), 문자열(string) 문제 설명 영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램을 작성하시오. 단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1152/",
        "teaser": null
      },{
        "title": "[파이썬][백준 5622번] 다이얼",
        "excerpt":"1. 문제 [Bronze II] 다이얼 - 5622 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 구현(implementation) 문제 설명 상근이의 할머니는 아래 그림과 같이 오래된 다이얼 전화기를 사용한다. 전화를 걸고 싶은 번호가 있다면, 숫자를 하나를 누른 다음에 금속 핀이 있는 곳 까지 시계방향으로 돌려야 한다. 숫자를 하나 누르면...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/5622/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2908번] 상수",
        "excerpt":"1. 문제 [Bronze II] 상수 - 2908 문제 링크 성능 요약 메모리: 30860 KB, 시간: 72 ms 분류 구현(implementation), 수학(math) 문제 설명 상근이의 동생 상수는 수학을 정말 못한다. 상수는 숫자를 읽는데 문제가 있다. 이렇게 수학을 못하는 상수를 위해서 상근이는 수의 크기를 비교하는 문제를 내주었다. 상근이는 세 자리 수 두 개를...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2908/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2839번] 설탕 배달",
        "excerpt":"1. 문제 [Bronze I] 설탕 배달 - 2839 문제 링크 성능 요약 메모리: 30864 KB, 시간: 76 ms 분류 다이나믹 프로그래밍(dp), 그리디 알고리즘(greedy), 수학(math) 문제 설명 상근이는 요즘 설탕공장에서 설탕을 배달하고 있다. 상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다. 설탕공장에서 만드는 설탕은 봉지에 담겨져 있다. 봉지는 3킬로그램 봉지와 5킬로그램...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2839/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10250번] ACM 호텔",
        "excerpt":"1. 문제 [Bronze III] ACM 호텔 - 10250 문제 링크 성능 요약 메모리: 30864 KB, 시간: 76 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 ACM 호텔 매니저 지우는 손님이 도착하는 대로 빈 방을 배정하고 있다. 고객 설문조사에 따르면 손님들은 호텔 정문으로부터 걸어서 가장 짧은 거리에 있는 방을 선호한다고 한다. 여러분은...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10250/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1193번] 분수찾기",
        "excerpt":"1. 문제 [Bronze I] 분수찾기 - 1193 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 구현(implementation), 수학(math) 문제 설명 무한히 큰 배열에 다음과 같이 분수들이 적혀있다. 1/1 1/2 1/3 1/4 1/5 … 2/1 2/2 2/3 2/4 … … 3/1 3/2 3/3 … … … 4/1 4/2 …...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1193/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1712번] 손익분기점",
        "excerpt":"1. 문제 [Bronze IV] 손익분기점 - 1712 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 월드전자는 노트북을 제조하고 판매하는 회사이다. 노트북 판매 대수에 상관없이 매년 임대료, 재산세, 보험료, 급여 등 A만원의 고정 비용이 들며, 한 대의 노트북을 생산하는 데에는 재료비와 인건비 등 총...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1712/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2292번] 벌집",
        "excerpt":"1. 문제 [Bronze II] 벌집 - 2292 문제 링크 성능 요약 메모리: 30864 KB, 시간: 76 ms 분류 수학(math) 문제 설명 위의 그림과 같이 육각형으로 이루어진 벌집이 있다. 그림에서 보는 바와 같이 중앙의 방 1부터 시작해서 이웃하는 방에 돌아가면서 1씩 증가하는 번호를 주소로 매길 수 있다. 숫자 N이 주어졌을 때,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2292/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2775번] 부녀회장이 될테야",
        "excerpt":"1. 문제 [Bronze I] 부녀회장이 될테야 - 2775 문제 링크 성능 요약 메모리: 30860 KB, 시간: 80 ms 분류 구현(implementation), 수학(math) 문제 설명 평소 반상회에 참석하는 것을 좋아하는 주희는 이번 기회에 부녀회장이 되고 싶어 각 층의 사람들을 불러 모아 반상회를 주최하려고 한다. 이 아파트에 거주를 하려면 조건이 있는데, “a층의 b호에...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2775/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2845번] 파티가 끝나고 난 뒤",
        "excerpt":"1. 문제 [Bronze V] 파티가 끝나고 난 뒤 - 2845 문제 링크 성능 요약 메모리: 30860 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 파티가 끝나고 나면, 사람들은 누가 파티에 왔는지와 얼마나 많은 사람들이 왔는지를 궁금해한다. 보통 파티는 매우 크게 열리기 때문에, 정확하게 몇 명이 참가했는지 알 수가...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2845/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2869번] 달팽이는 올라가고 싶다",
        "excerpt":"1. 문제 [Bronze I] 달팽이는 올라가고 싶다 - 2869 문제 링크 성능 요약 메모리: 32976 KB, 시간: 76 ms 분류 수학(math) 문제 설명 땅 위에 달팽이가 있다. 이 달팽이는 높이가 V미터인 나무 막대를 올라갈 것이다. 달팽이는 낮에 A미터 올라갈 수 있다. 하지만, 밤에 잠을 자는 동안 B미터 미끄러진다. 또, 정상에...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2869/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1009번] 분산처리",
        "excerpt":"1. 문제 [Bronze III] 분산처리 - 1009 문제 링크 성능 요약 메모리: 30860 KB, 시간: 120 ms 분류 구현(implementation), 수학(math) 문제 설명 재용이는 최신 컴퓨터 10대를 가지고 있다. 어느 날 재용이는 많은 데이터를 처리해야 될 일이 생겨서 각 컴퓨터에 1번부터 10번까지의 번호를 부여하고, 10대의 컴퓨터가 다음과 같은 방법으로 데이터들을 처리하기로...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1009/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10757번] 큰 수 A + B",
        "excerpt":"1. 문제 [Bronze V] 큰 수 A+B - 10757 문제 링크 성능 요약 메모리: 30864 KB, 시간: 76 ms 분류 임의 정밀도 / 큰 수 연산(arbitrary_precision), 사칙연산(arithmetic), 구현(implementation), 수학(math) 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(1) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘 및...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10757/",
        "teaser": null
      },{
        "title": "[파이썬][백준 11283번] 한글 2",
        "excerpt":"1. 문제 [Bronze V] 한글 2 - 11283 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 구현(implementation) 문제 설명 한글의 각 글자는 초성, 중성, 종성으로 이루어져 있고, 이 세 가지를 모아써서 한 글자를 나타낸다. 초성은 ㄱ, ㄲ, ㄴ, ㄷ, ㄸ, ㄹ, ㅁ, ㅂ, ㅃ, ㅅ, ㅆ, ㅇ,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/11283/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1550번] 16진수",
        "excerpt":"1. 문제 [Bronze V] 16진수 - 1550 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 구현(implementation), 수학(math) 문제 설명 16진수 수를 입력받아서 10진수로 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 16진수 수가 주어진다. 이 수의 최대 길이는 6글자이다. 16진수 수는 0~9와 A~F로 이루어져 있고, A~F는 10~15를 뜻한다. 또,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1550/",
        "teaser": null
      },{
        "title": "[파이썬][백준 24900번] 한별 찍기",
        "excerpt":"1. 문제 [Bronze V] 한별 찍기 - 24900 문제 링크 성능 요약 메모리: 30860 KB, 시간: 72 ms 분류 구현(implementation) 문제 설명 한별이를 출력하는 프로그램을 작성하시오. 입력 Empty 출력 한별이를 아래 예제 출력과 같이 출력한다. 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(1) 3. 문제 해결 및 코드 주석을...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/24900/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2920번] 음계",
        "excerpt":"1. 문제 [Bronze II] 음계 - 2920 문제 링크 성능 요약 메모리: 30860 KB, 시간: 72 ms 분류 구현(implementation) 문제 설명 다장조는 c d e f g a b C, 총 8개 음으로 이루어져있다. 이 문제에서 8개 음은 다음과 같이 숫자로 바꾸어 표현한다. c는 1로, d는 2로, ..., C를 8로...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2920/",
        "teaser": null
      },{
        "title": "[파이썬][백준 3003번] 킹, 퀸, 룩, 비숍, 나이트, 폰",
        "excerpt":"1. 문제 [Bronze V] 킹, 퀸, 룩, 비숍, 나이트, 폰 - 3003 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 동혁이는 오래된 창고를 뒤지다가 낡은 체스판과 피스를 발견했다. 체스판의 먼지를 털어내고 걸레로 닦으니 그럭저럭 쓸만한 체스판이 되었다. 하지만, 검정색 피스는 모두 있었으나,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/3003/",
        "teaser": null
      },{
        "title": "[파이썬][백준 3009번] 네 번째 점",
        "excerpt":"1. 문제 [Bronze III] 네 번째 점 - 3009 문제 링크 성능 요약 메모리: 30860 KB, 시간: 64 ms 분류 기하학(geometry), 구현(implementation) 문제 설명 세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오. 입력 세 점의 좌표가 한 줄에 하나씩 주어진다. 좌표는 1보다...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/3009/",
        "teaser": null
      },{
        "title": "[파이썬][백준 3046번] R2",
        "excerpt":"1. 문제 [Bronze V] R2 - 3046 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 두 숫자 R1과 R2가 있을 때, 두 수의 평균 S는 (R1+R2)/2와 같다. 상근이는 정인이 생일 선물로 두 숫자 R1과 R2를 주려고 한다. 생일 파티에서 상근이는 정인이에게 이...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/3046/",
        "teaser": null
      },{
        "title": "[파이썬][백준 5337번] 웰컴",
        "excerpt":"1. 문제 [Bronze V] 웰컴 - 5337 문제 링크 성능 요약 메모리: 30860 KB, 시간: 68 ms 분류 구현(implementation) 문제 설명 Welcome을 예제 출력처럼 출력하는 프로그램을 작성하시오. 입력 Empty 출력 Welcome을 아래 예제 출력처럼 출력한다. 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(1) 3. 문제 해결 및 코드 주석을...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/5337/",
        "teaser": null
      },{
        "title": "[파이썬][백준 5338번] 마이크로소프트 로고",
        "excerpt":"1. 문제 [Bronze V] 마이크로소프트 로고 - 5338 문제 링크 성능 요약 메모리: 30860 KB, 시간: 72 ms 분류 구현(implementation) 문제 설명 마이크로소프트 로고를 예제 출력처럼 출력하는 프로그램을 작성하시오. 입력 Empty 출력 마이크로소프트 로고를 예제 출력처럼 출력한다. 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(1) 3. 문제 해결 및...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/5338/",
        "teaser": null
      },{
        "title": "[파이썬][백준 5339번] 콜센터",
        "excerpt":"1. 문제 [Bronze V] 콜센터 - 5339 문제 링크 성능 요약 메모리: 30860 KB, 시간: 64 ms 분류 구현(implementation) 문제 설명 스타워즈에 등장하는 로봇인 C3PO는 요즘 콜센터에 근무하고 있다. 콜센터에 앉아있는 C3PO를 그리는 프로그램을 작성하시오. 입력 Empty 출력 예제 출력처럼 콜센터에 앉아있는 C3PO를 출력한다. 마지막 세 줄의 두 '|' 사이에는...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/5339/",
        "teaser": null
      },{
        "title": "[파이썬][백준 7287번] 등록",
        "excerpt":"1. 문제 [Bronze V] 등록 - 7287 문제 링크 성능 요약 메모리: 30864 KB, 시간: 64 ms 분류 구현(implementation) 문제 설명 자신이 백준 온라인 저지(BOJ)에서 맞은 문제의 수와 아이디를 그대로 출력하는 프로그램을 작성하시오. 입력 이 문제는 입력이 없다. 출력 첫 줄에 자신이 맞은 문제의 수, 둘째 줄에 아이디를 출력한다. 출처:...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/7287/",
        "teaser": null
      },{
        "title": "[파이썬][백준 9653번] 스타워즈 로고",
        "excerpt":"1. 문제 [Bronze V] 스타워즈 로고 - 9653 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 구현(implementation) 문제 설명 스타워즈 로고를 예제 출력과 같이 출력하는 프로그램을 작성하시오. 입력 Empty 출력 스타워즈 로고를 출력한다. 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(1) 3. 문제 해결 및 코드...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/9653/",
        "teaser": null
      },{
        "title": "[파이썬][백준 9654번] 나부 함대 데이터",
        "excerpt":"1. 문제 [Bronze V] 나부 함대 데이터 - 9654 문제 링크 성능 요약 메모리: 30860 KB, 시간: 68 ms 분류 구현(implementation) 문제 설명 나부 행성의 함대 정보를 출력하는 프로그램을 작성하시오. 입력 Empty 출력 나부 행성의 함대의 정보를 아래와 예제 출력과 같은 표로 출력한다. 처음 두 열의 너비는 문자 15개, 세...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/9654/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1085번] 직사각형에서 탈출",
        "excerpt":"1. 문제 [Bronze III] 직사각형에서 탈출 - 1085 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 기하학(geometry), 수학(math) 문제 설명 한수는 지금 (x, y)에 있다. 직사각형은 각 변이 좌표축에 평행하고, 왼쪽 아래 꼭짓점은 (0, 0), 오른쪽 위 꼭짓점은 (w, h)에 있다. 직사각형의 경계선까지 가는 거리의 최솟값을 구하는...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1085/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1271번] 엄청난 부자2",
        "excerpt":"1. 문제 [Bronze V] 엄청난 부자2 - 1271 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 임의 정밀도 / 큰 수 연산(arbitrary_precision), 사칙연산(arithmetic), 수학(math) 문제 설명 갑부 최백준 조교는 동전을 최소로 바꾸는데 성공했으나 김재홍 조교가 그 돈을 발견해서 최백준 조교에게 그 돈을 나누자고 따진다. 그 사실이 전...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1271/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2338번] 긴자리 계산",
        "excerpt":"1. 문제 [Bronze V] 긴자리 계산 - 2338 문제 링크 성능 요약 메모리: 30860 KB, 시간: 68 ms 분류 임의 정밀도 / 큰 수 연산(arbitrary_precision), 사칙연산(arithmetic), 수학(math) 문제 설명 두 수 A, B를 입력받아, A+B, A-B, A×B를 구하는 프로그램을 작성하시오. 입력 첫째 줄에 A가, 둘째 줄에 B가 주어진다. 각각의 수는...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2338/",
        "teaser": null
      },{
        "title": "[파이썬][백준 24309번] РАВЕНСТВО",
        "excerpt":"1. 문제 [Bronze V] РАВЕНСТВО - 24309 문제 링크 성능 요약 메모리: 30860 KB, 시간: 72 ms 분류 임의 정밀도 / 큰 수 연산(arbitrary_precision), 사칙연산(arithmetic), 수학(math) 문제 설명 Учителката по математика дала на учениците да намерят неизвестното x от равенството: a·x = b-c. Числата а, b и c са естествени...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/24309/",
        "teaser": null
      },{
        "title": "[파이썬][백준 24736번] Football Scoring",
        "excerpt":"1. 문제 [Bronze V] Football Scoring - 24736 문제 링크 성능 요약 메모리: 30860 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 There are five ways to score points in american professional football: Touchdown - 6 points Field Goal - 3 points Safety - 2 points After touchdown 1...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/24736/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2475번] 검증수",
        "excerpt":"1. 문제 [Bronze V] 검증수 - 2475 문제 링크 성능 요약 메모리: 32976 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 컴퓨터를 제조하는 회사인 KOI 전자에서는 제조하는 컴퓨터마다 6자리의 고유번호를 매긴다. 고유번호의 처음 5자리에는 00000부터 99999까지의 수 중 하나가 주어지며 6번째 자리에는 검증수가 들어간다. 검증수는 고유번호의 처음 5자리에...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2475/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2558번] A+B - 2",
        "excerpt":"1. 문제 [Bronze V] A+B - 2 - 2558 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 A, 둘째 줄에 B가 주어진다. (0 &lt; A, B &lt; 10) 출력...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2558/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2914번] 저작권",
        "excerpt":"1. 문제 [Bronze V] 저작권 - 2914 문제 링크 성능 요약 메모리: 32972 KB, 시간: 76 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 창영이는 노래 여러 개를 이어서 부르는 가수이다. 유명한 노래의 비슷한 멜로디를 이어서 부르면서 언제 곡이 넘어갔는지 모르게 만드는 것이 창영이 노래의 특징이다. 이런 노래로 상업적으로 엄청난 성공을...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2914/",
        "teaser": null
      },{
        "title": "[파이썬][백준 3053번] 택시 기하학",
        "excerpt":"1. 문제 [Bronze III] 택시 기하학 - 3053 문제 링크 성능 요약 메모리: 32976 KB, 시간: 68 ms 분류 기하학(geometry), 수학(math) 문제 설명 19세기 독일 수학자 헤르만 민코프스키는 비유클리드 기하학 중 택시 기하학을 고안했다. 택시 기하학에서 두 점 T1(x1,y1), T2(x2,y2) 사이의 거리는 다음과 같이 구할 수 있다. D(T1,T2) = |x1-x2|...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/3053/",
        "teaser": null
      },{
        "title": "[파이썬][백준 4153번] 직각삼각형",
        "excerpt":"1. 문제 [Bronze III] 직각삼각형 - 4153 문제 링크 성능 요약 메모리: 32972 KB, 시간: 72 ms 분류 기하학(geometry), 수학(math), 피타고라스 정리(pythagoras) 문제 설명 과거 이집트인들은 각 변들의 길이가 3, 4, 5인 삼각형이 직각 삼각형인것을 알아냈다. 주어진 세변의 길이로 삼각형이 직각인지 아닌지 구분하시오. 입력 입력은 여러개의 테스트케이스로 주어지며 마지막줄에는 0...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/4153/",
        "teaser": null
      },{
        "title": "[파이썬][백준 5522번] 카드 게임",
        "excerpt":"1. 문제 [Bronze V] 카드 게임 - 5522 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 JOI군은 카드 게임을 하고 있다. 이 카드 게임은 5회의 게임으로 진행되며, 그 총점으로 승부를 하는 게임이다. JOI군의 각 게임의 득점을 나타내는 정수가 주어졌을 때, JOI군의 총점을 구하는...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/5522/",
        "teaser": null
      },{
        "title": "[파이썬][백준 5554번] 심부름 가는 길",
        "excerpt":"1. 문제 [Bronze V] 심부름 가는 길 - 5554 문제 링크 성능 요약 메모리: 30860 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 승균이는 매일 학교, PC방, 학원에 다닌다. 반복되는 일상에 익숙해진 승균이는 이동시간을 단축해서 PC방에 더 오래 머물고 싶었다. 그래서 스톱워치를 들고 이동할 때마다 기록을 잰 후...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/5554/",
        "teaser": null
      },{
        "title": "[파이썬][백준 8370번] Plane",
        "excerpt":"1. 문제 [Bronze V] Plane - 8370 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 Byteland Airlines recently extended their aircraft fleet with a new model of a plane. The new acquisition has n1 rows of seats in the business class and n2...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/8370/",
        "teaser": null
      },{
        "title": "[파이썬][백준 8437번] Julka",
        "excerpt":"1. 문제 [Bronze V] Julka - 8437 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 임의 정밀도 / 큰 수 연산(arbitrary_precision), 사칙연산(arithmetic), 수학(math) 문제 설명 Julka zaskoczyła wczoraj w przedszkolu swoją wychowawczynię rozwiązując następującą zagadkę: Klaudia i Natalia mają razem 10 jabłek, ale Klaudia ma o 2...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/8437/",
        "teaser": null
      },{
        "title": "[파이썬][백준 8871번] Zadanie próbne 2",
        "excerpt":"1. 문제 [Bronze V] Zadanie próbne 2 - 8871 문제 링크 성능 요약 메모리: 30860 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 Wyobraźmy sobie przez chwilę, że w tym roku konkurs SKI'10 składa się z n punktowanych rund i jednej rundy próbnej. Ile zgodnie z regulaminem może się...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/8871/",
        "teaser": null
      },{
        "title": "[파이썬][백준 24904번] Baekjoon Wordline Judge",
        "excerpt":"1. 문제 [Unrated] Baekjoon Wordline Judge - 24904 문제 링크 성능 요약 메모리: 4528 KB, 시간: 0 ms 분류 Empty 문제 설명 Wordle 287 3/6 ⬜⬜🟩🟨⬜ ⬜⬜⬜🟨🟨 🟩🟩🟩🟩🟩 입력 Empty 출력 다섯 글자 영단어를 대문자로 써서 제출한다. 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 txt 3. 문제 해결 및 코드 RETCH...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Unrated"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/24904/",
        "teaser": null
      },{
        "title": "[파이썬][백준 24905번] 24905",
        "excerpt":"1. 문제 [Unrated] 24905번 문제 - 24905 문제 링크 성능 요약 메모리: 4528 KB, 시간: 0 ms 분류 구현(implementation) 문제 설명 이 문제는 대회가 끝나면 문제 번호로 24905번을 부여받을 예정이다. 제출할 소스가 부여받을 제출 번호를 그대로 출력하는 프로그램을 작성하시오. 입력 Empty 출력 제출할 소스가 부여받을 제출 번호를 출력한다. 출처: 백준,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Unrated"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/24905/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10170번] NFC West vs North",
        "excerpt":"1. 문제 [Bronze V] NFC West vs North - 10170 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 구현(implementation) 문제 설명 동혁이를 위해 NFC 서부와 북부 디비전 순위를 출력하는 프로그램을 작성하시오. 입력 없음 출력 예제와 같이 NFC 서부와 북부 디비전 순위를 출력한다. 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10170/",
        "teaser": null
      },{
        "title": "[파이썬][백준 11382번] 꼬마 정민",
        "excerpt":"1. 문제 [Bronze V] 꼬마 정민 - 11382 문제 링크 성능 요약 메모리: 30860 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 꼬마 정민이는 이제 A + B 정도는 쉽게 계산할 수 있다. 이제 A + B + C를 계산할 차례이다! 입력 첫 번째 줄에 A, B, C (1...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/11382/",
        "teaser": null
      },{
        "title": "[파이썬][백준 11942번] 고려대는 사랑입니다",
        "excerpt":"1. 문제 [Bronze V] 고려대는 사랑입니다 - 11942 문제 링크 성능 요약 메모리: 30860 KB, 시간: 64 ms 분류 구현(implementation) 문제 설명 고려대학교는 사랑입니다. 입력 Empty 출력 첫째 줄에 “고려대학교”를 출력하세요. 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(1) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/11942/",
        "teaser": null
      },{
        "title": "[파이썬][백준 14645번] 와이버스 부릉부릉",
        "excerpt":"1. 문제 [Bronze V] 와이버스 부릉부릉 - 14645 문제 링크 성능 요약 메모리: 30860 KB, 시간: 68 ms 분류 구현(implementation) 문제 설명 버스 운전수 비와이 씨가 운전하는 버스(verse아님 ㅎ)는 N개의 정거장을 거친 후 종착역에 도착한다. 각 정거장은 내릴 인원수와 올라탈 인원수가 정해져 있다. 종착역에 도착하면 버스에 타고 있던 모든 사람이...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/14645/",
        "teaser": null
      },{
        "title": "[파이썬][백준 15733번] 나는 누구인가",
        "excerpt":"1. 문제 [Bronze V] 나는 누구인가 - 15733 문제 링크 성능 요약 메모리: 30860 KB, 시간: 68 ms 분류 구현(implementation) 문제 설명 당신은 지금 코딩을 하고있다. 그럼 당신은 어떤 사람인가. 입력 없다. 출력 “I'm Sexy”를 출력한다. 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(1) 3. 문제 해결 및 코드...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/15733/",
        "teaser": null
      },{
        "title": "[파이썬][백준 15962번] 새로운 시작",
        "excerpt":"1. 문제 [Bronze V] 새로운 시작 - 15962 문제 링크 성능 요약 메모리: 30860 KB, 시간: 68 ms 분류 구현(implementation) 문제 설명 부산일과학고등학교는 태어난지 얼마 안 된 킹-갓 과학고등학교다. 우리들을 위해 응원의 한마디를 출력하자. 입력 입력은 없다. 출력 파이팅!!을 출력한다. 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(1) 3....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/15962/",
        "teaser": null
      },{
        "title": "[파이썬][백준 16170번] 오늘의 날짜는?",
        "excerpt":"1. 문제 [Bronze V] 오늘의 날짜는? - 16170 문제 링크 성능 요약 메모리: 36296 KB, 시간: 88 ms 분류 구현(implementation) 문제 설명 2018 SCAL-MOOKJA에 출전하기로 한 무근이와 인서는 대회 준비를 위해 같이 모여 문제를 풀기로 했다. 그런데 어느 날, 일어나서 날짜를 확인해 보니 무근이와 인서의 시계가 서로 다른 날짜를 가리키고...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/16170/",
        "teaser": null
      },{
        "title": "[파이썬][백준 17295번] 엔드게임 스포일러",
        "excerpt":"1. 문제 [Bronze V] 엔드게임 스포일러 - 17295 문제 링크 성능 요약 메모리: 30860 KB, 시간: 68 ms 분류 구현(implementation) 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(1) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘 및 해설 입력값을 받은 다음 최종 출력은 어벤져스 엔드게임 제목을...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/17295/",
        "teaser": null
      },{
        "title": "[파이썬][백준 23234번] The World Responds",
        "excerpt":"1. 문제 [Bronze V] The World Responds - 23234 문제 링크 성능 요약 메모리: 30860 KB, 시간: 68 ms 분류 구현(implementation) 문제 설명 In many introductory computer programming classes, the first program that students learn to write just prints “Hello, world!” It is used as a first assignment because it...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/23234/",
        "teaser": null
      },{
        "title": "[파이썬][백준 24218번] Double Crypt 1",
        "excerpt":"1. 문제 [Bronze V] Double Crypt 1 - 24218 문제 링크 성능 요약 메모리: 30860 KB, 시간: 64 ms 분류 구현(implementation) 문제 설명 The Advanced Encryption Standard (AES) involves a new strong encryption algorithm. It works with three blocks of 128$128$ bits. Given a message block p$p$ (plaintext) and a...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/24218/",
        "teaser": null
      },{
        "title": "[파이썬][백준 24262번] 알고리즘의 수행 시간 1",
        "excerpt":"1. 문제 [Bronze V] 알고리즘 수업 - 알고리즘의 수행 시간 1 - 24262 문제 링크 성능 요약 메모리: 30864 KB, 시간: 64 ms 분류 구현(implementation), 시뮬레이션(simulation) 문제 설명 오늘도 서준이는 알고리즘의 수행시간 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자. 입력의 크기 n이 주어지면 MenOfPassion...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/24262/",
        "teaser": null
      },{
        "title": "[파이썬][백준 17388번] 와글와글 숭고한",
        "excerpt":"1. 문제 [Bronze IV] 와글와글 숭고한 - 17388 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 구현(implementation) 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(1) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘 및 해설 해당 문제의 조건에 따라 값을 출력해준다. 3개값의 합이...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/17388/",
        "teaser": null
      },{
        "title": "[파이썬][백준 17094번] Serious Problem",
        "excerpt":"1. 문제 [Bronze II] Serious Problem - 17094 문제 링크 성능 요약 메모리: 30840 KB, 시간: 72 ms 분류 구현(implementation), 문자열(string) 문제 설명 2와 e는 발음이 비슷해, 둘을 섞어서 말하면 듣는 사람을 짜증나게 만들 수 있다. 지민이는 이 점을 이용해 은수를 미치게 하고 있다. 은수를 위해 지민이가 말한 문자열 s가...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/17094/",
        "teaser": null
      },{
        "title": "[파이썬][백준 14652번] 나는 행복합니다~",
        "excerpt":"1. 문제 [Bronze V] 나는 행복합니다~ - 14652 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 “나는 행복합니다~ 한화라서 행복합니다~” 행복한 이 노래 가사! 그렇다. 욱제는 한화 이글스의 열렬한 이다. 욱제는 여름방학을 맞아 치킨과 맥주를 챙겨 야구장을 방문했다! 하지만 이게 웬걸? 치맥에 정신이...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/14652/",
        "teaser": null
      },{
        "title": "[파이썬][백준 14928번] 큰 수 (BIG)",
        "excerpt":"1. 문제 [Bronze V] 큰 수 (BIG) - 14928 문제 링크 성능 요약 메모리: 32820 KB, 시간: 6004 ms 분류 임의 정밀도 / 큰 수 연산(arbitrary_precision), 사칙연산(arithmetic), 수학(math) 문제 설명 제연이는 그의 생일(2000년 3월 3일)을 기념해 자신이 가장 좋아하는 수를 20000303으로 나눈 나머지를 구해 그 수만큼 잠을 자기로 했다. 제연이가...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/14928/",
        "teaser": null
      },{
        "title": "[파이썬][백준 15439번] Vera and Outfits",
        "excerpt":"1. 문제 [Bronze V] Vera and Outfits - 15439 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 조합론(combinatorics), 수학(math) 문제 설명 Vera owns N tops and N pants. The i-th top and i-th pants have colour i, for 1 ≤ i ≤ N, where all N...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/15439/",
        "teaser": null
      },{
        "title": "[파이썬][백준 15727번] 조별과제를 하려는데 조장이 사라졌다",
        "excerpt":"1. 문제 [Bronze V] 조별과제를 하려는데 조장이 사라졌다 - 15727 문제 링크 성능 요약 메모리: 32976 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 3학년 1학기를 재학 중인 성우는 ‘빨간눈 초파리의 뒷다리 털의 개수와 파인애플 껍질의 이해’라는 과목을 수강 중이다. 기말고사를 맞이하여 교수님은 수강생들에게 조별과제를 내주었고, 그 내용은 다음과...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/15727/",
        "teaser": null
      },{
        "title": "[파이썬][백준 15740번] A+B - 9",
        "excerpt":"1. 문제 [Bronze V] A+B - 9 - 15740 문제 링크 성능 요약 메모리: 30864 KB, 시간: 84 ms 분류 임의 정밀도 / 큰 수 연산(arbitrary_precision), 사칙연산(arithmetic), 수학(math) 문제 설명 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 A와 B (-1010000 ≤ A, B ≤...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/15740/",
        "teaser": null
      },{
        "title": "[파이썬][백준 15894번] 수학은 체육과목 입니다",
        "excerpt":"1. 문제 [Bronze V] 수학은 체육과목 입니다 - 15894 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(1) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘 및 해설 한 변의 길이를 기준으로 가장 아랫부분의...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/15894/",
        "teaser": null
      },{
        "title": "[파이썬][백준 15964번] 이상한 기호",
        "excerpt":"1. 문제 [Bronze V] 이상한 기호 - 15964 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 부산일과학고등학교의 효진이는 수학의 귀재이다. 어떤 문제라도 보면 1분 내에 풀어버린다는 학교의 전설이 내려올 정도였는데, 이런 킹ㅡ갓 효진에게도 고민이 생겼다. 대부분의 문제에서 반복되는 연산이 있었기 때문이다! 이...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/15964/",
        "teaser": null
      },{
        "title": "[파이썬][백준 16394번] 홍익대학교",
        "excerpt":"1. 문제 [Bronze V] 홍익대학교 - 16394 문제 링크 성능 요약 메모리: 30860 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 홍익대학교는 1946년에 개교하였다. 특정 년도가 주어졌을 때, 그 해가 개교 몇 주년인지 출력하라. 단, 홍익대학교는 없어지지 않는다고 가정한다. 문제는 C, C++, JAVA 또는 Python3을 이용하여 해결한다. C 입력...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/16394/",
        "teaser": null
      },{
        "title": "[파이썬][백준 16430번] 제리와 톰",
        "excerpt":"1. 문제 [Bronze V] 제리와 톰 - 16430 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 톰은 마트에서 치즈 1kg 을 사서 집으로 돌아왔습니다. 그런데 톰이 한눈을 판 사이 제리가 와서 A/B kg 만큼 훔쳐갔습니다. 제리가 치즈를 훔쳐 간 후 톰이 가지고 있는...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/16430/",
        "teaser": null
      },{
        "title": "[파이썬][백준 17256번] 달달함이 넘쳐흘러",
        "excerpt":"1. 문제 [Bronze V] 달달함이 넘쳐흘러 - 17256 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 냉장고에서 맛있게 숙성되고 있는 마카롱은 심심한 나머지 새로운 수 체계를 생각해냈다. 마카롱은 이를 케이크 수라고 이름 붙이고, 다음과 같이 정의했다. 케이크 수는 3개의 자연수 x, y,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/17256/",
        "teaser": null
      },{
        "title": "[파이썬][백준 17496번] 스타후르츠",
        "excerpt":"1. 문제 [Bronze V] 스타후르츠 - 17496 문제 링크 성능 요약 메모리: 30860 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 수학(math) 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(N) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘 및 해설 반복문을 통해 해당 위에 문구에서 제시하는 조건을 충족한...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/17496/",
        "teaser": null
      },{
        "title": "[파이썬][백준 18096번] Арифметическая магия",
        "excerpt":"1. 문제 [Bronze V] Арифметическая магия - 18096 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 수학(math) 문제 설명 Дэвид Блейн попросил зрителя задумать два числа. Затем он попросил перемножить два числа, большие каждого из задуманных на единицу, вычесть из результата сначала одно задуманное число, затем другое,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/18096/",
        "teaser": null
      },{
        "title": "[파이썬][백준 18301번] Rats",
        "excerpt":"1. 문제 [Bronze V] Rats - 18301 문제 링크 성능 요약 메모리: 30864 KB, 시간: 80 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 To celebrate the Lunar New Year of the Rat, Douglas decides to count the number of rats living in his area. It is impossible for him to find...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/18301/",
        "teaser": null
      },{
        "title": "[파이썬][백준 20254번] Site Score",
        "excerpt":"1. 문제 [Bronze V] Site Score - 20254 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 Teams from variaous universities compete in ICPC regional contests for tickets to the ICPC World Finals. The number of tickets allocated to every regional contest may be...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/20254/",
        "teaser": null
      },{
        "title": "[파이썬][백준 20492번] 세금",
        "excerpt":"1. 문제 [Bronze V] 세금 - 20492 문제 링크 성능 요약 메모리: 32976 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 선린인터넷고등학교의 한 학생은 프로그래밍 대회에 참가하여 거액의 상금을 수상하는 영광을 누리게 되었다. 하지만, 이 학생이 상금 금액의 전부를 수령하게 되는 것은 아니다. 상금의 일부를 제세공과금으로 납부하고, 나머지 금액을...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/20492/",
        "teaser": null
      },{
        "title": "[파이썬][백준 21300번] Bottle Return",
        "excerpt":"1. 문제 [Bronze V] Bottle Return - 21300 문제 링크 성능 요약 메모리: 30860 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 In the United States, beverage container deposit laws, or so-called bottle bills, are designed to reduce litter and reclaim bottles, cans and other containers for recycling. Ten...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/21300/",
        "teaser": null
      },{
        "title": "[파이썬][백준 22193번] Multiply",
        "excerpt":"1. 문제 [Bronze V] Multiply - 22193 문제 링크 성능 요약 메모리: 30864 KB, 시간: 180 ms 분류 임의 정밀도 / 큰 수 연산(arbitrary_precision), 사칙연산(arithmetic), 수학(math) 문제 설명 Write a program that computes a product of two non-negative integers A and B. The integers are represented in decimal notation and...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/22193/",
        "teaser": null
      },{
        "title": "[파이썬][백준 24078번] 余り (Remainder)",
        "excerpt":"1. 문제 [Bronze V] 余り (Remainder) - 24078 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 正の整数 X が与えられる．X を 21 で割った余りを出力せよ． 입력 入力は以下の形式で標準入力から与えられる． X 출력 X を 21 で割った余りを出力せよ． 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(1) 3. 문제 해결 및...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/24078/",
        "teaser": null
      },{
        "title": "[파이썬][백준 24082번] 立方体 (Cube)",
        "excerpt":"1. 문제 [Bronze V] 立方体 (Cube) - 24082 문제 링크 성능 요약 메모리: 30860 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 一辺の長さが x cm の立方体の体積は (x × x × x) cm3 である． 整数 X が与えられる．一辺の長さが X cm の立方体の体積は何 cm3 か求めよ． 입력 入力は以下の形式で標準入力から与えられる． X 출력 一辺の長さが X cm の立方体の体積が何...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/24082/",
        "teaser": null
      },{
        "title": "[파이썬][백준 24086번] 身長 (Height)",
        "excerpt":"1. 문제 [Bronze V] 身長 (Height) - 24086 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 JOI 君の 1 年前の身長は A cm であった．JOI 君の今の身長は B cm である． この 1 年間で JOI 君の身長は伸びたことがわかっている． JOI 君のこの 1 年間の身長の伸びは何 cm であるか出力せよ． 입력 入力は以下の形式で標準入力から与えられる． A B 출력...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/24086/",
        "teaser": null
      },{
        "title": "[파이썬][백준 24183번] Affischutskicket",
        "excerpt":"1. 문제 [Bronze V] Affischutskicket - 24183 문제 링크 성능 요약 메모리: 30860 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 VE OCH FASA! PostNord har för det 1337$1337$:e året i rad höjt portot, vilket riskerar att bräcka Programmeringsolympiadens budget. Varje år skickar PO ut affischer till ca 450$450$...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/24183/",
        "teaser": null
      },{
        "title": "[파이썬][백준 24568번] Cupcake Party",
        "excerpt":"1. 문제 [Bronze V] Cupcake Party - 24568 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 A regular box of cupcakes holds 8 cupcakes, while a small box holds 3 cupcakes. There are 28 students in a class and a total of at...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/24568/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 짝수와 홀수",
        "excerpt":"1. 문제 [level 1] 짝수와 홀수 - 12937 문제 링크 성능 요약 메모리: 10 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 정수 num이 짝수일 경우 \"Even\"을 반환하고 홀수인 경우 \"Odd\"를 반환하는 함수, solution을 완성해주세요. 제한 조건 num은 int 범위의 정수입니다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12937/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 평균 구하기",
        "excerpt":"1. 문제 [level 1] 평균 구하기 - 12944 문제 링크 성능 요약 메모리: 10.1 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요. 제한사항 arr은 길이 1 이상, 100 이하인 배열입니다. arr의...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12944/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 직사각형 별찍기",
        "excerpt":"1. 문제 [level 1] 직사각형 별찍기 - 12969 문제 링크 성능 요약 메모리: 7.54 MB, 시간: 27.85 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다. 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12969/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 하샤드 수",
        "excerpt":"1. 문제 [level 1] 하샤드 수 - 12947 문제 링크 성능 요약 메모리: 10.4 MB, 시간: 0.02 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12947/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10872번] 팩토리얼",
        "excerpt":"1. 문제 [Bronze III] 팩토리얼 - 10872 문제 링크 성능 요약 메모리: 30864 KB, 시간: 68 ms 분류 구현(implementation), 수학(math) 문제 설명 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 정수 N(0 ≤ N ≤ 12)이 주어진다. 출력 첫째 줄에 N!을 출력한다. 출처: 백준,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10872/",
        "teaser": null
      },{
        "title": "[파이썬][백준 6778번] Which Alien?",
        "excerpt":"1. 문제 [Bronze IV] Which Alien? - 6778 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 구현(implementation) 문제 설명 Canada Cosmos Control has received a report of another incident. They believe that an alien has illegally entered our space. A person who witnessed the appearance of the...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/6778/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1330번] 두 수 비교하기",
        "excerpt":"1. 문제 [Bronze IV] 두 수 비교하기 - 1330 문제 링크 성능 요약 메모리: 30864 KB, 시간: 80 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오. 입력 첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다. 출력...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1330/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1292번] TV 크기",
        "excerpt":"1. 문제 [Bronze IV] TV 크기 - 1297 문제 링크 성능 요약 메모리: 30864 KB, 시간: 76 ms 분류 기하학(geometry), 수학(math), 피타고라스 정리(pythagoras) 문제 설명 김탑은 TV를 사러 인터넷 쇼핑몰에 들어갔다. 쇼핑을 하던 중에, TV의 크기는 그 TV의 대각선의 길이로 나타낸 다는 것을 알았다. 하지만, 김탑은 대각선의 길이가 같다고 해도,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1297/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2420번] 사파리월드",
        "excerpt":"1. 문제 [Bronze IV] 사파리월드 - 2420 문제 링크 성능 요약 메모리: 30860 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 사파리월드는 인터넷으로만 존재하는 미스테리한 나라이다. 사파리월드에는 2개의 서브도메인이 seunghwan.royal.gov.sw와 kyuhyun.royal.gov.sw 이 있는데, 이것이 couple.royal.gov.sw으로 합쳐질 것이다. 그러나 도메인 관리 센터 SWNIC(센터장: 김동규)에는 엄격한 룰이 있다. 두 서브도메인을...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2420/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2530번] 인공지능 시계",
        "excerpt":"1. 문제 [Bronze IV] 인공지능 시계 - 2530 문제 링크 성능 요약 메모리: 30864 KB, 시간: 76 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 KOI 전자에서는 건강에 좋고 맛있는 훈제오리구이 요리를 간편하게 만드는 인공지능 오븐을 개발하려고 한다. 인공지능 오븐을 사용하는 방법은 적당한 양의 오리 훈제 재료를 인공지능 오븐에 넣으면 된다. 그러면...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2530/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1002번] 터렛",
        "excerpt":"1. 문제 [Silver IV] 터렛 - 1002 문제 링크 성능 요약 메모리: 30860 KB, 시간: 84 ms 분류 기하학(geometry), 수학(math) 문제 설명 조규현과 백승환은 터렛에 근무하는 직원이다. 하지만 워낙 존재감이 없어서 인구수는 차지하지 않는다. 다음은 조규현과 백승환의 사진이다. 이석원은 조규현과 백승환에게 상대편 마린(류재명)의 위치를 계산하라는 명령을 내렸다. 조규현과 백승환은 각각...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Silver"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1002/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10797번] 10부제",
        "excerpt":"1. 문제 [Bronze IV] 10부제 - 10797 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 구현(implementation) 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(N) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘 및 해설 받아야 할 값들을 N과 A에 받는다. 이때 A는 리스트...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10797/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2752번] 세수 정렬",
        "excerpt":"1. 문제 [Bronze IV] 세수정렬 - 2752 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 정렬(sorting) 문제 설명 동규는 세수를 하다가 정렬이 하고싶어졌다. 숫자 세 개를 생각한 뒤에, 이를 오름차순으로 정렬하고 싶어 졌다. 숫자 세 개가 주어졌을 때, 가장 작은 수, 그 다음 수, 가장 큰 수를...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2752/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2750번] 수 정렬하기",
        "excerpt":"1. 문제 [Bronze I] 수 정렬하기 - 2750 문제 링크 성능 요약 메모리: 30840 KB, 시간: 256 ms 분류 구현(implementation), 정렬(sorting) 문제 설명 N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오. 입력 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수 주어진다. 이...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2750/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1003번] 피보나치 함수",
        "excerpt":"1. 문제 [Silver III] 피보나치 함수 - 1003 문제 링크 성능 요약 메모리: 30840 KB, 시간: 80 ms 분류 다이나믹 프로그래밍(dp) 문제 설명 다음 소스는 N번째 피보나치 수를 구하는 C++ 함수이다. int fibonacci(int n) { if (n == 0) { printf(\"0\"); return 0; } else if (n == 1) {...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Silver"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1003/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 두 개 뽑아서 더하기",
        "excerpt":"1. 문제 [level 1] 두 개 뽑아서 더하기 - 68644 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.66 ms 구분 코딩테스트 연습 &gt; 월간 코드 챌린지 시즌1 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/68644/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 음양 더하기",
        "excerpt":"1. 문제 [level 1] 음양 더하기 - 76501 문제 링크 성능 요약 메모리: 10.3 MB, 시간: 0.11 ms 구분 코딩테스트 연습 &gt; 월간 코드 챌린지 시즌2 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/76501/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 부족한 금액 계산하기",
        "excerpt":"1. 문제 [level 1] 부족한 금액 계산하기 - 82612 문제 링크 성능 요약 메모리: 10.3 MB, 시간: 0.05 ms 구분 코딩테스트 연습 &gt; 위클리 챌린지 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/82612/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 같은 숫자는 싫어",
        "excerpt":"1. 문제 [level 1] 같은 숫자는 싫어 - 12906 문제 링크 성능 요약 메모리: 27.9 MB, 시간: 106.24 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 71.9 효율성: 28.1 합계: 100.0 / 100.0 문제 설명 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12906/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 제일 작은 수 제거하기",
        "excerpt":"1. 문제 [level 1] 제일 작은 수 제거하기 - 12935 문제 링크 성능 요약 메모리: 10.3 MB, 시간: 0.07 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12935/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 최대공약수와 최소공배수",
        "excerpt":"1. 문제 [level 1] 최대공약수와 최소공배수 - 12940 문제 링크 성능 요약 메모리: 10 MB, 시간: 0.36 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12940/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 콜라츠 추측",
        "excerpt":"1. 문제 [level 1] 콜라츠 추측 - 12943 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.04 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12943/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 행렬의 덧셈",
        "excerpt":"1. 문제 [level 1] 행렬의 덧셈 - 12950 문제 링크 성능 요약 메모리: 22.9 MB, 시간: 31.47 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12950/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] x만큼 간격이 있는 n개의 숫자",
        "excerpt":"1. 문제 [level 1] x만큼 간격이 있는 n개의 숫자 - 12954 문제 링크 성능 요약 메모리: 10.3 MB, 시간: 0.09 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12954/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 소수 만들기",
        "excerpt":"1. 문제 [level 1] 소수 만들기 - 12977 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.01 ms 구분 코딩테스트 연습 &gt; Summer／Winter Coding（～2018） 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12977/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 신규 아이디 추천",
        "excerpt":"1. 문제 [level 1] 신규 아이디 추천 - 72410 문제 링크 성능 요약 메모리: 10.3 MB, 시간: 0.04 ms 구분 코딩테스트 연습 &gt; 2021 KAKAO BLIND RECRUITMENT 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 카카오에 입사한 신입 개발자 네오는 \"카카오계정개발팀\"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다. \"네오\"에게 주어진...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/72410/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 문자열을 정수로 바꾸기",
        "excerpt":"1. 문제 [level 1] 문자열을 정수로 바꾸기 - 12925 문제 링크 성능 요약 메모리: 10.3 MB, 시간: 0.01 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요. 제한 조건 s의 길이는 1 이상 5이하입니다. s의 맨앞에는...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12925/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 자릿수 더하기",
        "excerpt":"1. 문제 [level 1] 자릿수 더하기 - 12931 문제 링크 성능 요약 메모리: 10.3 MB, 시간: 0.02 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요. 예를들어 N = 123이면 1...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12931/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 2016년",
        "excerpt":"1. 문제 [level 1] 2016년 - 12901 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12901/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 가운데 글자 가져오기",
        "excerpt":"1. 문제 [level 1] 가운데 글자 가져오기 - 12903 문제 링크 성능 요약 메모리: 10.1 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다. 재한사항 s는...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12903/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 나누어 떨어지는 숫자 배열",
        "excerpt":"1. 문제 [level 1] 나누어 떨어지는 숫자 배열 - 12910 문제 링크 성능 요약 메모리: 10 MB, 시간: 0.05 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요. divisor로 나누어...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12910/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 두 정수 사이의 합",
        "excerpt":"1. 문제 [level 1] 두 정수 사이의 합 - 12912 문제 링크 성능 요약 메모리: 10.1 MB, 시간: 0.13 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12912/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 문자열 내 마음대로 정렬하기",
        "excerpt":"1. 문제 [level 1] 문자열 내 마음대로 정렬하기 - 12915 문제 링크 성능 요약 메모리: 10.4 MB, 시간: 0.02 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12915/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 문자열 내 p와 y의 개수",
        "excerpt":"1. 문제 [level 1] 문자열 내 p와 y의 개수 - 12916 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.01 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12916/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 문자열 내림차순으로 배치하기",
        "excerpt":"1. 문제 [level 1] 문자열 내림차순으로 배치하기 - 12917 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.01 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요. s는 영문 대소문자로만 구성되어...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12917/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 문자열 다루기 기본",
        "excerpt":"1. 문제 [level 1] 문자열 다루기 기본 - 12918 문제 링크 성능 요약 메모리: 10.1 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 \"a234\"이면 False를 리턴하고...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12918/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 서울에서 김서방 찾기",
        "excerpt":"1. 문제 [level 1] 서울에서 김서방 찾기 - 12919 문제 링크 성능 요약 메모리: 10.1 MB, 시간: 0.01 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 String형 배열 seoul의 element중 \"Kim\"의 위치 x를 찾아, \"김서방은 x에 있다\"는 String을 반환하는 함수, solution을 완성하세요. seoul에 \"Kim\"은...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12919/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 소수 찾기",
        "excerpt":"1. 문제 [level 1] 소수 찾기 - 12921 문제 링크 성능 요약 메모리: 17.1 MB, 시간: 240.79 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 75.0 효율성: 25.0 합계: 100.0 / 100.0 문제 설명 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요. 소수는 1과 자기 자신으로만...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12921/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 수박수박수박수박수박수박수 ?",
        "excerpt":"1. 문제 [level 1] 수박수박수박수박수박수? - 12922 문제 링크 성능 요약 메모리: 0.0 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 길이가 n이고, \"수박수박수박수....\"와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 \"수박수박\"을 리턴하고 3이라면 \"수박수\"를 리턴하면 됩니다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12922/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 약수의 합",
        "excerpt":"1. 문제 [level 1] 약수의 합 - 12928 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.15 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요. 제한 사항 n은 0 이상 3000이하인 정수입니다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12928/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 자연수 뒤집어 배열 만들기",
        "excerpt":"1. 문제 [level 1] 자연수 뒤집어 배열로 만들기 - 12932 문제 링크 성능 요약 메모리: 10.1 MB, 시간: 0.02 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다. 제한...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12932/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 정수 내림차순으로 배치하기",
        "excerpt":"1. 문제 [level 1] 정수 내림차순으로 배치하기 - 12933 문제 링크 성능 요약 메모리: 10.4 MB, 시간: 0.02 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12933/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 정수 제곱근 판별",
        "excerpt":"1. 문제 [level 1] 정수 제곱근 판별 - 12934 문제 링크 성능 요약 메모리: 10.1 MB, 시간: 0.01 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다. n이 양의 정수 x의...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12934/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 핸드폰 번호 가리기",
        "excerpt":"1. 문제 [level 1] 핸드폰 번호 가리기 - 12948 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다. 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12948/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 시저 암호",
        "excerpt":"1. 문제 [level 1] 시저 암호 - 12926 문제 링크 성능 요약 메모리: 10.1 MB, 시간: 1.77 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 \"AB\"는 1만큼...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12926/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 이상한 문자 만들기",
        "excerpt":"1. 문제 [level 1] 이상한 문자 만들기 - 12930 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.04 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12930/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] K번째수",
        "excerpt":"1. 문제 [level 1] K번째수 - 42748 문제 링크 성능 요약 메모리: 9.95 MB, 시간: 0.01 ms 구분 코딩테스트 연습 &gt; 정렬 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다. 예를 들어 array가 [1, 5, 2,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/42748/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 완주하지 못한 선수",
        "excerpt":"1. 문제 [level 1] 완주하지 못한 선수 - 42576 문제 링크 성능 요약 메모리: 33.9 MB, 시간: 52.11 ms 구분 코딩테스트 연습 &gt; 해시 채점결과 정확성: 50.0 효율성: 50.0 합계: 100.0 / 100.0 문제 설명 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다. 마라톤에 참여한...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/42576/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 내적",
        "excerpt":"1. 문제 [level 1] 내적 - 70128 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.09 ms 구분 코딩테스트 연습 &gt; 월간 코드 챌린지 시즌1 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요. 이때, a와...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/70128/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 약수의 개수와 덧셈",
        "excerpt":"1. 문제 [level 1] 약수의 개수와 덧셈 - 77884 문제 링크 성능 요약 메모리: 10 MB, 시간: 0.43 ms 구분 코딩테스트 연습 &gt; 월간 코드 챌린지 시즌2 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/77884/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 예산",
        "excerpt":"1. 문제 [level 1] 예산 - 12982 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.02 ms 구분 코딩테스트 연습 &gt; Summer／Winter Coding（～2018） 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 그러나, 전체 예산이 정해져 있기 때문에...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12982/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 체육복",
        "excerpt":"1. 문제 [level 1] 체육복 - 42862 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.01 ms 구분 코딩테스트 연습 &gt; 탐욕법（Greedy） 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/42862/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 3진법 뒤집기",
        "excerpt":"1. 문제 [level 1] 3진법 뒤집기 - 68935 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.02 ms 구분 코딩테스트 연습 &gt; 월간 코드 챌린지 시즌1 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/68935/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 없는 숫자 더하기",
        "excerpt":"1. 문제 [level 1] 없는 숫자 더하기 - 86051 문제 링크 성능 요약 메모리: 10.3 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; 월간 코드 챌린지 시즌3 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/86051/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 최소직사각형",
        "excerpt":"1. 문제 [level 1] 최소직사각형 - 86491 문제 링크 성능 요약 메모리: 11.4 MB, 시간: 5.04 ms 구분 코딩테스트 연습 &gt; 위클리 챌린지 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/86491/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 나머지가 1이 되는 수 찾기",
        "excerpt":"1. 문제 [level 1] 나머지가 1이 되는 수 찾기 - 87389 문제 링크 성능 요약 메모리: 10.1 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; 월간 코드 챌린지 시즌3 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/87389/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 다음 큰 숫자",
        "excerpt":"1. 문제 [level 2] 다음 큰 숫자 - 12911 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.01 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 70.0 효율성: 30.0 합계: 100.0 / 100.0 문제 설명 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다. 조건 1. n의 다음...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_2"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12911/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10817번] 세 수",
        "excerpt":"1. 문제 [Bronze III] 세 수 - 10817 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 구현(implementation) 문제 설명 세 정수 A, B, C가 주어진다. 이때, 두 번째로 큰 정수를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 세 정수 A, B, C가 공백으로 구분되어 주어진다. (1 ≤ A,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10817/",
        "teaser": null
      },{
        "title": "[파이썬][백준 25083번] 새싹",
        "excerpt":"1. 문제 [Bronze V] 새싹 - 25083 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 구현(implementation) 문제 설명 아래 예제와 같이 새싹을 출력하시오. 입력 입력은 없다. 출력 새싹을 출력한다. 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(1) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/25083/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2231번] 분해합",
        "excerpt":"1. 문제 [Bronze II] 분해합 - 2231 문제 링크 성능 요약 메모리: 30840 KB, 시간: 1600 ms 분류 브루트포스 알고리즘(bruteforcing) 문제 설명 어떤 자연수 N이 있을 때, 그 자연수 N의 분해합은 N과 N을 이루는 각 자리수의 합을 의미한다. 어떤 자연수 M의 분해합이 N인 경우, M을 N의 생성자라 한다. 예를 들어,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2231/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2798번] 블랙잭",
        "excerpt":"1. 문제 [Bronze II] 블랙잭 - 2798 문제 링크 성능 요약 메모리: 30840 KB, 시간: 160 ms 분류 브루트포스 알고리즘(bruteforcing) 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 브루트 포스 O(N^3) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘 및 해설 해당 문제의 경우 분해합을 구하는 문제로 브루트 포스를...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2798/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2163번] 초콜릿 자르기",
        "excerpt":"1. 문제 [Bronze III] 초콜릿 자르기 - 2163 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 정화는 N×M 크기의 초콜릿을 하나 가지고 있다. 초콜릿은 금이 가 있는 모양을 하고 있으며, 그 금에 의해 N×M개의 조각으로 나눠질 수 있다. 초콜릿의 크기가 너무 크다고 생각한...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2163/",
        "teaser": null
      },{
        "title": "[파이썬][백준 5355번] 화성 수학",
        "excerpt":"1. 문제 [Bronze II] 화성 수학 - 5355 문제 링크 성능 요약 메모리: 30840 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 겨울 방학에 달에 다녀온 상근이는 여름 방학 때는 화성에 갔다 올 예정이다. (3996번) 화성에서는 지구와는 조금 다른 연산자 @, %, #을 사용한다. @는 3을 곱하고, %는...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/5355/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 상위 n개 레코드",
        "excerpt":"1. 문제 [level 1] 상위 n개 레코드 - 59405 문제 링크 성능 요약 메모리: 0.0 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; SELECT 채점결과 Empty 문제 설명 ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","코테","프로그래머스","Level_1","MYSQL"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/59405/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1259번] 팰린드롬수",
        "excerpt":"1. 문제 [Bronze I] 팰린드롬수 - 1259 문제 링크 성능 요약 메모리: 30840 KB, 시간: 72 ms 분류 구현(implementation), 문자열(string) 문제 설명 어떤 단어를 뒤에서부터 읽어도 똑같다면 그 단어를 팰린드롬이라고 한다. 'radar', 'sees'는 팰린드롬이다. 수도 팰린드롬으로 취급할 수 있다. 수의 숫자들을 뒤에서부터 읽어도 같다면 그 수는 팰린드롬수다. 121, 12421 등은...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1259/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 124 나라의 숫자",
        "excerpt":"1. 문제 [level 2] 124 나라의 숫자 - 12899 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.01 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 70.0 효율성: 30.0 합계: 100.0 / 100.0 문제 설명 124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다. 124 나라에는 자연수만...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_2"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12899/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 올바른 괄호",
        "excerpt":"1. 문제 [level 2] 올바른 괄호 - 12909 문제 링크 성능 요약 메모리: 10.3 MB, 시간: 9.54 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 69.5 효율성: 30.5 합계: 100.0 / 100.0 문제 설명 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어 \"()()\"...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_2"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12909/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 모든 레코드 조회하기",
        "excerpt":"1. 문제 [level 1] 모든 레코드 조회하기 - 59034 문제 링크 성능 요약 메모리: 0.0 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; SELECT 채점결과 Empty 문제 설명 ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","코테","프로그래머스","Level_1","MYSQL"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/59034/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 역순 정렬하기",
        "excerpt":"1. 문제 [level 1] 역순 정렬하기 - 59035 문제 링크 성능 요약 메모리: 0.0 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; SELECT 채점결과 Empty 문제 설명 ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물...","categories": ["코딩테스트"],
        "tags": ["알고리즘","코테","프로그래머스","Level_1","MYSQL"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/59035/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 아픈 동물 찾기",
        "excerpt":"1. 문제 [level 1] 아픈 동물 찾기 - 59036 문제 링크 성능 요약 메모리: 0.0 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; SELECT 채점결과 Empty 문제 설명 ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","코테","프로그래머스","Level_1","MYSQL"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/59036/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 어린 동물 찾기",
        "excerpt":"1. 문제 [level 1] 어린 동물 찾기 - 59037 문제 링크 성능 요약 메모리: 0.0 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; SELECT 채점결과 Empty 문제 설명 ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","코테","프로그래머스","Level_1","MYSQL"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/59037/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 이름이 없는 동물의 아이디",
        "excerpt":"1. 문제 [level 1] 이름이 없는 동물의 아이디 - 59039 문제 링크 성능 요약 메모리: 0.0 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; IS NULL 채점결과 Empty 문제 설명 ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의...","categories": ["코딩테스트"],
        "tags": ["알고리즘","코테","프로그래머스","Level_1","MYSQL"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/59039/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 동물의 아이디와 이름",
        "excerpt":"1. 문제 [level 1] 동물의 아이디와 이름 - 59403 문제 링크 성능 요약 메모리: 0.0 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; SELECT 채점결과 Empty 문제 설명 ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","코테","프로그래머스","Level_1","MYSQL"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/59403/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 여러 기준으로 정렬하기",
        "excerpt":"1. 문제 [level 1] 여러 기준으로 정렬하기 - 59404 문제 링크 성능 요약 메모리: 0.0 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; SELECT 채점결과 Empty 문제 설명 ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","코테","프로그래머스","Level_1","MYSQL"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/59404/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 이름이 있는 동물의 아이디",
        "excerpt":"1. 문제 [level 1] 이름이 있는 동물의 아이디 - 59407 문제 링크 성능 요약 메모리: 0.0 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; IS NULL 채점결과 Empty 문제 설명 ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의...","categories": ["코딩테스트"],
        "tags": ["알고리즘","코테","프로그래머스","Level_1","MYSQL"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/59407/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 최댓값 구하기",
        "excerpt":"1. 문제 [level 1] 최댓값 구하기 - 59415 문제 링크 성능 요약 메모리: 0.0 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; SUM， MAX， MIN 채점결과 Empty 문제 설명 ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물...","categories": ["코딩테스트"],
        "tags": ["알고리즘","코테","프로그래머스","Level_1","MYSQL"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/59415/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] K번째수",
        "excerpt":"1. 문제 [level 1] K번째수 - 42748 문제 링크 성능 요약 메모리: 9.95 MB, 시간: 0.01 ms 구분 코딩테스트 연습 &gt; 정렬 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다. 예를 들어 array가 [1, 5, 2,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/42840/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 가장 큰 정사각형 찾기",
        "excerpt":"1. 문제 [level 2] 가장 큰 정사각형 찾기 - 12905 문제 링크 성능 요약 메모리: 38.7 MB, 시간: 380.09 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 59.6 효율성: 40.4 합계: 100.0 / 100.0 문제 설명 1와 0로 채워진 표(board)가 있습니다. 표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다. 표에서...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_2"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12905/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 땅따먹기",
        "excerpt":"1. 문제 [level 2] 땅따먹기 - 12913 문제 링크 성능 요약 메모리: 32.3 MB, 시간: 217.42 ms 구분 코딩테스트 연습 &gt; 연습문제 채점결과 정확성: 59.8 효율성: 40.2 합계: 100.0 / 100.0 문제 설명 땅따먹기 게임을 하려고 합니다. 땅따먹기 게임의 땅(land)은 총 N행 4열로 이루어져 있고, 모든 칸에는 점수가 쓰여 있습니다. 1행부터...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_2"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12913/",
        "teaser": null
      },{
        "title": "[파이썬][Leetcode][릿코드] Concatenation of Array",
        "excerpt":"1. 문제 1929. Concatenation of Array Easy Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 &lt;= i &lt; n (0-indexed). Specifically, ans is the concatenation of two nums...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Leetcode","릿코드"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1929/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1157번] 단어 공부",
        "excerpt":"1. 문제 [Bronze I] 단어 공부 - 1157 문제 링크 성능 요약 메모리: 32796 KB, 시간: 268 ms 분류 구현(implementation), 문자열(string) 문제 설명 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다. 입력 첫째 줄에 알파벳 대소문자로 이루어진 단어가...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1157/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1018번] 체스판 다시 칠하기",
        "excerpt":"1. 문제 [Silver V] 체스판 다시 칠하기 - 1018 문제 링크 성능 요약 메모리: 30840 KB, 시간: 116 ms 분류 브루트포스 알고리즘(bruteforcing) 문제 설명 지민이는 자신의 저택에서 MN개의 단위 정사각형으로 나누어져 있는 M×N 크기의 보드를 찾았다. 어떤 정사각형은 검은색으로 칠해져 있고, 나머지는 흰색으로 칠해져 있다. 지민이는 이 보드를 잘라서 8×8...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Silver"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1018/",
        "teaser": null
      },{
        "title": "[파이썬][백준 15631번] BOJeopardy",
        "excerpt":"1. 문제 [Unrated] BOJeopardy - 15631 문제 링크 성능 요약 메모리: 4528 KB, 시간: 0 ms 분류 Empty 문제 설명 ????에 들어갈 말은 무엇인가? 답은 숫자와 소문자 영어 알파벳으로만 작성하고, 띄어쓰기나 é 등의 악센트가 있으면 제거해야 한다. 같은 답을 여러 형태로 출력할 수 있으면 (예를 들어 obama, barackobama, barackhusseinobamaii 등)...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Unrated"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/15631/",
        "teaser": null
      },{
        "title": "[파이썬][백준 15639번] Rick",
        "excerpt":"1. 문제 [Unrated] Rick - 15639 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 구현(implementation), 문자열(string) 문제 설명 릭이 하지 않는 행동은 무엇일까? 입력 한 줄로 행동이 주어진다. 알파벳과 띄어쓰기로만 이루어져 있다. 첫 단어 이전과 마지막 단어 이후에 띄어쓰기는 없으며, 단어 사이에는 하나의 띄어쓰기만 들어간다. 입력의 길이는...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Unrated"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/15639/",
        "teaser": null
      },{
        "title": "[파이썬][백준 15641번] SUPER SUPER BINARY SEARCH DELUXE 2.5: THE LEGEND OF THE GOLDEN MAZASSUMNIDA, EPISODE 2: THE MAZWAETL UNIVERSE, PART 2: THE PARALLEL UNIVERSE AND THE LOST MAZASSUMNIDA: GAME OF THE YEAR EDITION",
        "excerpt":"1. 문제 [Unrated] SUPER SUPER BINARY SEARCH DELUXE 2.5: THE LEGEND OF THE GOLDEN MAZASSUMNIDA, EPISODE 2: THE MAZWAETL UNIVERSE, PART 2: THE PARALLEL UNIVERSE AND THE LOST MAZASSUMNIDA: GAME OF THE YEAR EDITION - 15641 문제 링크 성능 요약 메모리: 4528 KB, 시간: 0 ms 분류 이분 탐색(binary_search), 브루트포스...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Unrated"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/15641/",
        "teaser": null
      },{
        "title": "[파이썬][백준 15643번] Yee",
        "excerpt":"1. 문제 [Unrated] Yee - 15643 문제 링크 성능 요약 메모리: 4528 KB, 시간: 0 ms 분류 구현(implementation) 문제 설명 Ba ba ba ba, ba, ba ba, baa, ba ba Ba ba ba ba, ba, ba ba Yee Ba ba ba ba, ba, ba ba, baa, ba ba Ba ba...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Unrated"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/15643/",
        "teaser": null
      },{
        "title": "[파이썬][백준 11050번] 이항 계수 1",
        "excerpt":"1. 문제 [Bronze I] 이항 계수 1 - 11050 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 조합론(combinatorics), 구현(implementation), 수학(math) 문제 설명 자연수 N\\(N\\)과 정수 K\\(K\\)가 주어졌을 때 이항 계수 (NK)\\(\\binom{N}{K}\\)를 구하는 프로그램을 작성하시오. 입력 첫째 줄에 N\\(N\\)과 K\\(K\\)가 주어진다. (1 ≤ N\\(N\\) ≤ 10, 0 ≤...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/11050/",
        "teaser": null
      },{
        "title": "[파이썬][백준 15629번] Africa",
        "excerpt":"1. 문제 [Bronze I] Africa - 15629 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 구현(implementation) 문제 설명 라이언의 고향은 아프리카의 어느 섬이라고 한다. 사자의 서식지는 주로 아프리카의 초원지대로 알려져 있는데, 아쉽게도 아프리카의 섬 중 사자의 서식지 또는 과거에 사자가 서식했던 지역은 없기 때문에 라이언의 고향이 섬이라는...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/15629/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1032번] 명령 프로모트",
        "excerpt":"1. 문제 [Bronze I] 명령 프롬프트 - 1032 문제 링크 성능 요약 메모리: 30840 KB, 시간: 72 ms 분류 구현(implementation), 문자열(string) 문제 설명 시작 -&gt; 실행 -&gt; cmd를 쳐보자. 검정 화면이 눈에 보인다. 여기서 dir이라고 치면 그 디렉토리에 있는 서브디렉토리와 파일이 모두 나온다. 이때 원하는 파일을 찾으려면 다음과 같이 하면...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1032/",
        "teaser": null
      },{
        "title": "[파이썬][백준 4104번] 크냐?",
        "excerpt":"1. 문제 [Bronze III] 크냐? - 4101 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 두 양의 정수가 주어졌을 때, 첫 번째 수가 두 번째 수보다 큰지 구하는 프로그램을 작성하시오. 입력 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스는 한...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/4101/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10039번] 평균 점수",
        "excerpt":"[Bronze IV] 평균 점수 - 10039 문제 링크 성능 요약 메모리: 30840 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 상현이가 가르치는 아이폰 앱 개발 수업의 수강생은 원섭, 세희, 상근, 숭, 강수이다. 어제 이 수업의 기말고사가 있었고, 상현이는 지금 학생들의 기말고사 시험지를 채점하고 있다. 기말고사 점수가 40점 이상인 학생들은...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10039/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2935번] 소음",
        "excerpt":"1. 문제 [Bronze III] 소음 - 2935 문제 링크 성능 요약 메모리: 30840 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math), 문자열(string) 문제 설명 수업 시간에 떠드는 두 학생이 있다. 두 학생은 수업에 집중하는 대신에 글로벌 경제 위기에 대해서 토론하고 있었다. 토론이 점점 과열되면서 두 학생은 목소리를 높였고, 결국 선생님은 크게...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2935/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10103번] 주사위 게임",
        "excerpt":"1. 문제 [Bronze III] 주사위 게임 - 10103 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math), 시뮬레이션(simulation) 문제 설명 창영이와 상덕이는 게임을 하고 있다. 게임을 시작하는 시점에서, 두 사람의 점수는 모두 100점이다. 게임은 여섯 면 주사위를 사용하며, 라운드로 진행된다. 매 라운드마다, 각 사람은 주사위를...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10103/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10214번] Baseball",
        "excerpt":"1. 문제 [Bronze III] Baseball - 10214 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 구현(implementation) 문제 설명 경근이는 수업 과제의 일환으로 연세대학교의 역사를 조사하고 있었다. 케케묵은 도서관 구석에서 경근이가 발견한 것은 역대 연고전의 야구경기 실황 기록문서였다. 하지만 문서를 가지고 있음에도 불구하고 한 눈에 당시의 경기 승패를...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10214/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10886번] 0 = not cute / 1 = cute",
        "excerpt":"1. 문제 [Bronze III] 0 = not cute / 1 = cute - 10886 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(N) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘 및 해설...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10886/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10988번] 팰린드롬인지 확인하기",
        "excerpt":"1. 문제 [Bronze I] 팰린드롬인지 확인하기 - 10988 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 구현(implementation), 문자열(string) 문제 설명 알파벳 소문자로만 이루어진 단어가 주어진다. 이때, 이 단어가 팰린드롬인지 아닌지 확인하는 프로그램을 작성하시오. 팰린드롬이란 앞으로 읽을 때와 거꾸로 읽을 때 똑같은 단어를 말한다. level, noon은 팰린드롬이고, baekjoon,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10988/",
        "teaser": null
      },{
        "title": "[파이썬][백준 11557번] Yangjojang of The Year",
        "excerpt":"1. 문제 [Bronze I] Yangjojang of The Year - 11557 문제 링크 성능 요약 메모리: 30840 KB, 시간: 64 ms 분류 구현(implementation), 정렬(sorting) 문제 설명 입학 OT때 누구보다도 남다르게 놀았던 당신은 자연스럽게 1학년 과대를 역임하게 되었다. 타교와의 조인트 엠티를 기획하려는 당신은 근처에 있는 학교 중 어느 학교가 술을 가장 많이...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/11557/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2754번] 학점계산",
        "excerpt":"1. 문제   [Bronze II] 학점계산 - 2754   문제 링크   성능 요약   메모리: 30840 KB, 시간: 68 ms   분류   구현(implementation), 문자열(string)      출처: 백준, https://https://www.acmicpc.net/    2. 해결방법 시간복잡도     단순 코딩 O(1)   3. 문제 해결 및 코드              주석을 참고하면서 이해를 돕습니다.       4. 알고리즘 및 해설      딕셔너리를 만들어서 해당 학점에 해당하는 점수를 출력해준다.  ","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2754/",
        "teaser": null
      },{
        "title": "[파이썬][백준 4562번] No Brainer",
        "excerpt":"1. 문제 [Bronze III] No Brainer - 4562 문제 링크 성능 요약 메모리: 30840 KB, 시간: 64 ms 분류 구현(implementation) 문제 설명 Zombies love to eat brains. Yum. 입력 The first line contains a single integer n indicating the number of data sets. The following n lines each represent a...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/4562/",
        "teaser": null
      },{
        "title": "[파이썬][백준 7567번] 그릇",
        "excerpt":"1. 문제 [Bronze II] 그릇 - 7567 문제 링크 성능 요약 메모리: 30840 KB, 시간: 72 ms 분류 구현(implementation), 문자열(string) 문제 설명 그릇을 바닥에 놓았을 때 그 높이는 10cm 이다. 그런데 두 개의 그릇을 같은 방향으로 포개면 그 높이는 5cm만 증가된다. 만일 그릇이 서로 반대방향으로 쌓이면 높이는 그릇만큼, 즉 10cm...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/7567/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10102번] 개표",
        "excerpt":"1. 문제 [Bronze II] 개표 - 10102 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 문자열(string) 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘 및 해설 받아야 될 값은 T로 받는다. AB라는 값을 문자열로 받고 해당...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10102/",
        "teaser": null
      },{
        "title": "[파이썬][백준 6749번] Next in line",
        "excerpt":"1. 문제 [Bronze V] Next in line - 6749 문제 링크 성능 요약 메모리: 30860 KB, 시간: 76 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 You know a family with three children. Their ages form an arithmetic sequence: the difference in ages between the middle child and youngest child is the...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/6749/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10103번] 과제",
        "excerpt":"1. 문제 [Bronze IV] 과자 - 10156 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 동수는 제과점에 과자를 사러 가는데 현재 가진 돈이 모자랄 경우 부모님께 모자란 돈을 받으려고 한다. 과자 한 개의 가격이 K, 사려고 하는 과자의 개수가 N이고, 현재 가진 돈의...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10156/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2476번] 주사위 게임",
        "excerpt":"1. 문제 [Bronze III] 주사위 게임 - 2476 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 구현(implementation), 수학(math) 문제 설명 1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다. 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 같은 눈이 2개만...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2476/",
        "teaser": null
      },{
        "title": "[파이썬][백준 5063번] TGN",
        "excerpt":"1. 문제 [Bronze III] TGN - 5063 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 상근이는 TGN사의 사장이다. TGN은 Teenager Game Network의 약자 같지만, 사실 Temporary Group Name의 약자이다. 이 회사는 청소년을 위한 앱을 만드는 회사이다. 일년에 걸친 개발기간 끝에 드디어 앱을 완성했고,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/5063/",
        "teaser": null
      },{
        "title": "[파이썬][백준 5717번] 상근이의 친구들",
        "excerpt":"1. 문제 [Bronze III] 상근이의 친구들 - 5717 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 수학(math) 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(N) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘 및 해설 while문을 통해 입력받은 두 값이 0인 경우를...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/5717/",
        "teaser": null
      },{
        "title": "[파이썬][백준 9506번] 약수들의 합",
        "excerpt":"1. 문제 [Bronze I] 약수들의 합 - 9506 문제 링크 성능 요약 메모리: 30840 KB, 시간: 96 ms 분류 수학(math), 정수론(number_theory), 런타임 전의 전처리(precomputation) 문제 설명 어떤 숫자 n이 자신을 제외한 모든 약수들의 합과 같으면, 그 수를 완전수라고 한다. 예를 들어 6은 6 = 1 + 2 + 3 으로...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/9506/",
        "teaser": null
      },{
        "title": "[파이썬][백준 9610번] 사분면",
        "excerpt":"1. 문제 [Bronze III] 사분면 - 9610 문제 링크 성능 요약 메모리: 30840 KB, 시간: 64 ms 분류 구현(implementation), 수학(math) 문제 설명 2차원 좌표 상의 여러 점의 좌표 (x,y)가 주어졌을 때, 각 사분면과 축에 점이 몇 개 있는지 구하는 프로그램을 작성하시오. 입력 첫째 줄에 점의 개수 n (1 ≤ n...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/9610/",
        "teaser": null
      },{
        "title": "[파이썬][백준 22966번] 가장 쉬운 문제를 찾는 문제",
        "excerpt":"1. 문제 [Bronze II] 가장 쉬운 문제를 찾는 문제 - 22966 문제 링크 성능 요약 메모리: 30840 KB, 시간: 72 ms 분류 구현(implementation) 문제 설명 예선 문제를 성실하게 복습한 학생들이라면 예선에 출제된 5문제가 난이도 순서대로 정렬되어 있다는 것을 알아차렸을 것이다. 하지만 본선은 문제 제목에 대해 사전순으로 정렬했기 때문에 난이도 순서대로...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/22966/",
        "teaser": null
      },{
        "title": "[파이썬][백준 22938번] 백발백준하는 명사수",
        "excerpt":"1. 문제 [Bronze III] 백발백준하는 명사수 - 22938 문제 링크 성능 요약 메모리: 32952 KB, 시간: 68 ms 분류 기하학(geometry), 수학(math), 피타고라스 정리(pythagoras) 문제 설명 백발백준은 무슨 과녁이던 백발백중하여 올림픽 금메달보다 따기 어렵다는 대한민국 양궁 국가대표 타이틀을 가지고 있다. 이런 백발백준이 현재 연마하는 스킬이 있는데... 바로 두 과녁을 한번에 맞추는...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/22938/",
        "teaser": null
      },{
        "title": "[파이썬][백준 23037번] 5의 수난",
        "excerpt":"1. 문제 [Bronze III] 5의 수난 - 23037 문제 링크 성능 요약 메모리: 30840 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(N) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘 및 해설 입력값을 정수형으로 받은 뒤 다시 문자열로 받는다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/23037/",
        "teaser": null
      },{
        "title": "[파이썬][백준 23795번] 사장님 도박은 재미로 하셔야 합니다",
        "excerpt":"1. 문제 [Bronze III] 사장님 도박은 재미로 하셔야 합니다 - 23795 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 영국에는 스티븐 제라드라는 전설의 야바위꾼이 있다. 영국으로 여행을 떠난 윤성이는 스티븐 제라드를 만나게 되었다. 이 전설의 야바위꾼이 진행하는 야바위는 널리 알려진 방식과 동일하다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/23795/",
        "teaser": null
      },{
        "title": "[파이썬][백준 23825번] SASA 모형을 만들어보자",
        "excerpt":"1. 문제 [Bronze IV] SASA 모형을 만들어보자 - 23825 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 수학(math) 문제 설명 당신은 SASA 연못에서 알파벳 S 모양의 블록 N$N$개와 알파벳 A 모양의 블록 M$M$개를 건졌다. 태영이는 연못에서 건진 블록을 이용해 학교에 전시할 SASA 모형을 최대한 많이 만들려고 한다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/23825/",
        "teaser": null
      },{
        "title": "django를 시작해보자",
        "excerpt":"장고와 AWS 설치하기 프로젝트 배포를 위해 Django와 AWS를 공부해보았다. 사용하기 위한 환경 구현 프로젝트에 사용할 환경변수 설정 (필자는 conda를 활용) conda create —name test python=3.8 (파이썬은 3.8을 사용) Django 라이브러리 설치 pip install django 프로젝트 만들기 배포할 프로젝트 만들기 django-admin startproject test 프로젝트에 앱 만들기 cd test python manage.py startapp...","categories": ["장고"],
        "tags": ["장고","aws"],
        "url": "/%EC%9E%A5%EA%B3%A0/Django-&-AWS/",
        "teaser": null
      },{
        "title": "깃 명렁어",
        "excerpt":"Document Manager from Hell {git, github} $ git 깃 명령어 확인 $ git config 깃 사용자 정보 설정 $ git config —global [user.name](http://user.name) 깃 이름 확인 $ git config —global [user.email](http://user.email) 깃 이메일 확인 $ git config —global core.editor “notepad++” 깃의 기본 편집기를 Notepad++ 로 변경 $ git init initialize의...","categories": ["깃"],
        "tags": ["깃허브","깃"],
        "url": "/%EA%B9%83/Document-Manager-from-Hell-git,-github/",
        "teaser": null
      },{
        "title": "[파이썬][백준 15680번] 연세대학교",
        "excerpt":"1. 문제 [Bronze IV] 연세대학교 - 15680 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 구현(implementation) 문제 설명 연세대학교의 영문명은 YONSEI, 슬로건은 Leading the Way to the Future이다. 이를 출력하는 프로그램을 작성해보도록 하자. 입력 첫째 줄에 N이 주어진다. (N = 0 또는 1) 출력 N = 0일...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/15680/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1110번] 더하기 사이클",
        "excerpt":"1. 문제 [Bronze I] 더하기 사이클 - 1110 문제 링크 성능 요약 메모리: 30864 KB, 시간: 72 ms 분류 구현(implementation), 수학(math) 문제 설명 0보다 크거나 같고, 99보다 작거나 같은 정수가 주어질 때 다음과 같은 연산을 할 수 있다. 먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1110/",
        "teaser": null
      },{
        "title": "[파이썬][백준 9316번] Hello Judge",
        "excerpt":"1. 문제 [Bronze III] Hello Judge - 9316 문제 링크 성능 요약 메모리: 30840 KB, 시간: 64 ms 분류 구현(implementation) 문제 설명 당신은 N개의 테스트케이스들에게 반드시 인사를 해야 이 문제를 풀 수 있다. N개의 줄에 걸쳐 \"Hello World, Judge i!\" 를 출력하는 프로그램을 만들라. 여기서 i는 줄의 번호이다. 입력 N이...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/9316/",
        "teaser": null
      },{
        "title": "[파이썬][백준 6810번] ISBN",
        "excerpt":"1. 문제 [Bronze IV] ISBN - 6810 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 출처: 백준, https://https://www.acmicpc.net/ 2. 해결방법 시간복잡도 단순 코딩 O(1) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘 및 해설 문제에서 제시한 조건에 맞게 계산한 뒤 출력해준다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/6810/",
        "teaser": null
      },{
        "title": "[파이썬][백준 7891번] Can you add this?",
        "excerpt":"1. 문제 [Bronze III] Can you add this? - 7891 문제 링크 성능 요약 메모리: 30840 KB, 시간: 76 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 Given two integers, calculate and output their sum. 입력 The input contains several test cases. The first line contains and integer t (t ≤...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/7891/",
        "teaser": null
      },{
        "title": "[파이썬][백준 9713번] Sum of Odd Sequence",
        "excerpt":"1. 문제 [Bronze III] Sum of Odd Sequence - 9713 문제 링크 성능 요약 메모리: 30840 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 Given an odd integer N, calculate the sum of all the odd integers between 1 and N inclusive. 입력 First line of the input contains...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/9713/",
        "teaser": null
      },{
        "title": "Seoul meet up",
        "excerpt":"서울 밋업 한국에서 열리는 거의 첫번째 밋업이라고 들었다. 키보드에 관심을 가지고 나서 참석하게 어떻게 참석을 하게 되었는데 두근거리는 마음을 붙잡고 행사장에 도착하였다. 해당 밋업에 참가한 기업은 Geon Works, Linworks, Split.Labs, Namong, Della, Sandun, Cannonkeys, KLC 등등 키보드 업계에서 이름 날리는 곳들이 대거 참가하였다. 아티산 도착과 동시 보게된 히맨의 자태,, 아티산이지만...","categories": ["일상"],
        "tags": ["일상","밋업","키보드"],
        "url": "/%EC%9D%BC%EC%83%81/%ED%82%A4%EB%B3%B4%EB%93%9C-%EB%B0%8B%EC%97%85/",
        "teaser": null
      },{
        "title": "[파이썬][백준 10093번] 숫자",
        "excerpt":"1. 문제 [Bronze II] 숫자 - 10093 문제 링크 성능 요약 메모리: 30840 KB, 시간: 128 ms 분류 구현(implementation) 문제 설명 두 양의 정수가 주어졌을 때, 두 수 사이에 있는 정수를 모두 출력하는 프로그램을 작성하시오. 입력 두 정수 A와 B가 주어진다. 출력 첫째 줄에 두 수 사이에 있는 수의 개수를...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/10093/",
        "teaser": null
      },{
        "title": "[파이썬][백준 20499번] Darius님 한타 안 함 ?",
        "excerpt":"1. 문제 [Bronze IV] Darius님 한타 안 함? - 20499 문제 링크 성능 요약 메모리: 30840 KB, 시간: 76 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 아무래도 우리 팀 다리우스가 고수인 것 같다. 그의 K/D/A$K/D/A$를 보고 그가 「진짜」인지 판별해 보자.  K+A&lt;D$K+A &lt; D$이거나, D=0$D = 0$이면 그는 「가짜」이고, 그렇지 않으면 「진짜」이다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/20499/",
        "teaser": null
      },{
        "title": "[파이썬][백준 11104번] Fridge of Your Dreams",
        "excerpt":"1. 문제 [Bronze I] Fridge of Your Dreams - 11104 문제 링크 성능 요약 메모리: 30840 KB, 시간: 144 ms 분류 구현(implementation), 수학(math) 문제 설명 Eirik drinks a lot of Bingo Cola to help him program faster, and over the years he has burned many unnecessary calories walking all the...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/11104/",
        "teaser": null
      },{
        "title": "[파이썬][백준 1408번] 24",
        "excerpt":"1. 문제 [Bronze II] 24 - 1408 문제 링크 성능 요약 메모리: 30840 KB, 시간: 72 ms 분류 사칙연산(arithmetic), 구현(implementation), 수학(math) 문제 설명 도현이는 Counter Terror Unit (CTU)에서 일하는 특수요원이다. 도현이는 모든 사건을 정확하게 24시간이 되는 순간 해결하는 것으로 유명하다. 도현이는 1시간 만에 범인을 잡을 수 있어도 잡지 않는다. 정확하게...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1408/",
        "teaser": null
      },{
        "title": "[파이썬][백준 2440번] 별 찍기 - 3",
        "excerpt":"1. 문제 [Bronze III] 별 찍기 - 3 - 2440 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 구현(implementation) 문제 설명 첫째 줄에는 별 N개, 둘째 줄에는 별 N-1개, ..., N번째 줄에는 별 1개를 찍는 문제 입력 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다. 출력 첫째...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2440/",
        "teaser": null
      },{
        "title": "기계식 키보드란",
        "excerpt":"기계식 키보드란? 이 사진은 내 기계식 키보드이다. 기계식 키보드가 되기 위한 조건 우리가 흔히 말하는 ‘기계식’ 키보드는 3가지 조건을 달성하면 우리가 흔히 아는 기계식이 된다. 축전식이 아닌 것 분리되어 있던 금속 접점이 서로 접촉하며 키가 입력되는 방식일 것 금속 접점이 분리할 수 있는 스위치 내부에 존재할 것 좀 더 쉽게...","categories": ["키보드"],
        "tags": ["키보드"],
        "url": "/%ED%82%A4%EB%B3%B4%EB%93%9C/%EA%B8%B0%EA%B3%84%EC%8B%9D%ED%82%A4%EB%B3%B4%EB%93%9C%EB%9E%80/",
        "teaser": null
      },{
        "title": "프랑켄 스위치란",
        "excerpt":"프랑켄 스위치란? 서로 다른 스위치를 합쳐서 만드는 방식으로 기존의 스위치의 단점을 보완하거나 장점을 부각시키는 방법에서 고안되었다. 가장 유명한 프랑켄 스위치는 Holy panda가 있다. 홀리판다라고 불리는 스위치로 카일의 Halo 스위치와 Invir Panda 스위치를 합쳐서 만드는 것으로 현재는 구하기 굉장히 어려운 스위치이다. 이후 카피작들이 많이 나오고 있으며, 인비르사에서 V2를 내놓긴했으나 기존의 구...","categories": ["키보드"],
        "tags": ["키보드"],
        "url": "/%ED%82%A4%EB%B3%B4%EB%93%9C/%ED%94%84%EB%9E%91%EC%BC%84-%EC%8A%A4%EC%9C%84%EC%B9%98%EB%9E%80/",
        "teaser": null
      },{
        "title": "[파이썬][백준 15700번] 타일 채우기 4",
        "excerpt":"1. 문제 [Bronze IV] 타일 채우기 4 - 15700 문제 링크 성능 요약 메모리: 30840 KB, 시간: 68 ms 분류 사칙연산(arithmetic), 수학(math) 문제 설명 N×M 크기의 벽에 2×1, 1×2 크기의 타일을 채우려고 한다. 겹치지 않게 놓는다면, 최대 몇 개를 채울 수 있을까? 입력 첫째 줄에 N과 M이 주어진다. (1 ≤...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","백준","Bronze"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/15700/",
        "teaser": null
      },{
        "title": "[파이썬][Leetcode][릿코드] squares of a sorted array",
        "excerpt":"1. 문제 1. Two Sum Easy Given an array of integers nums&nbsp;and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Leetcode","릿코드"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1/",
        "teaser": null
      },{
        "title": "[파이썬][Leetcode][릿코드] 3Sum",
        "excerpt":"1. 문제 15. 3Sum Medium Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets. &nbsp; Example 1:...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Leetcode","릿코드"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/15/",
        "teaser": null
      },{
        "title": "[파이썬][Leetcode][릿코드] find numbers with even number of digits",
        "excerpt":"1. 문제  Find Numbers with Even Number of Digits Given an array nums of integers, return how many of them contain an even number of digits. &nbsp; Example 1: Input: nums = [12,345,2,6,7896] Output: 2 Explanation: 12 contains 2 digits (even number of digits).&nbsp; 345 contains 3 digits (odd number...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Leetcode","릿코드"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/find-numbers-with-even-number-of-digits/",
        "teaser": null
      },{
        "title": "[파이썬][Leetcode][릿코드] max consecutive ones",
        "excerpt":"1. 문제  Max Consecutive Ones Given a binary array nums, return the maximum number of consecutive 1's in the array. &nbsp; Example 1: Input: nums = [1,1,0,1,1,1] Output: 3 Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Leetcode","릿코드"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/max-consecutive-ones/",
        "teaser": null
      },{
        "title": "[파이썬][Leetcode][릿코드] squares of a sorted array",
        "excerpt":"1. 문제  Squares of a Sorted Array Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order. &nbsp; Example 1: Input: nums = [-4,-1,0,3,10] Output: [0,1,9,16,100] Explanation: After squaring, the array becomes [16,1,0,9,100]. After sorting, it becomes [0,1,9,16,100]....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Leetcode","릿코드"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/squares-of-a-sorted-array/",
        "teaser": null
      },{
        "title": "처음으로 면접을 보았다.",
        "excerpt":"너무 오랜만에 입어보는 정장 🤵🏻‍♂️ 1. 고민하고 고민하다. 거의 방치하다싶이 학생들을 가르키는 부트캠프를 끝마치면서 처음으로 회사를 지원하게 되었다. 내가 이 회사에 이끌리면서 지원하게 된 계기는 이커머스 회사라는 점과 이커머스 회사치곤 보기 드문 D-C라는 점 그리고 훌륭한 리더가 있는 곳이 너무 맘에 들어 많이 아쉬운 스펙이지만 고민하고 고민하다가 지원하게 되었다. 2....","categories": ["일상"],
        "tags": ["일상","면접"],
        "url": "/%EC%9D%BC%EC%83%81/%EC%B2%AB-%EB%A9%B4%EC%A0%91/",
        "teaser": null
      },{
        "title": "화이트 보드",
        "excerpt":"화이트 보드 나는 화이트보드를 샀다. 무엇이든 내가 이루고자 하는 것이 있으면 그것에 필요한 물건에는 약간의 고민과 많은 추진력이 필요하다고 생각한다. 어제의 내가 풀지 못하였던 문제들은 나의 작은 습관 (컴퓨터에 안도하고 모르는 문제를 스스로 해결하지 않으려는 나쁜 버릇)이 문제 해결을 방해하였다고 생각한다. 그렇기에 오늘부로 문제 알고리즘별 문제 몇개를 선별해서 화이트보드로 푸는...","categories": ["일상"],
        "tags": ["일상","면접","라이브코딩"],
        "url": "/%EC%9D%BC%EC%83%81/%EB%B8%94%EB%A1%9C%EA%B7%B8%EB%A5%BC-%EB%8B%A4%EC%8B%9C-%EC%8B%9C%EC%9E%91%ED%95%98%EB%A9%B0/",
        "teaser": null
      },{
        "title": "[파이썬][Leetcode][릿코드] Palindrome Number",
        "excerpt":"1. 문제 9. Palindrome Number Easy Given an integer x, return true if x is palindrome integer. An integer is a palindrome when it reads the same backward as forward. For example, 121 is a palindrome while 123 is not. &nbsp; Example 1: Input: x = 121 Output: true Explanation:...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Leetcode","릿코드"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/9/",
        "teaser": null
      },{
        "title": "[파이썬][Leetcode][릿코드] number of different integers in a string",
        "excerpt":"1. 문제 1805. Number of Different Integers in a String Easy You are given a string word that consists of digits and lowercase English letters. You will replace every non-digit character with a space. For example, \"a123bc34d8ef34\" will become \" 123&nbsp; 34 8&nbsp; 34\". Notice that you are left with...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Leetcode","릿코드"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1805/",
        "teaser": null
      },{
        "title": "라이브 코딩",
        "excerpt":"1. 문제 리스트 길이가 긴 리스트에서 내가 찾아야할 값이 존재하는 위치 찾기 2. 해결방법 및 시간복잡도 브루트포스 O(N) 이진탐색 O(logN) index 라이브러리 O(1) bisect 라이브러리 O(logN) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘 간략 설명 브루트포스 알고리즘 문제의 뜻 그래도 단순하게 “난폭한 힘” 이다. 단순 무식하게...","categories": ["알고리즘"],
        "tags": ["알고리즘","라이브코딩","코테"],
        "url": "/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98/%EB%9D%BC%EC%9D%B4%EB%B8%8C%EC%BD%94%EB%94%A9-%ED%9B%84%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[파이썬][Leetcode][릿코드] Merge Sorted Array",
        "excerpt":"1. 문제 88. Merge Sorted Array Easy You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order. The final...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Leetcode","릿코드"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/88/",
        "teaser": null
      },{
        "title": "[파이썬][Leetcode][릿코드] Perfect Number",
        "excerpt":"1. 문제 507. Perfect Number Easy A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly. Given an integer n, return true if n is...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Leetcode","릿코드"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/507/",
        "teaser": null
      },{
        "title": "[파이썬][Leetcode][릿코드] build array from permutation",
        "excerpt":"1. 문제 1920. Build Array from Permutation Easy Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 &lt;= i &lt; nums.length and return it. A zero-based permutation nums is an array of distinct integers from 0 to nums.length...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Leetcode","릿코드"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1920/",
        "teaser": null
      },{
        "title": "[파이썬][Leetcode][릿코드] Valid Parentheses",
        "excerpt":"1. 문제 20. Valid Parentheses Easy Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Leetcode","릿코드"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/20/",
        "teaser": null
      },{
        "title": "[파이썬][Leetcode][릿코드] Final Value of Variable After Performing Operations",
        "excerpt":"1. 문제 2011. Final Value of Variable After Performing Operations Easy There is a programming language with only four operations and one variable X: ++X and X++ increments the value of the variable X by 1. --X and X-- decrements the value of the variable X by 1. Initially, the...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Leetcode","릿코드"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/2011/",
        "teaser": null
      },{
        "title": "DP로 해결하기",
        "excerpt":"1. 문제 자신이 속한 열을 제외한 값중 가장 큰 값을 중복으로 더하여 최종 행의 가장 큰 값을 호출하기 2. 해결방법 시간복잡도 DP O(N^2) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘 간략 설명 DP 동적 계획법이라고 불리는 문제로 1회용 알고리즘이다. 최소한의 계산방식으로 문제를 해결하기 때문에 시간을 최소화할...","categories": ["알고리즘"],
        "tags": ["알고리즘","라이브코딩","코테"],
        "url": "/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98/DP%EB%A1%9C-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "탐욕 알고리즘 복습하기",
        "excerpt":"1. 문제 탐욕 알고리즘으로 가장 대표적인 거스름돈 문제 해결하기 손님에게 거스름돈으로 줄 수 있는 최소한의 동전 개수 구하기 2. 해결방법 시간복잡도 탐욕 알고리즘 O(N) 3. 문제 해결 및 코드 주석을 참고하면서 이해를 돕습니다. 4. 알고리즘 간략 설명 탐욕 알고리즘 대게 탐욕 알고리즘 2가지 조건에 의해 잘 작동하게 된다. 선택 조건...","categories": ["알고리즘"],
        "tags": ["알고리즘","라이브코딩","코테"],
        "url": "/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98/%ED%83%90%EC%9A%95-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%B3%B5%EC%8A%B5%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 신고 결과 받기",
        "excerpt":"1. 문제 [level 1] 신고 결과 받기 - 92334 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.01 ms 구분 코딩테스트 연습 &gt; 2022 KAKAO BLIND RECRUITMENT 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 문제 설명 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/92334/",
        "teaser": null
      },{
        "title": "갑작스러운 소나기",
        "excerpt":"소나기 ☔️ 뭔가 집이 되게 낡아보이는 것 같다. 내가 수도권으로 올라오면서 처음 느낀 점은 집값이 너무 비싸다. 욕심을 내서 쓰리룸에 1억 2천에 운 좋게 들어갔는데 외관은 너무 빈티지하다. 🤣 너무 추워 오늘은 이른 아침부터 일어나서 분주하게 하루를 맞이했다. 뜨거운 여름에는 항상 선풍기와 함께 잠을 청하고는 하는데 비로 인해 차가워진 공기와...","categories": ["일상"],
        "tags": ["일상"],
        "url": "/%EC%9D%BC%EC%83%81/%EA%B0%91%EC%9E%91%EC%8A%A4%EB%9F%AC%EC%9A%B4-%EC%86%8C%EB%82%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "하루라는 금",
        "excerpt":"돌아보면서 가끔 그런 생각에 빠져드는 날이 있다. ‘오늘 아무것도 하기 싫다’, ‘내일부터 하지 뭐’라는 생각이 나의 머리를 지배하는 날들 그런 날들이 나에게 계속해서 쌓여만 가던 와중 블로그를 시작하게 되었고, 책을 읽게 되고 거울속의 내 모습을 긴 시간동안 바라보았다. ‘과연 나는 내가 어릴 적 꿈꿔오던 지금 나이의 모습이랑 같은가’ 머릿속에 그런...","categories": ["하루"],
        "tags": ["유통기한 하루","성장","습관"],
        "url": "/%ED%95%98%EB%A3%A8/%ED%95%98%EB%A3%A8%EC%9D%98-%EC%8B%9C%EC%9E%91/",
        "teaser": null
      },{
        "title": "노션의 글을 옮기며",
        "excerpt":"혼자만의 공부 공간 📜 혼자 공부하는 공간이라 나만 알아볼 수 있게 정리해놨다. 👀 위에 보이는 것 이외에도 페이지가 너무 많아서 조만간 더 정리할 생각이다 (아이디어 노트같이 카테고리를 정하기 애매한 것들이 많다 ㅠ) 나는 처음 코딩을 배울 때 아는 지인으로부터 공부한 걸 기록하는 습관이 중요하다고 배웠다. 중고등학교 시절부터 무언가 배운 것이...","categories": ["일상"],
        "tags": ["일상"],
        "url": "/%EC%9D%BC%EC%83%81/%EB%85%B8%EC%85%98%EC%9D%98-%EA%B8%80%EB%93%A4%EC%9D%84-%EC%98%AE%EA%B8%B0%EB%A9%B0/",
        "teaser": null
      },{
        "title": "움직여라",
        "excerpt":"따뜻한 햇살 아래 포근한 침대 요새 너무 게을러버린 나는 9시에 일어난다. 그리고 오늘 해야할 일을 간략하게 적고 하다가 금방 낮잠에 들고 만다. 따뜻한 햇살이랑 누구도 건들지 않는 평일의 침대는 그 누구도 뿌리치기 힘든 유혹이다. 그런 유혹에 넘어가길 벌써 며칠째이다. 아침을 바꾸고 싶다는 마음에 동기부여영상을 보고 짐퀵이라는 브레인 코치의 말을 들으며...","categories": ["하루"],
        "tags": ["유통기한 하루","성장","습관"],
        "url": "/%ED%95%98%EB%A3%A8/%EC%9B%80%EC%A7%81%EC%97%AC%EB%9D%BC/",
        "teaser": null
      },{
        "title": "애어른",
        "excerpt":"어제는 누구보다 빠르게 달려갔고, 오늘은 누구보다 느리게 걸어간다. 어려서부터 독립성도 강하고 모든지 혼자 해결하려고 했다. 부모님 말로는 내가 애기때부터 숫자에 관심이 많아 산수가 빨랐다고 했다. 물건을 살때도 “엄마 이게 저거보다 양도 많은데 훨씬 싸” 하면서 비교하고 거스름돈도 착착 잘 챙겨와서 커서 걱정이 없을거라고 하셨다. 그래서 그런가 걱정을 안하시고 커서 남들보다...","categories": ["하루"],
        "tags": ["유통기한 하루","성장","습관"],
        "url": "/%ED%95%98%EB%A3%A8/%EC%95%A0%EC%96%B4%EB%A5%B8/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 폰켓몬",
        "excerpt":"1. 문제 [level 1] 폰켓몬 - 1845 문제 링크 성능 요약 메모리: 10.3 MB, 시간: 0.19 ms 구분 코딩테스트 연습 &gt; 찾아라 프로그래밍 마에스터 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 당신은 폰켓몬을 잡기 위한 오랜 여행 끝에, 홍 박사님의 연구실에 도착했습니다. 홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/1845/",
        "teaser": null
      },{
        "title": "[파이썬][Codility_][코디리티] BinaryGap",
        "excerpt":"1. 문제 A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N. For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Codility","코디리티","Lessons"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/BinaryGap/",
        "teaser": null
      },{
        "title": "[파이썬][Codility_][코디리티] CyclicRotation",
        "excerpt":"1. 문제 An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Codility","코디리티","Lessons"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/CyclicRotation/",
        "teaser": null
      },{
        "title": "[파이썬][Codility_][코디리티] FuryRoad",
        "excerpt":"0. 챌린지 소개 1. 문제 You have to be at your work as soon as possible. The road on your route to work may consist of two types of surface: asphalt or sand. To simplify the description, it will be denoted by a string R consisting only of the letters:...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Codility","코디리티","Codility Challenge"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/FuryRoad/",
        "teaser": null
      },{
        "title": "[파이썬][Codility_][코디리티] OddOccurrencesInArray",
        "excerpt":"1. 문제 A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired. For example, in array A...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Codility","코디리티","Lessons"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/OddOccurrencesInArray/",
        "teaser": null
      },{
        "title": "[파이썬][Codility_][코디리티] FrogJmp",
        "excerpt":"1. 문제 A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D. Count the minimal number of...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Codility","코디리티","Lessons"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/FrogJmp/",
        "teaser": null
      },{
        "title": "[파이썬][Codility_][코디리티] PermMissingElem",
        "excerpt":"1. 문제 Task description An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing. Your goal is to find that missing element. Write a function: def solution(A) that, given an array A,...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Codility","코디리티","Lessons"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/PermMissingElem/",
        "teaser": null
      },{
        "title": "[파이썬][Codility_][코디리티] TapeEquilibrium",
        "excerpt":"1. 문제 A non-empty array A consisting of N integers is given. Array A represents numbers on a tape. Any integer P, such that 0 &lt; P &lt; N, splits this tape into two non-empty parts: A[0], A[1], …, A[P − 1] and A[P], A[P + 1], …, A[N −...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Codility","코디리티","Lessons"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/TapeEquilibrium/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 크레인 인형뽑기 게임",
        "excerpt":"1. 문제 [level 1] 크레인 인형뽑기 게임 - 64061 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.71 ms 구분 코딩테스트 연습 &gt; 2019 카카오 개발자 겨울 인턴십 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 게임개발자인 \"죠르디\"는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다. \"죠르디\"는 게임의 재미를 높이기 위해 화면 구성과 규칙을 다음과...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/64061/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 로또의 최고 순위와 최저 순위",
        "excerpt":"1. 문제 [level 1] 로또의 최고 순위와 최저 순위 - 77484 문제 링크 성능 요약 메모리: 10.4 MB, 시간: 0.02 ms 구분 코딩테스트 연습 &gt; 2021 Dev－Matching： 웹 백엔드 개발자（상반기） 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 로또 6/45(이하 '로또'로 표기)는 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다. 아래는 로또의 순위를...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/77484/",
        "teaser": null
      },{
        "title": "[파이썬][Codility_][코디리티] FrogRiverOne",
        "excerpt":"1. 문제 A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river. You...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Codility","코디리티","Lessons"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/FrogRiverOne/",
        "teaser": null
      },{
        "title": "[파이썬][Codility_][코디리티] PermCheck",
        "excerpt":"1. 문제 A non-empty array A consisting of N integers is given. A permutation is a sequence containing each element from 1 to N once, and only once. For example, array A such that: A[0] = 4 A[1] = 1 A[2] = 3 A[3] = 2 is a permutation, but...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","Codility","코디리티","Lessons"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/PermCheck/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] [1차] 비밀지도",
        "excerpt":"1. 문제 [level 1] [1차] 비밀지도 - 17681 문제 링크 성능 요약 메모리: 10.4 MB, 시간: 0.03 ms 구분 코딩테스트 연습 &gt; 2018 KAKAO BLIND RECRUITMENT 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 비밀지도 네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/17681/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] [1차] 다트 게임",
        "excerpt":"1. 문제 [level 1] [1차] 다트 게임 - 17682 문제 링크 성능 요약 메모리: 10.3 MB, 시간: 0.03 ms 구분 코딩테스트 연습 &gt; 2018 KAKAO BLIND RECRUITMENT 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 다트 게임 카카오톡에 뜬 네 번째 별! 심심할 땐? 카카오톡 게임별~ 카카오톡 게임별의 하반기 신규 서비스로 다트 게임을...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/17682/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 실패율",
        "excerpt":"1. 문제 [level 1] 실패율 - 42889 문제 링크 성능 요약 메모리: 10.2 MB, 시간: 0.01 ms 구분 코딩테스트 연습 &gt; 2019 KAKAO BLIND RECRUITMENT 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 실패율 슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/42889/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 숫자 문자열과 영단어",
        "excerpt":"1. 문제 [level 1] 숫자 문자열과 영단어 - 81301 문제 링크 성능 요약 메모리: 10.3 MB, 시간: 0.02 ms 구분 코딩테스트 연습 &gt; 2021 카카오 채용연계형 인턴십 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래...","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_1"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/81301/",
        "teaser": null
      },{
        "title": "Gooroomee 구루밑업",
        "excerpt":"밋업 이거는 오늘 참여한 Gooroomee 밋업 세미나행사 나에게 행사란 아직 취업을 못해본 나에게 밋업 행사는 새로운 자극이다. 회사에 대한 열망, 궁금증에 대한 해소, 그리고 그들의 성장을 모두 느낄 수 있게 해준다. 그동안 코로나와 부트캠프 일정으로 바쁘게 지내며 오프라인 행사를 참여하지 못하다가 오랜만에 오프라인 행사에 참여하게 되었다. 구루미의 행사는 처음으로 참여하게...","categories": ["일상"],
        "tags": ["일상","밋업"],
        "url": "/%EC%9D%BC%EC%83%81/Gooroomee/",
        "teaser": null
      },{
        "title": "Django 공식문서 - 0",
        "excerpt":"[출처 : 장고 공식문서] 장고 공식문서의 가장 첫 페이지 🔥 **The web framework for perfectionists with deadlines. (마감에 쫓기는 완벽주의자를 위한 웹 프레임워크)** 장고는 웹 프로그램을 쉽고 빠르게 만들어주는 웹 프레임워크로 Flask보다 조금 더 견고하다고 생각이 든다. 참고로 장고는 2005년에 만들어져서 굉장히 오랜 시간 사랑을 받고 있는 웹 프레임워크이며, 많은...","categories": ["장고"],
        "tags": ["장고"],
        "url": "/%EC%9E%A5%EA%B3%A0/Django_learn_0/",
        "teaser": null
      },{
        "title": "Django 공식문서 - 1",
        "excerpt":"[출처 : 장고 공식문서] 장고의 기초 프로젝트 구조 django manage mysite settings.py urls.py wsgi.py init.py 장고에 대해 카테고리 모델 계층 웹 어플리케이션의 데이터를 구조화하고 조작하기 위한 모델을 제공한다. 뷰 계층 사용자의 요청을 처리하고 결과를 반환하기 위한 로직을 캡슐화한 “뷰”의 개념을 가지고 있다. 템플릿 계층 사용자에게 표시할 정보를 표현하기 위해 디자이너에게...","categories": ["장고"],
        "tags": ["장고"],
        "url": "/%EC%9E%A5%EA%B3%A0/Django_learn_1/",
        "teaser": null
      },{
        "title": "Django 공식문서 - 2",
        "excerpt":"[출처 : 장고 공식문서] 장고 흩어보기 1. Model from django.db import models class Reporter(models.Model): full_name = models.CharField(max_length=70) def __str__(self): return self.full_name class Article(models.Model): pub_date = models.DateField() headline = models.CharField(max_length=200) content = models.TextField() reporter = models.ForeignKey(Reporter, on_delete=models.CASCADE) def __str__(self): return self.headline 장고에는 모델을 사용할 수 있다. $ python manage.py makemigrations $...","categories": ["장고"],
        "tags": ["장고"],
        "url": "/%EC%9E%A5%EA%B3%A0/Django_learn_2/",
        "teaser": null
      },{
        "title": "Django 공식문서 - 3",
        "excerpt":"[출처 : 장고 공식문서]   파이썬 설치하기      파이썬 공식 홈페이지인 https://www.python.org/downloads/ 에서 설치하기를 바란다.   데이터베이스 설정하기      PostgreSQL, MariaDB, MySQL, Oracle과 같은 규모의 데이터베이스 엔진을 사용하여 작업할 때만 필요하다.   파이썬에 장고 확인하기   &gt;&gt;&gt; import django &gt;&gt;&gt; print(django.get_version()) 4.0  ","categories": ["장고"],
        "tags": ["장고"],
        "url": "/%EC%9E%A5%EA%B3%A0/Django_learn_3/",
        "teaser": null
      },{
        "title": "Django 공식문서 - 4",
        "excerpt":"[출처 : 장고 공식문서] django 버젼 확인하기 $ python -m django —version Django의 공식문서에서는 Django 버젼 4.0, Python 3.8 이후의 버젼을 지원합니다. 이전 버젼의 Python의 경우 faq-python-version-supprot에서 호환되는 Django를 이용할 것 새로 작업을 하는 경우 버젼확인은 필수불가결적인 것이다. 프로젝트 만들기 $ django-admin startproject mysite 장고의 프로젝트를 기획할 때 코드를 자동으로...","categories": ["장고"],
        "tags": ["장고"],
        "url": "/%EC%9E%A5%EA%B3%A0/Django_learn_4/",
        "teaser": null
      },{
        "title": "Django 공식문서 - 5",
        "excerpt":"[출처 : 장고 공식문서] 설문조사 앱 만들기 🔥 프로젝트와 앱의 차이점 앱은 블로그 시스템, 공개 기록 데이터베이스 또는 소규모 의견조사 앱과 같은 작업을 수행하는 웹 어플리케이션이다. 프로젝트는 특정 웹 사이트에 대한 구성 및 앱의 모음이다. 그러므로 프로젝트에는 여러 개의 앱이 포함이 될 수 있고, 앱은 여러 프로젝트에 있을 수 있다....","categories": ["장고"],
        "tags": ["장고"],
        "url": "/%EC%9E%A5%EA%B3%A0/Django_learn_5/",
        "teaser": null
      },{
        "title": "Django 공식문서 - 6",
        "excerpt":"[출처 : 장고 공식문서] 데이터베이스 설치 mysite/settings.py 파일을 중심으로 이루어집니다. 장고는 기본적으로 SQLite를 사용하도록 구성되어 있다. 이는 파이썬에서 기본으로 제공되기때문에 사용하는 것이다. 다른 데이터베이스를 사용하고 싶다면, 적절한 데이터베이스 바인딩을 설치해줘야한다. DATABASES의 ‘default’값을 밑의 리스트중 바꿔주면 된다. ENGINE django.db.backends.sqlite3 django.db.backends.postgresql django.db.backends.mysql django.db.beckends.oracle 이외에도 SQLite를 제외한 다른 데이터베이스를 사용할 경우 여러 설정들이...","categories": ["장고"],
        "tags": ["장고"],
        "url": "/%EC%9E%A5%EA%B3%A0/Django_learn_6/",
        "teaser": null
      },{
        "title": "Django 공식문서 - 7",
        "excerpt":"[출처 : 장고 공식문서] 모델 만들기 장고에서의 모델이란 부가적인 메타데이터를 가진 데이터베이스의 구조를 말한다. 현재 수정중인 파일은 polls/models from django.db import models class Question(models.Model): question_text = models.CharField(max_length=200) pub_date = models.DateTimeField('date published') class Choice(models.Model): question = models.ForeignKey(Question, on_delete=models.CASCADE) choice_text = models.CharField(max_length=200) votes = models.IntegerField(default=0) 장고 공식문서에서는 여론조사 앱을 만든다. 그래서 여기서...","categories": ["장고"],
        "tags": ["장고"],
        "url": "/%EC%9E%A5%EA%B3%A0/Django_learn_7/",
        "teaser": null
      },{
        "title": "Django 공식문서 - 8",
        "excerpt":"[출처 : 장고 공식문서] API 가지고 놀기 쉘을 통해 장고의 API를 자유롭게 가지고 놀아보자 $ python manage.py shell 쉘에 진입한 이후에는 데이터베이스 API를 사용할 수 있게 된다. 영문의 내용을 직역한 것이므로 약간 이상할수도 있습니다! &gt;&gt;&gt; from polls.models import Choice, Question # 방금 만든 모델의 클래스를 불러온다. # 아직 작성한 질문이...","categories": ["장고"],
        "tags": ["장고"],
        "url": "/%EC%9E%A5%EA%B3%A0/Django_learn_8/",
        "teaser": null
      },{
        "title": "하루를 시작하는 곳",
        "excerpt":"나만의 작업 공간 🧑🏻‍💻 위의 사진은 내가 컴퓨터 앞의 공간이다. 이번에 중국 공제자인 Gaf가 장패드를 다시 재출시해서 사봤는데 결제부터 집에 도착까지 거의 2달 가량이 걸린 것 같다. 두 달이라는 시간동안 나는 정말 바쁘게 살아왔다. 지금도 너무 바빠서 하루하루 블로그에 글을 계속 옮기고는 있지만, 뭔가 나는 하나라도 마음에 걸리는 게 있으면...","categories": ["일상"],
        "tags": ["일상"],
        "url": "/%EC%9D%BC%EC%83%81/%ED%95%98%EB%A3%A8%EB%A5%BC-%EC%8B%9C%EC%9E%91%ED%95%98%EB%8A%94-%EA%B3%B3/",
        "teaser": null
      },{
        "title": "너무 더운 하루",
        "excerpt":"너무 더워 🔥 날씨가 점점 더워진다. 지금은 7월의 대한민국, 여름의 피크라고 불리는 나날들이 이어지고 있다. 나는 오늘도 뜨거운 태양볕에 노트북을 키고 조용히 키보드 위에 손을 올린다. 내가 살고 있는 자취방은 쓰리룸인데, 그 중 내가 공부할 때 들어가는 방은 창이 굉장히 크게 나있어서 햇빛이 엄청 들어온다. 물론 커튼을 치고 공부하는 방법도...","categories": ["일상"],
        "tags": ["일상"],
        "url": "/%EC%9D%BC%EC%83%81/%EB%84%88%EB%AC%B4-%EB%8D%94%EC%9A%B4-%ED%95%98%EB%A3%A8/",
        "teaser": null
      },{
        "title": "셀레니움 업데이트로 인한 변경",
        "excerpt":"갑작스러운 셀레니움 4.3.0 변경 Selenium 4.3.0 * Deprecated find_element_by_* and find_elements_by_* are now removed (#10712) * Deprecated Opera support has been removed (#10630) * Fully upgraded from python 2x to 3.7 syntax and features (#10647) * Added a devtools version fallback mechanism to look for an older version when mismatch...","categories": ["데이터 수집"],
        "tags": ["데이터 수집","Selenium"],
        "url": "/%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EC%88%98%EC%A7%91/selenium_fixed/",
        "teaser": null
      },{
        "title": "RDKit에 대해",
        "excerpt":"해당 정보는 RDKit 공식 홈페이지 문서를 기반으로 작성되었습니다. 공식 깃허브 홈페이지는 rdkit RDKit이란? RDKit은 cheminformatics 툴킷이라고 불리는 화학 정보학 오픈소스 라이브러리이다. 화학물질의 구조정보를 담보있는 파일형식의 데이터 또는 구조를 그리거나 해석해야하는 상황에서 자주 사용되는 툴이다. 대표적으로 사용할 수 있는 프로젝트에는 독성물질 예측과 같은 분석이나 신약 개발과 같은 개발에 사용된다. rdkit 설치...","categories": ["화학 정보학"],
        "tags": ["화학 정보학","rdkit"],
        "url": "/%ED%99%94%ED%95%99%20%EC%A0%95%EB%B3%B4%ED%95%99/about_rdkit/",
        "teaser": null
      },{
        "title": "NetworkX로 분자구조 그리기",
        "excerpt":"해당 정보는 NetworkX 공식 홈페이지 문서를 기반으로 작성되었습니다. 공식 깃허브 홈페이지는 networkx NetworkX란? 이전에는 RDKit에 대해 알아봤는데 NetworkX의 경우 복잡한 네트워크형 오픈소스 라이브러리이다. 공식 홈페이지에서는 역학의 기능을 생성하거나 조작 또는 연구에 사용된다고 명시되어있다. 설치하기 $ pip install networkx pip을 통해서 보다 쉽게 설치가 가능하다. $ pip install networkx[all] 공식 사이트에서는...","categories": ["화학 정보학"],
        "tags": ["화학 정보학","Networkx"],
        "url": "/%ED%99%94%ED%95%99%20%EC%A0%95%EB%B3%B4%ED%95%99/Networkx_rdkit/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] 짝지어 제거하기",
        "excerpt":"1. 문제 [level 2] 짝지어 제거하기 - 12973 문제 링크 성능 요약 메모리: 14.8 MB, 시간: 137.45 ms 구분 코딩테스트 연습 &gt; 2017 팁스타운 채점결과 정확성: 60.2 효율성: 39.8 합계: 100.0 / 100.0 문제 설명 짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_2"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/12973/",
        "teaser": null
      },{
        "title": "[파이썬][프로그래머스] H-Index",
        "excerpt":"1. 문제 [level 2] H-Index - 42747 문제 링크 성능 요약 메모리: 10.1 MB, 시간: 0.00 ms 구분 코딩테스트 연습 &gt; 정렬 채점결과 정확성: 100.0 합계: 100.0 / 100.0 문제 설명 H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다....","categories": ["코딩테스트"],
        "tags": ["알고리즘","파이썬","코테","프로그래머스","Level_2"],
        "url": "/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/42747/",
        "teaser": null
      }]
