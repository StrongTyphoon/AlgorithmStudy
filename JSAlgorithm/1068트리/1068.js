// edge case 고려 잘하기
// type error 일시에 여러 인풋들을 바꿔가며 입력해보기 
class Node{
    constructor(idx){
        this.idx = idx
        this.children = []
    }
}

const fs = require('fs')
const inp = fs.readFileSync('./1068트리/input.txt').toString().replaceAll('\r','').trim().split('\n')
const m = +inp[2]
const parent = inp[1].trim().split(' ').map(e=>+e)
const tree = []
let ans = 0

for (let i in parent){
    let idx = +i
    const node = new Node(idx)
    tree.push(node)
}

for(let i in parent){
    let idx = +i
    if(parent[idx] !== -1){
        tree[parent[idx]].children.push(idx)
    }
}

for(let i in tree){
    let idx = +i
    //console.log(idx)
    if(!tree[idx].children.length){
        let iter = idx
        while(1){
            if(iter === -1){
                //console.log(idx, ' is cnt ++')
                ans++
                break
            }
            if(iter === m){
                //console.log(idx, ' is not cnt ++')
                break
            }
            iter = parent[iter]
        }
    }
    else if(tree[idx].children.length === 1){
        if(tree[idx].children[0] === m){
            ans++
        }
    }
}

console.log(ans)
