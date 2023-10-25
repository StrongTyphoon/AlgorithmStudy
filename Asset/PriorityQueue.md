# Priority Queue 구현
=> heap을 통한 구현

### heap 의 정의
1. complete binary tree
2. min/max tree

### 일반적으로 배열을 통해 표현(완전 이진 트리이기에 메모리 낭비 x)

### 부모 => 자식 
- left child 같은 경우 i*2
- right child 같은 경우 i*2+1

### 자식 => 부모
- Math.floor(i/2)

### max heap insert
1. 맨 뒤에 요소 추가
2. max tree가 맞는지 확인(부모 노드와 비교 후 아닐 경우 변경)

### max heap remove(pop)
1. 루트 노드를 삭제
2. 맨 끝 노드를 루트노드로 옮김
3. 자식 노드중 큰 것을 선택,
- 루트 노드가 더 작다면 자리를 바꾼다.
- 루트 노드가 더 크다면 작업을 끝낸다.


출처 https://velog.io/@treejy/Priority-Queue-Heap-%EA%B0%9C%EB%85%90-%EB%B0%8F-JavaScript-%EA%B5%AC%ED%98%84