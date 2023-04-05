const fs = require('fs')
const inp = fs.readFileSync('./2636치즈/input.txt').toString().trim().replaceAll('\r','').split('\n')
const [N,M] = inp[0].split(' ').map(e=>+e)
const inpAry = inp.slice(1).map(e=>e.split(' ').map(e=>+e))

//console.log(inpAry)

// 1 개수 세아리고
// 0 주변 1을 전부 0으로 없앰 bfs // 여기서 어떤 0들을 dfs하냐면 바깥인덱싱부터 이어진 부분을 bfs 해야하네 ;; 내일해
// 1개수 세아리는데 0개라면 세아린 개수 출력

function solve(){
    let ans = 0
    let cnt1 = 0
    let day = 0
    const delta = [[1,0],[0,1],[-1,0],[0,-1]]

    while(1){
        for(let i=0; i<N; i++){
            for(let j=0; j<M ;j++){
                if(inpAry[i][j]===1){
                    cnt1++
                }
            }
        }
        //console.log(cnt1)
        if(cnt1 === 0){
            return [day,ans]
        }
        else{
            ans = cnt1
            cnt1 = 0
            day++
            const stack = []
            const dfsstack = [0,0]
            const visited = Array.from(Array(N),()=> new Array(M).fill(0))

            while(dfsstack.length){
                const [j,i] = [dfsstack.pop(),dfsstack.pop()]
                
                if(inpAry[i][j] === 0){
                    for(const [di,dj] of delta){
                        const [x,y] = [i+di, j+dj]
                        if(x>-1&&x<N&&y>-1&&y<M){
                            if(!visited[x][y]){
                                if(inpAry[x][y]===1){
                                    stack.push(x)
                                    stack.push(y)
                                }
                                else{
                                    dfsstack.push(x)
                                    dfsstack.push(y)
                                    visited[x][y] = 1
                                }
                            }
                            
                        }
                    }
                    
                }
            }
            

            while(stack.length){
                const y = stack.pop()
                const x = stack.pop()
                //console.log(x,y)
                if(inpAry[x][y]===1){
                    inpAry[x][y] = 0
                }
                
            }
            //console.log(inpAry)
        }
    }
    
}
const ans = solve()
console.log(ans.join('\n'))
