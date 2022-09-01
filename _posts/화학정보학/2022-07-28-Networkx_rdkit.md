---
title:  "[파이썬][라이브러리] NetworkX로 분자구조 그리기"
excerpt: "이전 편의 RDKit에 이어"

categories:
  - 화학 정보학
tags:
  - [화학 정보학, Networkx]

toc: true
toc_sticky: true
 
date: 2022-07-28
last_modified_at: 2022-07-28
---

*해당 정보는 [NetworkX]('https://networkx.org/') 공식 홈페이지 문서를 기반으로 작성되었습니다.*

*공식 깃허브 홈페이지는 [networkx]('https://github.com/networkx/networkx')*

## NetworkX란?

    이전에는 RDKit에 대해 알아봤는데 NetworkX의 경우 복잡한 네트워크형 오픈소스 라이브러리이다. 공식 홈페이지에서는 역학의 기능을 생성하거나 조작 또는 연구에 사용된다고 명시되어있다.

### 설치하기

```bash
$ pip install networkx
```
pip을 통해서 보다 쉽게 설치가 가능하다.

```bash
$ pip install networkx[all]
```
- 공식 사이트에서는 선택적으로 설치를 하고 싶을 경우에 해당 명령어를 사용해서 all 위치에 다른 값을 넣으면 된다고 한다.

### 구현하기
```python
from rdkit import Chem
import matplotlib.pyplot as plt
import networkx as nx
```

- 필요한 라이브러리 불러오기
    
    이전편과 마찬가지로 NetworkX로 분자구조를 그리려면 mol값이 필요하기때문에 같이 rdkit과 같이 사용해주는 것도 좋다.

```python
smiles = 'CC(=O)NC1=CC(=C(C=C1)O)CN2CCN(C2)CC3=C(C=CC(=C3)NC(=O)C)O' # 아세트아미노펜의 SMILES 코드

mol = Chem.MolFromSmiles(smiles)
```
- 사용할 SMILES 코드를 불러온다.

```python
Graph_mol = nx.Graph()

for atom in mol.GetAtoms(): # Atoms 정보를 원자 자체를 가져오는 명령어이다.
    G.add_node(atom.GetIdx(), # 결합의 인덱스를 가져온다. 분자의 순서같은 거
    labels=atom.GetSymbol(), # 원자 기호를 가져온다.
    atomic_num=atom.GetAtomicNum(), # 원자 번호를 설정하고 정수 값을 인수로 사용한다.
    formal_charge=atom.GetFormalCharge(),
    chiral_tag=atom.GetChiralTag(), # 키랄 유형
    hybridization=atom.GetHybridization(),
    num_explicit_hs=atom.GetNumExplicitHs(),
    is_aromatic=atom.GetIsAromatic())
```
원자 정보에 필요한 것들을 골라서 노드 정보에 담는다.

```python

for bond in mol.GetBonds(): # 원자의 결합을 읽어오는 명령어이다.
    G.add_edge(bond.GetBeginAtomIdx(), # 결합의 첫 번쨰 원자를 가져온다.
    bond.GetEndAtomIdx(), # 결합의 첫 번째 원자의 인덱스를 가져온다.
    bond_type=bond.GetBondType(), # 본드의 유형을 가져온다.
    bond_type_value=bond.GetBondTypeAsDouble()) # 본드 유형을 이중으로 가져온다. 
```

```python
nx.draw(Graph_mol)
```

![스크린샷 2022-08-03 오후 10 18 04](https://user-images.githubusercontent.com/75519839/182617609-b8fb9d5e-c95e-48d2-bd37-94ecec4dfd94.png)

- 이런식으로 RDKit보다는 다소 복잡하지만 분자의 구조를 직접 구현할 수 있다.
    이 경우 직접 노드를 생성하면서 들어가기때문에 RDKit처럼 깔끔한 분자 구조가 아닌 형태로 나오게 된다.<br>
    여기에 몇가지 코드를 추가적으로 작성하면 각각의 노드마다 레이블링을 한다거나 색상을 변경하거나 링크의 레이블링까지 모두 커스텀이 가능하다.<br>
    그래서 다소 복잡한 유형의 분자구조를 직접 구현할 경우 매우 유용하게 쓰일 것이다.