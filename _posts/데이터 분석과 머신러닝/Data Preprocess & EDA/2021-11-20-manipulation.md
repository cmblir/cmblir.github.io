---
title:  "데이터 분석과 머신러닝 - Data Manipulation"
excerpt: "Data Manipulation에 대해"

categories:
  - 데이터 분석과 머신러닝
tags:
  - [데이터 분석, 머신러닝]

toc: true
toc_sticky: true
 
date: 2021-11-19
last_modified_at: 2021-11-19
---

# 1.3 Data Manipulation

## pandas로 데이터 합치기

### Concat (Concatenate)

concat은 '더한다' 혹은 '붙인다'라는 의미로 이해하면 된다.

예를 들어, 2개의 문자열을 + 연산자를 이용해 붙일 수 있다.

```python
>>> '"+" 연산자를 ' + '사용하여' + '붙일 수 있다.'
'"+" 연산자를 사용하여 붙일 수 있다.
```

### string +

다른 방법으로 문자열을 더할 수 있다.

- tostring
- join

문자열을 나눌수도 있다.

- split

### data.frame

data.frame도 열이나 행을 기준으로 더할 수 있다.

![Untitled](https://user-images.githubusercontent.com/75519839/174546916-7032a69a-bffb-443c-81e1-fdc3364b1366.png)

![Untitled 1](https://user-images.githubusercontent.com/75519839/174546829-c000f288-8ec1-4cea-bd48-aef54544bc31.png)

![Untitled 2](https://user-images.githubusercontent.com/75519839/174546836-52274950-e9d8-4556-809c-ca322fdf39c6.png)

**Index가 다른 경우**

![Untitled 3](https://user-images.githubusercontent.com/75519839/174546843-153ca15d-5367-4b6b-92ec-097bd6c02f38.png)

![Untitled 4](https://user-images.githubusercontent.com/75519839/174546852-b1a25367-6695-4c01-a39f-2c18ab01310b.png)

![Untitled 5](https://user-images.githubusercontent.com/75519839/174546857-ca007790-a4f7-40c8-9d50-6b1dc4890763.png)

**파이썬으로 구현해보자!**

```python
import pandas as pd

x = pd.DataFrame([['AX','AY'],['BX','BY']], index = ['A','B'], columns = ['X','Y'])
y = pd.DataFrame([['AX','AZ'],['CX','CZ']], index = ['A','C'], columns = ['X','Z'])
print(x)

# x 결과값
X   Y
A  AX  AY
B  BX  BY

# y 결과값
X   Z
A  AX  AZ
C  CX  CZ
```

concat을 사용한다면?

```python
pd.concat([x, y]) ## concate_by_row

# 결과값
    X    Y    Z
A  AX   AY  NaN
B  BX   BY  NaN
A  AX  NaN   AZ
C  CX  NaN   CZ
```

```python
pd.concat([x, y], axis = 1) ## concate_by_column

# 결과값
     X    Y    X    Z
A   AX   AY   AX   AZ
B   BX   BY  NaN  NaN
C  NaN  NaN   CX   CZ
```

<aside>
☝ 데이터 프레임을 더할 때, 일반적으로 더해지는 행, 열의 이름이나 인덱스 값이 일치해야 한다. 만약 그렇지 않은 경우, 비어있는 부분에 대해서는 (결측치를 의미하는) **NaN**으로 채워진다.

</aside>

## Stocks

이번에는 제가 **치맥 주식**이라 이름 붙인 실제 데이터를 기반으로 concat을 연습해보겠습니다.

- `000080.csv`
- `000890.csv`
- `005300.csv`
- `027740.csv`
- `035810.csv`
- `136480.csv`

여러개의 파일로 구성되어 있기 때문에, 각각 잘 로드되었는지 확인하는 것 뿐만 아니라 데이터프레임을 하나로 합치는 것 또한 필요하다.

이번 연습의 목표 중 하나는 아래 그림처럼 **최근 분기에 해당하는 데이터**와 `종목코드`, `종목명` ,`테마`와 같은 **추가 정보 (Feature)**를 더해, 하나의 데이터프레임으로 합치는 것이다.

### 데이터 준비

```python
import pandas as pd

df1 = pd.read_csv(urlhead + '000080.csv')
df1.head()
```

![Untitled 6](https://user-images.githubusercontent.com/75519839/174546859-a39e0e8f-a070-4e8d-8e0c-34176bb4216d.png)

```python
df1 = pd.read_csv(urlhead + '000080.csv').transpose()
df1.head()
```

![Untitled 7](https://user-images.githubusercontent.com/75519839/174546862-898b957c-2e14-411a-8e1c-2ae38fc5cd9a.png)

> pandas first row header
> 

위의 값의 column을 해결하기 위해 실행한 코드

```python
new_header = df.iloc[0] # grab the first row for the header
df = df[1:] # take the data less the header row
df.columns = new_header
return df
```

```python
def mydf(myurl):
    df = pd.read_csv(urlhead + myurl).transpose()
    new_header = df.iloc[0] 
    df = df[1:] 
    df.columns = new_header 
    return df
```

```python
df1 = mydf('000080.csv')
df1
```

![Untitled 8](https://user-images.githubusercontent.com/75519839/174546868-7ed20231-c3a2-4f17-90df-ee8ef643d542.png)

```python
df2 = mydf('000890.csv')
df3 = mydf('005300.csv')
df4 = mydf('027740.csv')
df5 = mydf('035810.csv')
df6 = mydf('136480.csv')
```

```python
df = pd.concat([df1, df2, df3, df4, df5, df6])
df.shape
```

우리가 필요한 것은 마지막 분기의 데이터이다.

이를 위해 mydf 를 어떻게 수정해야 할까?

> 이번 연습의 목표 중 하나는 아래 그림처럼 **최근 분기에 해당하는 데이터**와 `종목코드`, `종목명` ,`테마`와 같은 **추가 정보 (Feature)**를 더해, 하나의 데이터프레임으로 합치는 것입니다.
> 

![Untitled 9](https://user-images.githubusercontent.com/75519839/174546872-7d20b9d4-8ddc-4b40-bc86-66a08fddb455.png)

```python
df = mydf('000080.csv')
```

![Untitled 10](https://user-images.githubusercontent.com/75519839/174546876-56d36c27-eba8-4e64-9d69-22315f526621.png)

```python
def mydf(myurl):
    df = pd.read_csv(urlhead + myurl).transpose()
    new_header = df.iloc[0] 
    df = df[1:] 
    df.columns = new_header 
    return df[-1:]

df = pd.concat([mydf('000080.csv'), mydf('000890.csv'), mydf('005300.csv'), mydf('027740.csv'), mydf('035810.csv'), mydf('136480.csv')])
df = df.reset_index()
df = df.drop(df.columns[0], axis=1)
    
df
```

![Untitled 11](https://user-images.githubusercontent.com/75519839/174546878-f287943d-91af-4542-8acf-9800a0a43a89.png)

이제 `테마`라는 추가 정보를 더해보도록 하겠다.

추가하고자 하는 정보는 다음 테이블과 같다. 7개인 것에 유의해야된다.

![Untitled 12](https://user-images.githubusercontent.com/75519839/174546884-b11fd918-24b2-4fdd-a064-af416da8c476.png)

```python
df2 = pd.DataFrame(
    {'종목' : ['000080', '000890', '005300', '027740', '035810', '136480', '136490'],
     '종목명': ['하이트진로', '보해양조', '롯데칠성', '마니커', '이지홀딩스', '하림', '선진'], 
     '테마' : ['주류', '주류', '주류', '육계', '육계', '육계', '돼지고기']}
)
pd.concat([df2, df], axis = 1)
```

![Untitled 13](https://user-images.githubusercontent.com/75519839/174546885-c91212be-a66e-4f66-867b-f615d9429251.png)

# concat으로 df에 df2를 병합한 것이다. axis = 1을 통해 row에 추가한 것이다.

```python
df[['종목', '매출액', '순이익률']]
```

![Untitled 14](https://user-images.githubusercontent.com/75519839/174546891-1c635b64-192f-4a88-a172-6d5dff817925.png)

```python
df = df[['종목', '매출액', '순이익률']]
df
```

![Untitled 15](https://user-images.githubusercontent.com/75519839/174546892-773537de-3bc5-48c4-8561-549ae1e1ae7f.png)

## Merge

`df.merge("붙일 내용", how = "(방법)", on="(기준 feature)")` 

![Untitled 16](https://user-images.githubusercontent.com/75519839/174546895-66b42905-192e-480c-9539-29878f96a55f.png)

## Conditioning

1. **주식 종목들의 평균 수익률**
2. **순이익률이 -인 종목은 제외**
3. **추가로 테마별로**

```python
# type cast
df['순이익률'] = pd.to_numeric(df['순이익률'])

# 필터링 조건 (Condition) 설정
condition = (df['순이익률'] > 0) # Type Cast
# ()로 씌우는 것에 주의

# condition 값을 출력
# [] 안에 컨디션을 설정, 컨디션의 값이 True로 해당하는 부분의 데이터만 선택
df_subset = df[condition]

df_subset
```

![Untitled 17](https://user-images.githubusercontent.com/75519839/174546897-1ec0d77a-d350-418f-a45d-bb100d712ee8.png)

그렇다면 컨디션을 조절한다면?

```python
condition = ( (df['순이익률'] > 0) & (df['순이익률'] < 10))
df_subset2 = df[condition]
# 035810 이지홀딩스가 날라간 것을 볼 수 있다.
df_subset2
```

![Untitled 18](https://user-images.githubusercontent.com/75519839/174546900-83afa7d2-0852-4bb0-9f92-87195dd76d76.png)

추가적으로 &(and)와 |(or)을 사용해서 여러개의 condition을 조절할 수 있다.

## isin

```python
df_subset[sf_subset['테마'].isin(['주류'])]
```

![Untitled 19](https://user-images.githubusercontent.com/75519839/174546901-fbab3771-3291-4f2e-8242-1a209f6fcaa3.png)

# 테마가 주류인 데이터를 골라서 출력한다,

```python
df[(df['테마'] == '주류')]
```

## Groupby

```python
df_subset.groupby('테마').순이익률.mean()
```

![Untitled 20](https://user-images.githubusercontent.com/75519839/174546906-1ba8b675-9fe8-4aa0-a55a-3256623f289e.png)

# 1번 문제를 Groupby로 해결했다.

위의 식에서 `df_subset.groupby('테마').mean()` 으로 바꿔서 출력한다면

![Untitled 21](https://user-images.githubusercontent.com/75519839/174546908-381c6d8b-2e44-4958-91fd-0b5cab7da4d3.png)

# 이런식으로 출력이 가능하다.

```python
def toInt(string):
	return int(string.replace(',',''))
df_subset['매출액'] = df_subset['매출액'].apply(toInt)
df_subset
```

![Untitled 22](https://user-images.githubusercontent.com/75519839/174546913-1dffcdac-7a11-4309-bba9-efb9334dd28a.png)
