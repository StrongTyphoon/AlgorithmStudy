//https://www.acmicpc.net/problem/2606
// 입력 관리
const fs = require('fs')
const inp = fs.readFileSync("./2606바이러스/input.txt").toString().replaceAll('\r','').split('\n')
const [V,N] = [Number(inp[0]),Number(inp[1])]
const graph = {}

// graph 초기화
for(let i=1; i<=V; i++){
    graph[i] = []
}
// inp 정리
for(let i=0; i<N; i++){
    const [a,b] = inp[i+2].split(' ').map(ele=>{return Number(ele)})
    graph[a].push(b)
    graph[b].push(a)
}

//console.log(graph)

// graph 탐색 DFS

const visit = new Array(V+1).fill(false)
let ansCnt = -1

function dfs(start){
    if(!visit[start]){
        //console.log(start)
        ansCnt += 1
        const tempAry = graph[start]
        for(const nextStart of tempAry){
            visit[start] = true
            dfs(nextStart)
            
        }
    }
}
dfs(1)
console.log(ansCnt)