---
title:  "[파이썬][라이브러리] 셀레니움 업데이트로 인한 변경"
excerpt: "AttributeError: 'WebDriver' object has no attribute 'find_element_by_xpath' 해결방법"

categories:
  - 데이터 수집
tags:
  - [데이터 수집, Selenium]

toc: true
toc_sticky: true
 
date: 2022-07-21
last_modified_at: 2022-07-21
---

### 갑작스러운 셀레니움 4.3.0 변경

```txt
Selenium 4.3.0
* Deprecated find_element_by_* and find_elements_by_* are now removed (#10712)
* Deprecated Opera support has been removed (#10630)
* Fully upgraded from python 2x to 3.7 syntax and features (#10647)
* Added a devtools version fallback mechanism to look for an older version when mismatch occurs (#10749)
* Better support for co-operative multi inheritance by utilising super() throughout
* Improved type hints throughout
```

- 위의 내용은 최근 셀레니움 업데이트로 추가된 것이다.

간략하게 코드로 설명하자면

```python
driver = webdriver.Chrome(f'./{chrome_ver}/chromedriver', chrome_options=chrome_options)
# 이건 크롬 웹드라이버 설정 코드이다. 버젼 확인을 위해 사용하는 것이므로 무시해도 된다.

# 밑에 기존의 코드 대표적인 2개
driver.find_element_by_css_selector('~selector 내용~')
driver.find_element_by_xpath('~xpath 내용~')

# 변경된 코드
from selenium.webdriver.common.by import By # By를 사용하기 위해서 라이브러리 임포트
driver.find_element(By.CSS_SELECTOR, '~selector 내용~')
driver.find_element(By.XPATH, '~xpath 내용~')

# xpath의 다른 방법
driver.find_element('xpath', '~xpath 내용~')
```

이외에도 다양한 내용들이 바뀌었다.

### 작은 교훈
매 프로젝트를 진행할 때마다 새롭게 느끼는 것중 하나는 각각의 호환되는 버젼과 코드가 있다는 것이다.<br>
나는 이것을 conda를 통해 여러가지 가상환경을 구상하여 매 프로젝트마다 각각의 최적화된 버젼을 사용하려고 하는데,
이러한 버릇은 아주 좋은 것이다.