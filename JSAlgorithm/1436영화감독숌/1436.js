const fs = require('fs')
const n = Number(fs.readFileSync('dev/stdin').toString())

let cnt = n
let num = 665

while(cnt > 0){
    num++
    if(String(num).search('666')>-1){
        cnt --
    }
}

console.log(num)
