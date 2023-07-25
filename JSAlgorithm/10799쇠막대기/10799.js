const fs = require('fs')
const str = fs.readFileSync('./10799쇠막대기/input.txt').toString().trim()

let ans = 0
let depth = 0
let prevS = ''

for(s of str){
    //console.log(s)
    
    if(s === '('){
        depth += 1
    }else if(s ===')'){

        if(prevS === '('){
            depth -= 1
            ans += depth
        }
        else{
            ans += 1
            depth -= 1
        }
    }


    prevS = s
}

console.log(ans)