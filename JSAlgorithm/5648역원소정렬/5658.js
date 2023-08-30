// 1000000개니까 nlogn
// Bigint 체크, Edge Case, Trim Case 다 체크했는데 안되네..

const fs = require('fs')
const inp = fs.readFileSync('./5648역원소정렬/input.txt').toString().replaceAll('\r','').split('\n').map(ary=>ary.trim())

const N = +inp[0].split(' ')[0]
let inpAry = []
let ptr = 0

while(1){
  let tempAry
  if(ptr === 0){
    tempAry = inp[ptr++].split(' ').map(str => {
      let retStr = ''
      for(let i=str.length-1; i>=0; i--){
        retStr += str[i]
      }
      return +retStr
    })
    inpAry.push(...tempAry.slice(1))
  }else{
    inpAry.push(...inp[ptr++].split(' ').map(str => {
      let retStr = ''
      for(let i=str.length-1; i>=0; i--){
        retStr += str[i]
      }
      return +retStr
    }))
  }

  if(inpAry.length >= N) break
}

console.log(inpAry.sort(function(a,b){return a-b}).join('\n'))