const fs = require('fs')
const N = +fs.readFileSync('dev/stdin').toString().trim()

const ans = []

// a를 c로 n개 옮기기
function hanoi(a,b,c,n){
    if(n === 1){
        ans.push(a + " " + c) 
    }else{
        // a에서 b로 n-1개를 옮기고 
        hanoi(a,c,b,n-1)
        // a에서 c로 한개 옮기고
        ans.push(a + " " + c)
        // b에서 c로 n-1개 옮기기
        hanoi(b,a,c,n-1)
    }
}

hanoi(1,2,3,N)
console.log(ans.length+'\n'+ans.join('\n'))