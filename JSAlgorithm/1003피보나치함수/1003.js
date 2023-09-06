const fs = require('fs')
const filePath = process.platform === "linux" ? 'dev/stdin' : '1003피보나치함수/input.txt'
const inp = fs.readFileSync(filePath).toString().trim().replaceAll('\r','').split('\n')

// test case T와 40 이하의 수를 받는다. 0.25초 제한이므로 그냥 재귀로 풀어도 될 것 같긴한데,
// 같은 수가 계속 반복된다는 점에서 메모이제이션을 사용할 수 있을 것 같다.

const inpAry = inp.slice(1).map(str=>+str)
const maxNum = Math.max(...inpAry)

const dp0 = new Array(maxNum+1)
const dp1 = new Array(maxNum+1)
dp0[0] = 1
dp0[1] = 0
dp1[0] = 0
dp1[1] = 1

for(let i=2; i<=maxNum; i++){
  dp0[i] = dp0[i-1] + dp0[i-2]
  dp1[i] = dp1[i-1] + dp1[i-2]
}

let ans = []
for(let idx of inpAry){
  ans.push(dp0[idx]+" "+dp1[idx])
}

console.log(ans.join('\n'))