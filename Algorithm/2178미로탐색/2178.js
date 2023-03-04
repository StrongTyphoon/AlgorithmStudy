const fs = require('fs')
const inp = fs.readFileSync('./2178미로탐색/input.txt').toString().replaceAll('\r','').split('\n')

const [N,M] = inp[0].split(' ').map(ele=>{return Number(ele)})

const inpAry = []
inpAry[0] = new Array(M+1).fill(0)
for(let i=1; i<=N; i++){
    inpAry[i] = 0+inp[i]
}

//console.log(inpAry) // (1,1) 부터 (M,N) 까지 가야함 

const queue = []
const visit = new Array(N+1).fill(false).map(ele => {return new Array(M+1).fill(false)})
const alphacase = [[1,0],[0,1],[-1,0],[0,-1]]
queue.push([1,1,1]) //(1,1) 위치와 day 1 을 넣음

while(queue.length){
    //console.log(queue)
    const [x,y,day] = queue.shift()
    if(x === M && y === N){
        //console.log("정답:",x,y,day)
        console.log(day)
        break;
    }

    for(const [alX, alY] of alphacase){
        const [newX, newY] = [x+alX, y+alY]
        if(newX > 0 && newX < M+1 && newY>0 && newY < N+1){
            if(inpAry[newY][newX]==1){
                if(!visit[newY][newX]){
                   // console.log(x,y,day)
                    visit[newY][newX] = true
                    queue.push([newX, newY, day+1])
                }
            }
            
        }
        
    }

}