// 1,000,000 이니까 n^2 는 안되고 nlogn까지 가능
/*
매일 세가지 중 한 행동
1. 주식 하나를 산다
2. 원하는 만큼 가지고 있는 주식을 판다
3. 아무것도 안한다

그럼 오른쪽부터 순회하며 가장 큰 수를 가진 배열을 가짐
[10, 7, 6]
[7 ,6 ,-1]

[3, 5, 9]
[9 ,9 ,-1]

그럼 시간복잡도 O(n+n)으로 가능

[1,1,3,1,2]
[3,3,2,2,-1]
*/

const fs = require('fs')
const filepath = process.platform === 'linux' ? 'dev/stdin' : '11501주식/input.txt'
const inp = fs.readFileSync(filepath, 'utf8').trim().replaceAll('\r','').split('\n')
const T = +inp[0]
let ptr = 1
let ans = []
for(let i=0; i<T; i++){
  const N = +inp[ptr++]
  const ary = inp[ptr++].split(' ').map(n=>+n)
  const maxAry = new Array(N).fill(-1)
  for(let i=N-2; i>=0; i--){
    maxAry[i] = Math.max(maxAry[i+1],ary[i+1])
  }

  let cnt = 0
  for(let i=0; i<N; i++){
    if(maxAry[i]>ary[i]) cnt += maxAry[i]-ary[i]
  }
  ans.push(cnt)
}

console.log(ans.join('\n'))