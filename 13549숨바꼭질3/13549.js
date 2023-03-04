const fs=require('fs')
const [n,k] = fs.readFileSync("13549숨바꼭질3/input.txt").toString().split(" ").map((ele)=>(Number(ele)))
const visit = Array(100001).fill(0)

function bfs(N){
    const queue = []
    queue.push([N,0])
    visit[N] = 1
    while(queue.length){
        const [cur, time] = queue.shift()
        if(cur === k) return time
        for (next of [cur*2, cur-1, cur+1]){
            if(!visit[next]&&next>=0 &&next<=100000){
                visit[next]=1
                if(next ===cur*2){
                    queue.unshift([next,time])
                }
                else{
                    queue.push([next,time+1])
                }
            }
        }
    }
}

console.log(bfs(n))