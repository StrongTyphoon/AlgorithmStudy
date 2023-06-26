//https://www.acmicpc.net/problem/15686
//0은 빈칸, 1은 집, 2은 치킨집이다. 두 사이 거리는 x좌표차 + y좌표차이다.
const fs = require('fs')
const inp = fs.readFileSync('dev/stdin').toString().trim().replaceAll('\r','').split('\n')
const [N,M] = inp[0].split(' ').map(e=>+e)
const inpAry = inp.slice(1).map(arr=>arr.split(' ').map(e=>+e))

const house = []
const chicken = []

for(let i=0;i<N;i++){
    for(let j=0; j<N; j++){
        if(inpAry[i][j]===1){
            house.push([i,j])
        }
        else if(inpAry[i][j]===2){
            chicken.push([i,j])
        }
    }
}

const getMinDistance = ()=>{
    let sum = 0
    house.forEach(([hx,hy])=>{
        let min = 99999
        chicken.forEach((_,index)=>{
            if(check[index] === true){
                const [cx,cy] = chicken[index]
                min = Math.min(min,Math.abs(hx-cx)+Math.abs(hy-cy))
            }
        })
        sum += min
    })
    return sum
}
const check = new Array(chicken.length).fill(false)
let answer = Infinity

const DFS = (idx, cnt)=>{
    if(cnt === M){
        answer = Math.min(answer,getMinDistance())
        return
    }
    else{
        for(let i=idx; i<chicken.length; i++){
            if(check[i]===true) continue
            check[i] = true
            DFS(i,cnt+1)
            check[i] = false
        }
    }
}

DFS(0,0)
console.log(answer)

// M개 만큼의 치킨집을 check 배열에 true로 나타냄 by DFS
// 각 집별로 치킨집으로부터 최소 거리 체크하고 그 합들들 리턴 by getMinDistance