// 수열의 크기가 100만이다. O(nlogn) 이하로 시간복잡도를 잡아야한다
// 2중스택으로 뒤에서부터 하나씩 탐색하는데, 뒤에 이중스택의 max값을 따로 저장한다

const fs = require('fs')
let [N, ...inpAry] = fs.readFileSync('dev/stdin').toString().split('\n')
inpAry = inpAry[0].split(' ').map(e=>+e)
N = +N

const [stackFront, stackBack] = [[...inpAry], []]
let temp,length
let max = -1
const ans = new Array(N).fill(-1)
let ptr = N-1

while(stackFront.length){
    temp = stackFront.pop()
    if(max>temp){
        length = stackBack.length
        for(let i=length-1; i>=0; i--){
            if(stackBack[i]>temp){
                ans[ptr] = stackBack[i]
                break
            }
        }
    }
    else{
        max = temp
    }

    stackBack.push(temp)
    ptr--
}

console.log(ans.join(' '))