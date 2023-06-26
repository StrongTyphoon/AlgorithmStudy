const fs = require('fs')
const [N, ...inpAry] = fs.readFileSync('./9012괄호/input.txt').toString().trim().replaceAll('\r','').split('\n')

const ans = []
for(const str of inpAry){
    if(chkVPS(str)){
        ans.push('YES')
    }
    else{
        ans.push('NO')
    }
}
console.log(ans.join('\n'))

function chkVPS(str){
    const stack = []
    for(s of str){
        if(s==='('){
            stack.push('(')
        }
        else{
            if(!stack.length){
                return false
            }
            if(stack.pop() === '('){
                continue
            }
        }
    }
    if(stack.length){
        return false
    }
    return true
}

