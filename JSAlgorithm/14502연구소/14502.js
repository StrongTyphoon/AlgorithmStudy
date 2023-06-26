const fs = require('fs')
const inp = fs.readFileSync('./14502연구소/input.txt').toString().trim().split('\n')
const [N,M] = inp[0].split(' ').map(Number)
const inpAry = inp.slice(1).map(ele=>ele.split(' ').map(e=>+e))

// 3개의 벽을 3중for문을 돌려 하나씩 다 해보는 수 밖에 ? 최대 빈칸은 64개고 25만번 정도의 탐색을 하면서 64번의 인덱싱이 있으니까 얼추 X천만 정도 실행될 것이다.

function solveiter(Ary){
    for(let i=0; i<N;i++){
        for(let j=0; j<M; j++){
            if(inpAry[i][j]===2){
                search(i,j)
            }
        }
    }

    function search(i,j){
        const delta = [[1,0],[0,1],[-1,0],[0,-1]]
        for(const [dx, dy] of delta){
            const [x, y] = [i+dx, j+dy]
                if(x>-1&&x<N&&y>-1&&y<M){
                    if(Ary[x][y]===0){
                        Ary[x][y] = 2
                        search(x,y)
                    }
                }
        }
    }
    let cnt = 0;
    for(let i=0; i<N; i++){
        for(let j=0; j<M; j++){
            if(Ary[i][j]===0){
                cnt++
            }
        }
    }
    return cnt

}

function solve(){
    const zeroXY = []
    const ansary = []
    for(let i=0; i<N;i++){
        for(let j=0; j<M; j++){
            if(inpAry[i][j] === 0){
                zeroXY.push([i,j])
            }
        }
    }
//console.log(zeroXY)//0, 4,16
    const len = zeroXY.length
    let ary = []
    for(let i=0; i<len; i++){
        for(let j=i+1; j<len; j++){
            for(let k=j+1; k<len; k++){
                ary = JSON.parse(JSON.stringify(inpAry))
                ary[zeroXY[i][0]][zeroXY[i][1]] = 1
                ary[zeroXY[j][0]][zeroXY[j][1]] = 1
                ary[zeroXY[k][0]][zeroXY[k][1]] = 1
                //console.log(ary)
                //console.log(i,j,k)
                ansary.push(solveiter(ary))
                //console.log(ansary[ansary.length-1])
            }
        }
    }

    let max = 0
    for(let i=0; i<ansary.length;i++){
        if(ansary[i]>max){
            max = ansary[i]
        }
    }
    console.log(max)
}
solve()
