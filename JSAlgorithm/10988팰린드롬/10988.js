const inp = require('fs').readFileSync('dev/stdin').toString().trim()
//console.log(inp)

let ans = 1
const stack = []
for(let str of inp){
    stack.push(str)
}

for(let str of inp){
        if(stack.pop() !== str){
            ans = 0
        }
}

console.log(ans)