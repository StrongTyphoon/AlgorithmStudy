const fs = require('fs')
const inp = fs.readFileSync('./1325효율적인해킹/input.txt').toString().split('\n')
const [N,M] = inp[0].split(' ').map(e=>+e)
let ptr = 1

const tree = Array(N+1).fill(0).map(e=>new Array())

while(ptr<M+1){
    const [A,B] = inp[ptr++].split(' ').map(e=>+e) //A가 B를 신뢰한다. B=>A
    tree[B].push(A)
}
//console.log(tree)
const hackedEA = Array(N+1).fill(0)
const stack = []
for(let i=1; i<=N; i++){
    const visited = Array(N+1).fill(false)
    let temp
    let iterary
    visited[i] = true
    stack.push(i)
    while(stack.length){
        temp = stack.pop()
        iterary = tree[temp]
        if(iterary.length){
            for(let j=0; j<iterary.length; j++){
                if(!visited[iterary[j]]){
                    visited[iterary[j]] = true
                    stack.push(iterary[j])
                }
            }
        }
    }
    let cnt=0
    for(let j=0; j<N+1; j++){
        if(visited[j]){
            cnt++
        }
    }
    hackedEA[i] = cnt
    //console.log(visited)
}
//console.log(hackedEA)

// findmax
let max = 0
for(let i=0; i<N+1;i++){
    if(hackedEA[i]>max)
    max = hackedEA[i]
}

const ans = []
for(let i=0; i<N+1;i++){
    if(hackedEA[i]===max){
        ans.push(i)
    }    
}

console.log(ans.join(' '))