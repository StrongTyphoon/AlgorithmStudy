const fs = require('fs')
const filePath = process.platform === "linux"? 'dev/stdin' : 'input.txt'
const inp = fs.readFileSync(filePath).toString().replaceAll('\r','').trim().split('\n')
const [N,M]= inp[0].split(' ').map(n=>+n)
const inpAry =  inp[1].split(' ').map(n=>+n)

let start = 0
let end = 2_000_000_000

while(start <= end){
  if(start === end) break
  let mid = Math.floor((start+end)/2)

  let treeLength = 0
  for(let height of inpAry){
    // height - mid > 0 일 경우 ++
    if(height > mid){
      treeLength += height - mid
    }
  }

  if(treeLength < M){
    end = mid - 1
  }else{
    start = mid + 1
  }
}

console.log(end)