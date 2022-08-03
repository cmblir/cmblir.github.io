---
title:  "RDKit에 대해"
excerpt: "오픈 소스 화학 정보학 라이브러리"

categories:
  - 화학 정보학
tags:
  - [화학 정보학, rdkit]

toc: true
toc_sticky: true
 
date: 2022-07-27
last_modified_at: 2022-07-27
---

*해당 정보는 [RDKit]('https://www.rdkit.org/') 공식 홈페이지 문서를 기반으로 작성되었습니다.*

*공식 깃허브 홈페이지는 [rdkit]('https://github.com/rdkit/rdkit')*

## RDKit이란?

RDKit은 cheminformatics 툴킷이라고 불리는 화학 정보학 오픈소스 라이브러리이다.
화학물질의 구조정보를 담보있는 파일형식의 데이터 또는 구조를 그리거나 해석해야하는 상황에서 자주 사용되는 툴이다.

대표적으로 사용할 수 있는 프로젝트에는 **독성물질 예측**과 같은 분석이나 **신약 개발**과 같은 개발에 사용된다.

## rdkit 설치 방법

```bash
$ pip install rdkit
```

- pip을 통해서 쉽게 간편하게 설치가 가능하다.

```bash
$ conda install rdkit
```
- conda 가상환경에 설치도 가능하다.


## rdkit을 통해서 간단하게 분자구조 그려보기


*우리가 여기서 알아야할 것은 rdkit을 통해서 그릴 분자구조 화학식의 경우 ASCII 문자열을 사용한 화학구조 설명법으로 SMILES라는 화학 결합 방식을 통해서 사용한다.*

- SMILES의 예시
    - N=N 구조는 N#N
    - CH3-N=C=O 구조는 CN=C=O

![타이레놀](https://w.namu.la/s/14578d99ea8c9da9f30cca8e3aad2d7aa345a61a78bb71c6e8cb99bc618775821161d33935c94506e593b26951505b1845f133e214171b6bf9fc208bd36c9e2449fc2145f70028f0557b40007936f5e5ebea7c896fd419bb9971267706b8c2be1ceafee1f2c490e4e2321a52bd39f042)
[사진 출처 : 나무위키]


우리가 그려볼 것은 타이레놀의 아세트아미노펜 또는 파라세타몰이라는 타이레놀 성분이다.


### SMILES 코드 검색

    SMILES 코드가 궁금하다면 PubChem 사이트를 이용하는 걸 추천한다. 이름 검색으로 보다 쉽게 SMILES 코드를 구할 수 있다.

- [PubChem](https://pubchem.ncbi.nlm.nih.gov/)


### 구현하기

```python
from rdkit import Chem
import matplotlib.pyplot as plt
```
- 필요한 라이브러리 불러오기

```python
smiles = 'CC(=O)NC1=CC(=C(C=C1)O)CN2CCN(C2)CC3=C(C=CC(=C3)NC(=O)C)O' # 아세트아미노펜의 SMILES 코드

mol = Chem.MolFromSmiles(smiles)
```

- 우리가 흔히 mol 이라고 부르는데 분자를 표시할 때 많이 쓰이는 방식이다. 

```python
mol
```

![스크린샷 2022-08-03 오후 10 00 24](https://user-images.githubusercontent.com/75519839/182614159-89993854-f66c-45b0-bfab-34b10602ebd7.png)

- 이런식의 분자구조를 띄고 있는 것을 확인할 수 있다.