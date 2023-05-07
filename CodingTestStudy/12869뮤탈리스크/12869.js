// 문제풀이에 감을 못잡아 답을 찾아봄

const fs = require('fs')
const inp = fs.readFileSync('./12869뮤탈리스크/input.txt').toString().replaceAll('\r','').split('\n')
const N = +inp[0] // n은 1~3 사이 자연수
const inpAry = inp[1].split(' ').map(e=>+e)
const dp = new Array(61*61*61).fill(0)      // 체력이 x,y,z => dp[x*61*61+y*61+z] 또는 dp[x*] 

const dfs = (x,y,z) => {

    const chk = (a,b,c)=>{  //a,b,c가 이동할 경로, x,y,z가 이동전 경로
        a = a<=0?0:a
        b = b<=0?0:b
        c = c<=0?0:c
        if(dp[a*3721+b*61+c] < dp[x*3721+y*61+z] + 1){
            dp[a*3721+b*61+c] = dp[x*3721+y*61+z] + 1
            return true
        }

        return false
    
    }

    if(chk(x-9,y-3,z-1)){
        dfs(x-9,y-3,z-1)
    }
    if(chk(x-9,y-1,z-3)){
        dfs(x-9,y-1,z-3)    
    }
    if(chk(x-3,y-9,z-1)){
        dfs(x-3,y-9,z-1)
    }
    if(chk(x-3,y-1,z-9)){
        dfs(x-3,y-1,z-9)
    }
    if(chk(x-1,y-9,z-3)){
        dfs(x-1,y-9,z-3)
    }
    if(chk(x-1,y-3,z-9)){
        dfs(x-1,y-3,z-9)
    }

}

dfs(5, 40, 2)
console.log(dp)

