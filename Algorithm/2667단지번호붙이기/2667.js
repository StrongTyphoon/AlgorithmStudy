const fs = require('fs')

// 1. 2중 배열로 저장된 inputAry 전조사
// 2. 0이면 무시, 1이면 visit 체크
// 3. visit이 0이면 dfs하면서 검사된 visit 좌표에 true 부여
// 4. 다음으로 전조사된 1이 나오면 visit 체크, 0이면 dfs, 하면서 2부여


const inp = fs.readFileSync("./2667단지번호붙이기/input.txt").toString().replaceAll('\r','').split('\n')
const N = Number(inp[0])
const inpAry = []
for(let i=0; i<N; i++){
    inpAry[i]=inp[i+1]
}
const visit = new Array(N).fill(false).map(()=>new Array(N).fill(false))
const alpha = [[0,1],[1,0],[-1,0],[0,-1]]

function search(i,j){    // start에서 전조사, 찾으면 visit을 true로 바꿈, return 값으로 개수 리턴
    let cnt = 1
    const queue = []
    
    queue.push([i,j])
    visit[i][j] = true

    while(queue.length){
        const [x,y] = queue.shift() // x가 원점으로부터 세로로의 떨어진 거리, y가 가로로 떨어진 거리
    
        for(let [alpX, alpY] of alpha){
            const [newX, newY] = [x+alpX, y+alpY]       

            if(newX>-1 && newX<N && newY>-1 && newY<N){
                if(inpAry[newX][newY]==1){
                    if(!visit[newX][newY]){
                        queue.push([newX, newY])
                        visit[newX][newY] = true
                        cnt += 1
                    }
                }
                
            }
        }
    }

    return cnt
}

const ansAry = []

for(let i = 0; i<N; i++){
    for(let j=0; j<N; j++){
        if(inpAry[i][j]==1){
            if(!visit[i][j]){
                ansAry.push(search(i,j))
            }
        }
    }
}

ansAry.sort(function(a,b){return a-b})
console.log(ansAry.length)
for(let i=0; i<ansAry.length;i++){
    console.log(ansAry[i])
}