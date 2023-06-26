const fs = require('fs')
const inp = fs.readFileSync('./2589보물섬/input.txt').toString().trim().replaceAll('\r','').split('\n')
const [N,M] = inp[0].split(' ').map(e=>+e)
const inpAry = inp.slice(1).map(str=>str.split('').map(s=>(s==='W')?0:1))

const findMinDist = (startX,startY)=>{
    const visited = Array.from(Array(N),() => new Array(M).fill(0))
    const queue = []
    const [delX, delY] = [[1,0,-1,0],[0,1,0,-1]]
    let max = 0
    queue.push(startX,startY)

    while(queue.length){
        const x = queue.shift()
        const y = queue.shift()
        delX.forEach((_,idx)=>{
            const [newX, newY] = [x+delX[idx],y+delY[idx]]
            if(newX<N&&newX>-1&&newY<M&&newY>-1){
                if(inpAry[newX][newY]===1&&!visited[newX][newY]){
                        visited[newX][newY] = visited[x][y] + 1
                        queue.push(newX,newY)
                }
            }
        })
    }
    visited[startX][startY] = 0
    for(let i=0; i<N;i++){
        for(let j=0; j<M;j++){
            if(visited[i][j]>max){
                max = visited[i][j]
            }
        }
    }

    return max
}

const FullSearch = ()=>{
    let maxDist = 0
    for(let i=0; i<N;i++){
        for(let j=0; j<M;j++){
            if(inpAry[i][j]===0) continue
            maxDist = Math.max(maxDist,findMinDist(i,j))
        }
    }
    console.log(maxDist)
}
FullSearch()