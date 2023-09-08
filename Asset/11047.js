const fs = require('fs')
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt'
const inp = fs.readFileSync(filePath).toString().trim().replaceAll('\r','').split('\n')
const [N, cost] = inp[0].split(' ').map(n=>+n)
const inpAry = inp.slice(1).map(str=>+str)

let ans = 0
let rest = cost
for(let i=inpAry.length-1; i>=0; i--){
  if(inpAry[i]<=rest){
    const temp =  Math.floor(rest / inpAry[i])
    rest -= temp*inpAry[i]
    ans += temp
  }
  if(rest === 0){
    break
  }
}

console.log(ans)