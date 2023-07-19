class Queue{
    constructor(){
        this.storage = {}
        this.head = 0
        this.tail = 0
        this.length = 0
    }
    
    push(ele){
        this.storage[this.tail] = ele
        this.tail ++
        this.length ++
    }

    shift(){
        const removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head ++
        this.length --
        return removed
    }
}

const fs = require('fs')
const inp = fs.readFileSync('./2206벽부수고이동/input.txt').toString().trim().replaceAll('\r','').split('\n')
const [N, M] = inp[0].split(' ').map(e=>+e)
const walls = inp.slice(1).map(str=>str.split('').map(ele=>+ele))
//console.log(walls)

const bfs = new Queue()
bfs.push(0)
bfs.push(0)
bfs.push(true)

const visited = Array.from(Array(N),()=>new Array(M).fill(0))
const visitedBroken = Array.from(Array(N),()=>new Array(M).fill(0))
visited[0][0] = 1
visitedBroken[0][0] = 1

let x,y,isBreak
const dx = [0,1,0,-1]
const dy = [1,0,-1,0]


// visited check 어떻게 하지?
// for문 안에서 추가로 벽이 막혀 있을 경우 visitedBroken check? 벽이 뚫려
while(bfs.length){
    ;[x,y,isBreak] = [bfs.shift(),bfs.shift(),bfs.shift()]
    //console.log(x,y,isBreak)

//    if(x===(N-1)&&y===(M-1)) continue

    for(let i=0; i<4; i++){
        const [newX,newY] = [x+dx[i],y+dy[i]]
        //console.log(newX,newY)
        if(newX<0||newX>N-1||newY<0||newY>M-1) continue
        //벽이 막혀 있는 경우
        if(walls[newX][newY]){
            // 부수는 경우
            if(isBreak){
                if(visited[newX][newY]) continue
                visitedBroken[newX][newY] = visited[x][y] + 1

                bfs.push(newX)
                bfs.push(newY)
                bfs.push(false)
                continue
            }else{
                // 벽이 있으나, isBreak가 false인 경우 
                continue
            }
        }
        // 벽이 뚫려 있는 경우
        // isBreak 가 true면 visited 사용, false면 visitedBroken 사용 
        if(isBreak){
            if(visited[newX][newY]) continue
            visited[newX][newY] = visited[x][y] + 1
        }else{ // 안부수는 경우
            // 벽이 뚫려있는 곳을 가는데, isBreak가 false 이다. 그럼 두가지 상태로 나뉜다. 방금전에 break를 하고왔거나(visitedBroken[x][y]참조,), break를 진작에 썼거나(visitedBroken[x][y])
            if(visitedBroken[newX][newY]) continue
            visitedBroken[newX][newY] = visitedBroken[x][y] + 1
        }
        bfs.push(newX)
        bfs.push(newY)
        bfs.push(isBreak)
        
    }

}

//console.log(visited)
//console.log(visitedBroken)
if(visited[N-1][M-1] && visitedBroken[N-1][M-1]){
    console.log(Math.min(visited[N-1][M-1],visitedBroken[N-1][M-1]))
}else if(!visited[N-1][M-1] && !visitedBroken[N-1][M-1]){
    console.log(-1)
}else{
    console.log(Math.max(visited[N-1][M-1], visitedBroken[N-1][M-1]))
}
