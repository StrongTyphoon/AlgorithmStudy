// https://www.acmicpc.net/problem/2468

const fs = require('fs')
const inp = fs.readFileSync("./2468안전영역/input.txt").toString().replaceAll('\r','').split('\n')

const n = +inp[0]
const inpAry = []
let max = 0
for(let i=0; i<n; i++){
    inpAry.push(inp[i+1].split(' ').map(ele=>{
        if (max<ele){
            max = ele
        }
        return +ele})) 
}

//console.log(inpAry)
//console.log(max)

//1. cnt = 1 부터 시작해서 2중 탐색을 하여 데이터가 cnt보다 큰지 check
//2. cnt보다 큰 데이터 값은 2중배열 notSwim에 true, 나머지는 false
//3. notSwim 2중 전탐색하여 2중배열 notSwim이 true이고 visit이 false 면 ans +1 
// 그 위치에서 dfs 그리고 dfs 된 걸 visit에 체크
//4. notSwim이 true일때 visit이 true이면 continue
//5. cnt +1 해서 반복, O(n^3) 최대 100만번 case를 할 예정

let cnt = 0   // 1이하는 잠기는 경우
const alpha = [[0,1], [0,-1], [1,0], [-1,0]]
let ans = 0
for(let total=0; total<max+1; total++){
    let smallAns = 0
    const notSwim = new Array(n).fill(false).map(ele=>{return new Array(n).fill(false)})
    const visit = [...notSwim]
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(inpAry[i][j] > cnt){
                notSwim[i][j] = true
            }
        }
    }

    const stack = []
    //console.log(cnt)
    //console.log(notSwim)
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            //전조사
            if(notSwim[i][j]){
                // 방문하지 않은 것 발견
                if(!visit[i][j]){
                    smallAns += 1
                    stack.push([i,j])
                    visit[i][j] = true
                    //console.log(i,j, 'smallANS ++')
                    //console.log('visit:',visit)
                    //bfs
                    while(stack.length){
                        const [x,y] = stack.pop()
                        for(const [dx,dy] of alpha){
                            const [nx, ny] = [x+dx, y+dy]
                            //range check
                            if(nx>-1&&nx<n&&ny>-1&&ny<n){
                                // true인 것만 check
                                if(notSwim[nx][ny]){
                                    // 첫 방문하는 것 전부 true로 변경
                                    if(!visit[nx][ny]){
                                        visit[nx][ny] = true
                                        stack.push([nx, ny])
                                        //console.log([nx,ny])
                                    }
                                }
                            }
                        }
                    }
                    
                }
            }
        }
    }
    //console.log(cnt, 'ans:' ,smallAns)
    if(ans<smallAns){
        ans = smallAns
    }
    cnt ++
}

console.log(ans)