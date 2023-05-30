// 1초후에 x-1 , x+1, 2*x 
// dp 로 시간 부족한건 잘라내고,
// 가장빠른 시간에 도착하는 개수도 나타내야함
// dp2로 만들어서 dp 값이 같으면 dp 2+= dp2이전 시켜줌
// dfs가 아니라 bfs로 풀어야함 아니면 순서가 꼬여서 dpCnt 값이 제대로 도달하지 못함
// 0 1000000 으로 주어지면 시간이 너무 오래 걸린다. 개에바참치 잘 모르겠다 ..
// M>N인 경우는 그냥 뺄셈으로 계산 가능할듯

const fs = require('fs')
const inp = fs.readFileSync('./12851숨바꼭질2/input.txt').toString().replaceAll('/r','')
const [N,M] = inp.split(' ').map(e=>+e)
//console.log(N,M)

const dpTime = new Array(100001).fill(0)
const dpCnt = new Array(100001).fill(0)
dpCnt[N] = 1
let queue = [0,N]
if(N>M){
    console.log(N-M+'\n'+'1')
}
else{
    while(queue.length){
        const prevpos = queue.shift()
        const pos = queue.shift()
        let skipflag = false
        console.log(pos)
    
        if(pos>3*M) continue
        if(pos&&(M-pos)>3*pos){
            skipflag = true
        }
    
        if(pos===M){
            dpTime[M] = dpTime[M]+1
            dpCnt[pos] += dpCnt[prevpos]
            continue
        }
    
        if(!dpTime[pos]){
            dpTime[pos] = dpTime[prevpos] + 1
            dpCnt[pos] += dpCnt[prevpos]
            
            if(pos>0&&pos<50001){ //-1<2*temp<100001
                queue.push(pos,pos*2)
            }   
    
            if(!skipflag){
                if(pos<100000&&pos>-2){ // -1<temp+1<100001
                    queue.push(pos, pos+1)
                }
                if(pos>0&&pos<100002){ // -1<temp-1<100001
                    queue.push(pos,pos-1)
                }
            }
            
    
        }
        else if(dpTime[pos] === dpTime[prevpos]+1){
            dpCnt[pos] += dpCnt[prevpos]
            continue
        }
    
    
        
    }
    
    console.log(dpTime[M]+'\n'+dpCnt[M])
    console.log(dpTime)
}




// 1. 위치 정보를 queue 에서 꺼냄
// 2. 방문했는 경우 dpCnt현재 += dpCnt 이전 
// 3. 방문 안한 경우 dpCnt 현재 = dpCnt 이전, dpTime 이후 = dpTime 이전
// 5 -> 17 : 5 4 8 16 17
//          : 5 10 9 18 17
