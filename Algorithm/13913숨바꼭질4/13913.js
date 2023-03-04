const fs=require('fs')
const [n,k] = fs.readFileSync("./dev/stdin").toString().split(" ").map((ele)=>(Number(ele)))
const visit = Array(100001).fill(0)

function bfs(N){
    const queue = []
    queue.push([N,0])
    visit[N] = 1
    while(queue.length){
        const [cur, time] = queue.shift()
        if(cur === k) return time
        for (next of [cur*2 ,cur-1, cur+1]){
            if(!visit[next]&&next>=0 &&next<=100000){
                visit[next] = cur
                queue.push([next,time+1])
            }
        }
    }
}

const ans = bfs(n)
console.log(ans)
const stack = []
let ele = k

while(true){
    stack.push(ele)
    if(ele === n) {break;}
    ele = visit[ele]
}

while(stack.length){
    process.stdout.write(stack.pop()+' ')
}

//50%즈음 메모리초과 visit 메모리에 0~100000의 수를 100000개를 받는게 메모리 초과의 문젠가?
//재귀말고 반복문으로 해볼까? 함수 호출할때도 메모리를 사용했는거같은데
