const fs = require('fs')
const inp = fs.readFileSync('dev/stdin').toString().trim().replaceAll('\r','').split('\n')
const loop = +inp[0]
let ptr = 1

for(let i=0; i<loop; i++){
    const dic = {}
    const num = +inp[ptr++]
    for(let j=0; j<num; j++){
        const [clothes, kind] = inp[ptr++].split(' ')
        if(dic.hasOwnProperty(kind)){
            dic[kind] ++
        }
        else{
            dic[kind] = 1
        }
    }

    const value = Object.values(dic)

    let ans = 1
    for (let i of value){
        ans *= i+1
    }
    ans -= 1

    console.log(ans)

}


