const fs = require('fs')
const inp = fs.readFileSync('dev/stdin').toString().replaceAll('\r', '').split('\n')
const [N,[x,y],M] = [Number(inp[0]), inp[1].split(' ').map(ele=>{return Number(ele)}), Number(inp[2])]

const parent = new Array(N+1).fill(-1)
const visit = new Array(N+1).fill(false)   

const tempAry = []
const distX = new Array(N+1).fill(-1)
const distY = new Array(N+1).fill(-1)

for(let i=0; i<M ; i++){
    let [a,b] = inp[i+3].split(' ').map(ele=>Number(ele))
    parent[b] = a
}

function findParent(start, dist){
    let temp = start
    let cnt = 0
    dist[temp] = cnt
    if(!visit[temp]){
        visit[temp] = true
    }
    else{
        tempAry.push(temp)
    
    }
    

    while(parent[temp] !== -1){
        temp = parent[temp]
        cnt += 1
        dist[temp] = cnt
        if(!visit[temp]){
            visit[temp] = true
        }
        else{
            tempAry.push(temp)
        }   
    }
    return temp
}


if(findParent(x,distX)!==findParent(y, distY)){
    console.log(-1)
}
else{
    console.log(distX[tempAry[0]]+distY[tempAry[0]])
}

// console.log(tempAry[0])
// console.log(distX, distY)

