const fs = require('fs')
const inp = fs.readFileSync('dev/stdin').toString().split('\n')
const [N, M] = inp[0].split(' ').map(ele=>+ele)
const TC = +inp[1]

let ans = 0
const range = new Array(N).map((_,idx)=>{idx+1})
let [min,max] = [1,M+1] // M=1이면 1,2 1 <=goal <2
for(let i=0; i<TC; i++){
    const goal = +inp[i+2]

    while(1){
        if(goal>=max){       //max 2, goal 3, => max3, goal3, => max4, goal4
            max++
            min++
            ans++

        }
        else if(goal<min){  // min 5, goal 3 => min 4, goal 3 => min3, goal3
            min--
            max--
            ans++
        }
        else{
            
            break
        }
    }
}

console.log(ans)
