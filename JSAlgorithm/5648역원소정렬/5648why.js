const fs = require('fs')
const inp = fs.readFileSync('5648역원소정렬/input.txt').toString().replaceAll('\r','').trim().split('\n').map(ary=>ary.trim())

let inpAry = []

// 모든 수를 거꾸로 받기
for(let str of inp){
  str.split(' ').forEach(str=>{
    let tempStr = ''
    for(let i=str.length-1; i>=0; i--){
      tempStr += str[i]
    }
    inpAry.push(+tempStr)
  })
}
// 맨 첫번째 수를 slicing
inpAry = inpAry.slice(1)

// 정렬 후 출려
console.log(inpAry.sort(function(a,b){return a-b}).join('\n'))