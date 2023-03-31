const fs = require('fs')
const inp = fs.readFileSync('dev/stdin').toString().replaceAll('\r','').split('\n')
const TC = +inp[0]
const ansary = []
for(let i=0; i<TC; i++){
    const str = inp[i+1]
    let num = ''
    for(const s of str){
        if(!isNaN(s)){
            num += s
        }
        else{
            if(num){
                ansary.push(BigInt(num))
                num = ''
            }
        }
    }
    if(num){
        ansary.push(BigInt(num))
    }
}

ansary.sort((a,b)=>{
    if(a>b){
        return 1
    }
    else if(a===b){
        return 0
    }
    else{
        return -1
    }
})

console.log(ansary.join('\n').trim())