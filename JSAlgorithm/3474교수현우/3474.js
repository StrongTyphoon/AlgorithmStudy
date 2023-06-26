const fs = require('fs')
const inp = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(ele=>+ele)

const inpAry = inp.slice(1)

let ansary = []
let num2 = 0
let num5 = 0
for(let num of inpAry){
    num2 = 0
    num5 = 0
    for(let i=2; i<=num; i *= 2){
        num2 +=  Math.floor(num/i)
    }
    for(let j=5; j<=num; j *= 5){
        num5 += Math.floor(num/j)
    }
    ansary.push(Math.min(num2,num5))
}

console.log(ansary.join('\n'))

