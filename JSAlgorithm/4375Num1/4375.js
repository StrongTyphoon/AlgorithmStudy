const inp = require('fs').readFileSync('./4375Num1/input.txt').toString().split('\n').map(Number)
const len = inp.length

for(let i=0; i<len; i++){
    const integer = inp[i]
    let one = '1'
    
    while(1){
        if(!(Number(one)%integer)){
            console.log(one.length)
            break
        }
        one += '1'
    }

}
