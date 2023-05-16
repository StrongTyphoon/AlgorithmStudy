const fs = require('fs')
const inp = fs.readFileSync('./12851숨바꼭질2/input.txt').toString().replaceAll('/r','')
const [N,M] = inp.split(' ').map(e=>+e)
console.log(N,M)
// 1초후에 x-1 , x+1, 2*x 
// dp 로 시간 부족한건 잘라내고,
// 가장빠른 시간에 도착하는 개수도 나타내야함
// dp2로 만들어서 dp 값이 같으면 dp 2+= dp2이전 시켜줌
// dfs가 아니라 bfs로 풀어야함 아니면 순서가 꼬여서 dpCnt 값이 제대로 도달하지 못함

const dpTime = new Array(100001).fill(0)
const dpCnt = new Array(100001).fill(0)
const queue = [N]

while(queue.length){
    const temp = queue.shift()

}

dpTime[N] = 0
console.log(dpTime)
console.log(dpCnt)

