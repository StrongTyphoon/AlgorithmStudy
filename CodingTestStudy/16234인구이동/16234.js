
/*
1. bfs로 상하좌우와 현재 자신의 값의 차가 l r 사이에 있는지 확인
2. 있으면 visited에 자신의 칼라와 같은 칼라 값으로 마킹
3. tempary에 같은 칼라의 index를 저장함
4. tempary의 값이 2이상인 경우
4-1. tempary에 들어잇는 inpary의 값을 다 더해 tempary.length로 나누어 이 값을 inpary에 반영
4-2. 2이상이 아니면 그냥 넘어감
5. tempary 초기화

*/

const fs = require('fs')
const inp = fs.readFileSync('./16234인구이동/input.txt').toString().replaceAll('\r','').split('\n')
const [n,l,r] = inp[0].split(' ').map(e=>+e)
const inpAry = inp.slice(1).map(e=>e.split(' ').map(ele=>+ele))

let day = 0
while(day<2001){
    let color = 1
    const visited = Array.from(Array(n), () => new Array(n).fill(0))
    const dx = [1,0,-1,0]
    const dy = [0,1,0,-1]
    let tempary = []
    let cnt =  0
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(!visited[i][j]){
                const queue = []
                visited[i][j] = color
                queue.push(i,j)
                tempary.push([i,j])
                while(queue.length){
                    const x = queue.shift()
                    const y = queue.shift()

                    dx.forEach((_,idx)=>{
                        const [newX, newY] = [x+dx[idx],y+dy[idx]]
                        if(newX<n&&newX>-1&&newY<n&&newY>-1){
                            if(!visited[newX][newY]){
                                const abs = Math.abs(inpAry[x][y]-inpAry[newX][newY])
                                if(abs<=r && abs>=l){
                                    visited[newX][newY] = visited[x][y]
                                    queue.push(newX,newY)
                                    tempary.push([newX,newY])
                                    cnt++
                                }
                            }
                            
                        }
                        
                    })
                }
            }

            if(tempary.length>1){
                let temp = 0
                for(let idx of tempary){
                    temp += inpAry[idx[0]][idx[1]]
                }
                temp /= tempary.length
                temp = Math.floor(temp)
                for(let idx of tempary){
                    inpAry[idx[0]][idx[1]] = temp
                }
            }
            tempary = []
            color++
            
        }
    }

    if(cnt===0){
        console.log(day)
        break
    }
    else{
        day++
    }
    cnt = 0
}