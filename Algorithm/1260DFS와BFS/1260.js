const fs = require('fs')
const inp = fs.readFileSync('./1260DFS와BFS/input.txt').toString().replaceAll('\r','').split('\n')
const [N,M,V] = inp[0].split(' ').map(ele=>Number(ele)) //N정점개수, M간선개수, V시작정점

const graph = {}
for(let i=0; i<N; i++){
    graph[i+1] = []
}

for(let i=1; i<M+1; i++){1
    const [temp1 , temp2] = inp[i].split(' ').map(ele=>{return Number(ele)})
    graph[temp1].push(temp2)
    graph[temp2].push(temp1)
}

// console.log("graph는 : ", graph)
// 배열 sort
for(let i=1; i<N+1;i++){
    graph[i].sort((a,b)=>{return a-b})
}

//console.log(graph)
// console.log("graph는 : ", graph)
//간선 그래프 이중배열로 변경하여야지 n번만큼의 배열에 대한 정렬이 없어도 됨
// const graph = {}
// for(let i=0; i<N; i++){
//     graph[i+1] = new Array(N+1).fill(false)
// }



function dfs(start, visit){
    tempAry = graph[start]
    visit[start] = true
    for(const temp of tempAry){
        if(!visit[temp]){
            visit[temp] = true
            process.stdout.write(String(temp)+' ')
            dfs(temp ,visit)
        }
    }
}

visit = new Array(N+1).fill(false)
visit[V] = true
process.stdout.write(String(V)+' ')
dfs(V, visit)



function bfs(){
    process.stdout.write('\n')
    const visited = new Array(N+1).fill(false)
    const queue = new Array()
    visited[V] = true
    queue.push(V)
    while(queue.length){
        const temp = queue.shift()
        process.stdout.write(String(temp)+' ')
        const tempAry = graph[temp]
        for(let i=0; i<tempAry.length; i++){
            if(!visited[tempAry[i]]){
                visited[tempAry[i]] = true
                queue.push(tempAry[i])
            }
        }
    }
}
bfs()