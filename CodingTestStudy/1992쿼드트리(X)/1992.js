const fs = require('fs')
const inp = fs.readFileSync('./1992쿼드트리/input.txt').toString().split('\n')
const N = +inp[0]
const inpAry = inp.slice(1).map(ele=>ele.split('').map(ele=>+ele))

console.log(inpAry)

// n과 왼쪽 모서리 좌표를 받으면 왼쪽 오른쪽 왼쪽아래 오른쪽아래 순으로 탐색하면서 차례대로 log를 찍는다.
const ans = ['(']
const delta = [[0,0],[0,1],[1,0],[1,1]]
function dfs(n,x,y){
    const m = n/2
    if(m === 1){
        ans.push('(',inpAry[x][y],inpAry[x][y+1],inpAry[x+1][y],inpAry[x+1][y+1],')')
        
    }
    else{
        const temp = inpAry[x][y]
        for(let i=x; i<m; i++){
            for(let j=y; j<m; j++){
                if(inpAry[i][j] !== temp){
                    dfs(m,i,j)
                    
                } 
            }
        }
        
    }

}
//복잡하네 ; 
dfs(N,0,0)