
const fs = require('fs')
const inp = fs.readFileSync('./4179불/input.txt').toString().replaceAll('\r','').split('\n')
const [n,m] = inp[0].split(' ').map(e=>+e)
const inpAry = inp.slice(1).map(str=>str.split(''))

//console.log(n,m,inpAry)

const fire = Array.from(Array(n),()=>new Array(m).fill(0))
const visited = Array.from(Array(n),()=>new Array(m).fill(0))
const dx = [1,0,-1,0]
const dy = [0,1,0,-1]
const queue = []
const fireQueue = []
let flag = false
let ans = 0

for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        if(inpAry[i][j] ==='F'){
            fire[i][j] = 1
            fireQueue.push(i,j)
        }
        else if(inpAry[i][j]==='J'){
            queue.push(i,j)
        }
    
    }
}

while(1){
    // 지훈 이동
    const len = queue.length/2
    if(len === 0) break
    for(let i=0; i<len; i++){
        const x = queue.shift()
        const y = queue.shift()
        if(fire[x][y]) continue
        for(let idx = 0; idx<4;idx++){
            const [newX, newY] = [x+dx[idx], y+dy[idx]]
            if(newX>n-1||newX<0||newY>m-1||newY<0){
                ans = visited[x][y]+1
                flag = true
            }
            else{
                if(visited[newX][newY]) continue
                if(inpAry[newX][newY] == '#') continue
                if(fire[newX][newY]) continue
               //console.log(newX,newY)
                visited[newX][newY] = visited[x][y] + 1
                queue.push(newX,newY)
            }
        }
       //console.log('visited',visited)
    }
    
    if(flag){
        break
    }

    // 불 이동
    
    const firelength = fireQueue.length/2
    for(_=0;_<firelength;_++){
        const fx = fireQueue.shift()
        const fy = fireQueue.shift()
        for(let idx=0; idx<4;idx++){
            const [fireX, fireY] = [fx+dx[idx],fy+dy[idx]]
            if(fireX>n-1||fireX<0||fireY>m-1||fireY<0) continue
            if(inpAry[fireX][fireY]==='#') continue
            if(fire[fireX][fireY]) continue
            fire[fireX][fireY] = 1
            fireQueue.push(fireX,fireY)
        }
        //console.log('fire',fire)
    }
    


}

if(!flag){
    console.log('IMPOSSIBLE')
}
else{
    console.log(ans)
}