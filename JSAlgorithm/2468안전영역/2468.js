const fs = require('fs')
const inp = fs.readFileSync('./2468안전영역/input.txt').toString().replaceAll('\r','').split('\n')
const N = +inp[0]
const inpAry = inp.slice(1).map(ele=>ele.split(' ').map(ele=>+ele))

//console.log(inpAry)
let maxcnt = -1
for(let height=0; height<101; height++){
    const ans = new Array(N).fill(false).map(ele=>new Array(N).fill(false))
    for(let i=0; i<N;i++){
        for(let j=0; j<N; j++){
            if(inpAry[i][j]>height){
                ans[i][j] = true
            }
        }
    }
    //console.log(ans)    //true면 안잠김, false면 잠김
    let cnt = 0
    for(let i=0; i<N;i++){
        for(let j=0; j<N; j++){
            if(ans[i][j]){
                cnt++
                dfs(i,j)
            }
        }
    }

    function dfs(x,y){
        ans[x][y] = false
        const delta = [[1,0],[0,1],[-1,0],[0,-1]]
        for(const [dx,dy] of delta ){
            const [newX, newY] = [x+dx,y+dy]
            if(newX>-1&&newX<N&&newY>-1&&newY<N){
                if(ans[newX][newY]){
                    dfs(newX, newY)
                }
            }
        }
    }
    //console.log(cnt)
    if(cnt>maxcnt){
        maxcnt = cnt
    }

}

console.log(maxcnt)