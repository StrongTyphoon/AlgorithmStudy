const fs = require('fs')
const inp = fs.readFileSync("easy/input.txt").toString().split(" ").map((ele)=>(Number(ele)))
const ary = [1,1,2,2,2,8]

for(let i=0; i<6; i++){
    process.stdout.write(String(ary[i]-inp[i])+" ")
}
