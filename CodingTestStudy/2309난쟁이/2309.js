const inp = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(ele=>{return +ele})

inp.sort((a,b)=>{return a-b})
//console.log(inp)

function findSumAry(ary){
    let sum = 0
    for(let i=0; i<ary.length; i++){
        sum += ary[i]
    }
    return sum
}

const twoSum = findSumAry(inp) - 100
let a,b
//console.log(twoSum)

for(let i=0; i<9; i++){
    for(let j=i+1; j<9; j++){
        if(inp[i]+inp[j] === twoSum){
            [a,b] = [i,j]
        }
    }
}

for(let i=0; i<9; i++){
    if(i !== a && i !== b){
        console.log(inp[i])
    }
}