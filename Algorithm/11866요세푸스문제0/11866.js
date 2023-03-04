// https://www.acmicpc.net/problem/11866
// 1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다. 이제 순서대로 K번째 사람을 제거한다. 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다. 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다. 원에서 사람들이 제거되는 순서를 (N, K)-요세푸스 순열이라고 한다. 예를 들어 (7, 3)-요세푸스 순열은 <3, 6, 2, 7, 5, 1, 4>이다.
// 입력 : 첫째 줄에 N과 K가 빈 칸을 사이에 두고 순서대로 주어진다. (1 ≤ K ≤ N ≤ 1,000)
// 출력 : <3, 6, 2, 7, 5, 1, 4>

// queue 사용하면 좋을듯? 특히 그냥 원형 큐 넣으면 엄청 빠르겠다.

const fs = require('fs')
//inp = fs.readFileSync('./11866요세푸스문제0/input.txt').toString().split(' ')
inp = fs.readFileSync('./dev/stdin').toString().split(' ')
n = Number(inp[0])
r = Number(inp[1])
ans = []

let queue = []
for (let i = 1; i < n+1; i++){
    queue.push(i)
}

console.log()
while(queue.length > 0){
    for(let i = 0; i<r-1; i++){
        temp = queue.shift()
        queue.push(temp)
    }
    temp = queue.shift()
    ans.push(temp)
}

process.stdout.write('<')
for (let i=0; i<n-1; i++){
    process.stdout.write(ans[i].toString()+', ')
}
process.stdout.write(ans[n-1].toString())
process.stdout.write(">")


