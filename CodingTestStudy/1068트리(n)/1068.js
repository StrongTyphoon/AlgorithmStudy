// 배열별로 부모로 올라가면서 탐색한다.
// 1. -1이 되면 while문을 끝낸다
// 2. 부모노드로 들르는 곳을 visited = true로 한다.
// 3. 3번째 입력 위치를 visited = true로 한다.
// 4. 부모 탐색시 visited = true인 곳은 탐색하지 않는다. 
// 너무복잡하다. 다른걸로하자
/*
9
-1 0 0 2 2 4 4 6 6
4

4번째 idx를 visited = 2로 해놓음
0: -1 => 탐색 종료
1: 0 => -1 을 visited 후 종료
2: 0 => -1 이 visited 이므로 종료
3: 2 => 2 을 visited, -1이 visited이므로 종료
4: 2 => (visited 2이므로 종료)
5: 4, 4는 visited 2이므로 5의 visited를 2로 바꾸고 종료 
6: 4, 4는 visited 2이므로 6의 visited를 2로 바꾸고 종료
7: 6 => 4은 visited가 2이므로 7의 visited를 2로 바꾸고 종료
8: 6 => 4은 visited가 2이므로 8의 visited를 2로 바꾸고 종료
visited = [1,0,1,0,2,2,2,2,2]
*/ 


/*
Tree를 구현하자

*/
class node{
    constructor(value){
        this.child = []
        this.value = value
    }
}

const fs = require('fs')
const inp = fs.readFileSync('./1068트리/input.txt').toString().split('\n')
const n = +inp[0]
const m = +inp[2]
const inpAry = inp[1].split(' ').map(e=>+e)
const tree = []
const iter = []

for(let idx in inpAry){
    const val = inpAry[idx]
    const nd = new node(inpAry[idx])
    if(idx == m){
        tree.push(new node(-999))
        continue
    }
    if(val !== -1){
        tree.push(nd)
        tree[val].child.push(nd)
        iter.push(+idx)
    }
    else{
        tree.push(nd)
    }
}
console.log(tree)

for(let idx of iter){
    dfs(idx)
}

function dfs(idx){
    
}