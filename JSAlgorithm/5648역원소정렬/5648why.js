const fs = require('fs')
const inp = fs.readFileSync('./5648역원소정렬/input.txt').toString().replaceAll('\r','').split('\n').map(ary=>ary.trim())
console.log(inp)
const N = +inp[0].split(' ')[0]
let inpAry = []
for(let str of inp){
  inpAry.push(str.split(' ').map(s=>{
    let retStr = ""
    for(let i=s.length-1 ; i>=0; i--){
      retStr += s[i]
    }
    return +retStr
  }))
}

inpAry = inpAry.slice(1)
console.log(inpAry)