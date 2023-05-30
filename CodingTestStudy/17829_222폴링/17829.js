const fs = require('fs')
const inp = fs.readFileSync('17829_222폴링/input.txt').toString().trim().split('\n')
let N = +inp[0]
let inpAry = inp.slice(1).map(ary=> ary.split(' ').map(e=>+e))  

const polling = (ary)=>{
    const len = ary.length/2
    const retAry = Array.from(Array(len),()=> new Array(len).fill(0))
    let sortAry = []
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            sortAry.push(ary[i*2][j*2], ary[i*2+1][j*2], ary[i*2][j*2+1], ary[i*2+1][j*2+1])
            sortAry.sort(function(a,b){return a-b})
            retAry[i][j] = sortAry[2]
            sortAry = []
        }
    }

    return retAry

}

for(let j=0; j<Math.log(N); j++){
    inpAry = polling(inpAry)
}
console.log(inpAry[0][0])