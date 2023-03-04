const fs = require('fs')
const inp = fs.readFileSync("./1261알고스팟/input.txt").toString().replace(/\r/g,'').split('\n')
const [n, m] = inp[0].split(' ').map(ele=>Number(ele))
const inpary = new Array(m).fill(-1).map(()=> new Array(n).fill(-1))

for(let i=1; i<=m; i++){
    for(let j=0; j<n; j++){
        inpary[i-1][j] = Number(inp[i][j])
    }
}

const queue = []
queue.push([0,0,0])

const visit = new Array(m).fill(false).map(()=>new Array(n).fill(false))
const add = [[0,1],[1,0],[-1,0],[0,-1]]

while(queue.length){
    const [x, y, day] = queue.shift()

    if(x===n-1 && y===m-1){
        console.log(day)
        break;
    }
    
    for(Add of add){
            const nextX = x + Add[0]
            const nextY = y + Add[1]
            if(0<=nextX && nextX<n && 0<=nextY && nextY<m){
                if(!visit[nextY][nextX]){
                    if (inpary[nextY][nextX]){  //벽이 막혀있을 경우, 
                        visit[nextY][nextX] = true
                        queue.push([nextX,nextY,day+1])
                        
                    }
                    else{   // 벽이 뚫려있을 경우, priority queue로서 먼저 집어넣음
                        visit[nextY][nextX] = true
                        queue.unshift([nextX,nextY,day])
                        
                    }
                }
            }
        }
}
