// stack을 이용하여 짝이 맞으면 없애고, 짝이 안맞으면 스택에 넣어놓고, 최종 결과상 다 맞아떨어지면 good word, 아니면 bad 
const inp = require('fs').readFileSync('./3986좋은단어/input.txt').toString().trim().replaceAll('\r','').split('\n')
const [N, inpAry] = [+inp[0], inp.slice(1)]
//console.log([N, inpAry])

let cnt = 0

for(const str of inpAry){
    const stack = []
    for(const s of str){
        if(!stack.length){
            stack.push(s)
        }
        else{
            const top = stack.pop()
            if(top !== s){
                stack.push(top)
                stack.push(s)
            }
        }
    }
    if(!stack.length){
        cnt++ 
    }
    //console.log(stack)
}

console.log(cnt)