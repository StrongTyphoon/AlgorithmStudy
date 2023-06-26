// 이중포문으로 하나씩 해봐야함 O(n^2) 이지만 case가 15000 이므로 충분히 가능함

const inp = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
const [num, M, inpAry] = [+inp[0], +inp[1], inp[2].split(' ').map((ele)=>{return +ele})]
//console.log([num, M, inpAry])

let cnt = 0

for(let i=0; i<num; i++){
    for(let j=i+1; j<num; j++){
        if(inpAry[i]+inpAry[j] === M){
            cnt ++
        }
    }
}

console.log(cnt)