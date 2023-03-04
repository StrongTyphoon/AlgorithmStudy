const fs = require('fs')
const inp = fs.readFileSync('./15649N과M/input.txt').toString()
const [N,M] = inp.split(' ').map(ele=>Number(ele))
const output = []
let result = ''
const visited = new Array(N).fill(false)

function dfs(count){
    if(count === M){
        result += `${output.join(' ')}\n`
        return
    }
    
    for(let i=0; i<N; i++){
        if(visited[i]===true) continue
        visited[i]= true
        output.push(i+1)
        dfs(count+1)
        output.pop()
        visited[i]= false
    }
}

dfs(0)
console.log(result)