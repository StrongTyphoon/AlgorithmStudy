/*
ACAYKP
A C A Y K P
AC AA AY AK AP
CA CY CK CP
AY AK AP
YK YP
ACA ACY ACK ACP AAY AAK AAP ...
ACAK
...

다 계산하는게 아무리 1000자이지만 
( 1000C1 + 1000C2 + ... 1000C1000 ) * ( 1000C1 + 1000C2 + ... 1000C1000 ) 경우
1000*1000 = 100만이므로 1000만번의 연산을 넘는다(0.1초) => 완전탐색 X
*/



const fs = require('fs')
const filePath = process.platform === "linux" ? 'dev/stdin' : '9251LCS/input.txt'
const inp = fs.readFileSync(filePath).toString().trim().replaceAll('\r','').split('\n')

const [str1, str2] = inp

const dp = new Array(str2.length + 1).fill(0).map(()=>new Array(str1.length + 1).fill(0))

for(let i=1; i<str2.length+1; i++){
  for(let j=1; j<str1.length+1; j++){
    if(str2[i-1]===str1[j-1]){
      dp[i][j] = dp[i-1][j-1] + 1
    }else{
      dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
    }
  }
}

console.log(dp)