// 잃어버린 괄호

const fs = require('fs')
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt'
const inp = fs.readFileSync(filePath).toString().trim().replaceAll('\r','')

const exp = []
let num =""
for(let s of inp){
  if(s === "-" || s==="+"){
    if(num) exp.push(+num)
    num = ""
    exp.push(s)
  }else{
    num += s
  }
}
exp.push(+num)

let ans = 0
const idx = exp.findIndex(val=> val === '-')

if(idx < 0){
  for(let val of exp){
    if(Number.isInteger(val)){
      ans += val
    }
  }
}else{
  for(let i in exp){
    if(i<idx){
      if(Number.isInteger(exp[i])){
        ans += exp[i]
      }
    }else{
      if(Number.isInteger(exp[i])){
        ans -= exp[i]
      }
    }
  }
}

console.log(ans)