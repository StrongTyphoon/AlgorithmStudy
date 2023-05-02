// findMinDist(시작x, 시작y) 에서 갈수 있는 Land중 가장 큰 수를 반환
// 모든 L에 대해서 findMinDist 반복하여 가장 큰 수를 기록
// 50*50*50*50 2500*2500은 6250000 번이므로 쌉가능 브루트 포스 가즈아
// 시간초과 개같은;;;
const fs = require('fs')
const inp = fs.readFileSync('./2589보물섬/input.txt').toString().trim().replaceAll('\r','').split('\n')
const [N,M] = inp[0].split(' ').map(e=>+e)
const inpAry = inp.slice(1).map(str=>str.split('').map(s=>(s==='W')?0:1))

//console.log(inpAry)// 물이 0, 육지가 1

const findMinDist = (startX,startY)=>{
    const visited = Array.from(Array(N),() => new Array(M).fill(300))
    visited[startX][startY] = 0
    const queue = []
    const [delX, delY] = [[1,0,-1,0],[0,1,0,-1]]
    let max = 0
    queue.push(startX,startY,0)

    while(queue.length){
        const hour = queue.pop()
        const y = queue.pop()
        const x = queue.pop()
        delX.forEach((_,idx)=>{
            const [newX, newY] = [x+delX[idx],y+delY[idx]]
            if(newX<N&&newX>-1&&newY<M&&newY>-1){
                if(inpAry[newX][newY]===1){
                    if(visited[newX][newY]>hour){
                        visited[newX][newY] = hour+1
                        queue.push(newX,newY,hour+1)
                    }
                }
            }
        })
    }
    
    for(let i=0; i<N;i++){
        for(let j=0; j<M;j++){
            if(visited[i][j]===300) continue
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