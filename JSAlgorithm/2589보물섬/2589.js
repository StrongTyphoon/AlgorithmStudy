// findMinDist(시작x, 시작y) 에서 갈수 있는 Land중 가장 큰 수를 반환
// 모든 L에 대해서 findMinDist 반복하여 가장 큰 수를 기록
// 50*50*50*50 2500*2500은 6250000 번이므로 쌉가능 브루트 포스 가즈아
// 시간초과 개같은;;;
// visited에 300을 할당하고, 현재 시간과 visited의 시간을 비교하여 작을 경우만 visited의 시간을 갱신하여 최소값만 visited에 적는 stack을 이용한 dfs 를 사용하였다.
// 하지만 위 방법은 어마무시한 시간이 걸렸고
// visited에 0을 할당하고, visited에 현재 시간만 저장하는 방법에 bfs로 바꿨는데 어마무시한 성능 상승을 확인하였다. BFS 그렇게 많은 작업이 더 추가된거 같지 않은데 성능차이가 이렇게 심하다니.. 
// 하지만 52%에서 틀렸다. 
// 2 2/nL L 의 case에서 2가 나오는 반례가 있었다. 이는 시작점이 0이라서 수정 가능해서 생기는 문제다.
// 결과적으로 시작점 visited에 다시 0으로 할당하여서 해결하였다. 시작점 visited는 2가 될 수 밖에 없는 상황인데 이로 인한 다른 visited 요소들에 대한 영향은 없다.
// 시간이 4s 넘게 나와 확인한 결과 Queue class를 선언하여 해결 하는 것이 잦은 선언? 으로 인해 (아마도) 훨씬 더 많은 시간이 걸리는 것을 확인하였다. 그냥 shift가 더 빠르다니..
// 의외로 for(i=0; i<4; i++) 보다 delX.forEach(_,idx)가 더 빨랐다. 왜일까..?
 
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