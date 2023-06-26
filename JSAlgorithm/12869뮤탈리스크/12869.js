// 문제풀이에 감을 못잡아 답을 찾아봄

const fs = require('fs')
const inp = fs.readFileSync('./12869뮤탈리스크/input.txt').toString().replaceAll('\r','').split('\n')
const N = +inp[0] // n은 1~3 사이 자연수
const inpAry = inp[1].split(' ').map(e=>+e)
const dp = new Array(61*61*61).fill(0)      // 체력이 x,y,z => dp[x*61*61+y*61+z] 또는 dp[x*] 
let [inp1,inp2,inp3] = [0,0,0]

switch(N){
    case 1:
        inp1 = inpAry[0]
        break
    case 2:
        inp1 = inpAry[0]
        inp2 = inpAry[1]
        break
    case 3:
        inp1 = inpAry[0]
        inp2 = inpAry[1]
        inp3 = inpAry[2]
        break
}

const dfs = (a,b,c)=>{
    const dfs2 = (x,y,z)=>{
        x < 0? x=0: x=x
        y < 0? y=0: y=y
        z < 0? z=0: z=z

        if(!x && !y && !z){
            if(dp[0] > dp[a*3721+b*61+c]+1||!dp[0]) {
                dp[0] = dp[a*3721+b*61+c]+1
            }
            //console.log('return')
            return
        }
        if(!dp[x*3721+y*61+z]){
            dp[x*3721+y*61+z] = dp[a*3721+b*61+c] + 1
            //console.log('dfs because 0',x,y,z)
            dfs(x,y,z)
        }
        else{
            if(dp[x*3721+y*61+z] > dp[a*3721+b*61+c]+1){
                dp[x*3721+y*61+z] = dp[a*3721+b*61+c]+1
                //console.log('dfs + 1',x,y,z)
                dfs(x,y,z)
            }
        }
    }

    dfs2(a-9,b-3,c-1)
    dfs2(a-9,b-1,c-3)
    dfs2(a-3,b-9,c-1)
    dfs2(a-3,b-1,c-9)
    dfs2(a-1,b-3,c-9)
    dfs2(a-1,b-9,c-3)
    

}

dfs(inp1,inp2,inp3)
console.log(dp[0])

//
// dp 값이 0 이면 무조건 현재 값에 +1 해서 넣는다
// dp 값이 n 이면 현재 값+1과 비교하여 더 작은 수를 넣는다. 현재값 +1이 더 작을 경우면 실행한다.
// dp[0] 값이 정답이다
// dp