// 1. 0 을 받으면 bfs로 상하좌우에 있는 0이 아닌 숫자를 -1씩 함
// 2. day ++
// 3. 하나라도 0으로 바뀐다면 bfs 조사
// 3-1. 0이 된 빙하를 따로 두번째 bfs 조사 후 2중 배열 visit에 true/false check
// 3-2. 두번째 부터는 visit이 true/ false 인지 확인 후 참 거짓 판별

// 메모리초과 개같은
class Queue{
    constructor(){
        this.storage = {}
        this.head = 0
        this.tail = 0
        this.length = 0
    }
    
    enqueue(ele){
        this.storage[this.tail] = ele
        this.tail ++
        this.length ++
    }

    dequeue(ele){
        const removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head ++
        this.length --
        return removed
    }

    print(){
        var data = ""
        var n = this.head
        while(this.tail>n){
            data = data+this.storage[n]+","
            n++
        }
        return data
    }
}

const fs = require('fs')
const inp = fs.readFileSync('./2573빙산/input.txt').toString().replaceAll('\r','').split('\n')
const [row, col] = inp[0].split(' ').map(ele=>{return Number(ele)})
const inpArray = []

for(let i=0; i<row ; i++){
    inpArray.push(inp[1+i].split(' ').map(ele=>{return Number(ele)}))
}

const queue = new Queue()
const alpha = [[1,0],[-1,0],[0,1],[0,-1]]
let day = 1

while(true){
    let breakbool = false
    // 하루동안 일어날 일
    // 1. inpArray에 0인 겻들을 queue 에 집어넣음
    for(let y=0; y<row; y++){
        for(let x=0; x<col; x++){
            if(inpArray[y][x] === 0){
                queue.enqueue([x,y])
            }
        }
    }
    // 2. queue 에서 하나씩 빼내어 상하좌우에 숫자가 있으면 -1씩 함
    while(queue.length){
        const [X,Y] = queue.dequeue()
        for(let [alX,alY] of alpha){
            const [newX, newY] = [alX+X,alY+Y]
            if(-1<newX&& newX<col&& -1<newY&& newY<row){
                if(inpArray[newY][newX]>0){
                    inpArray[newY][newX] -= 1
                }
            }
        }
        
    }

    // 3. 0이 된 녀석들이 있는지 전 조사
    const visit = new Array(row).fill(false).map(()=>{return new Array(col).fill(false)})
    let first = true
    let zero = true
    for(let y=0; y<row; y++){
        for(let x=0; x<col; x++){
            if(inpArray[y][x] > 0){
                if(inpArray[y][x] !== 0){zero = false}
                if(first){
                    search(x,y,visit)
                    first = false
                }
                else{
                    if(!visit[y][x]){
                        breakbool = true
                        break
                    }
                }
            }
        }
    }
    if(zero){
        breakbool = true
        day = 0
    }
    if(breakbool){
        console.log(day)
        break;
    }
    day++

}

function search(x,y,visit){
    const dfsqueue = new Queue()
    dfsqueue.enqueue([x,y])
    visit[y][x] = true
    while(dfsqueue.length){
        const [i,j] = dfsqueue.dequeue()
        for(let [alX, alY] of alpha){
            const [newI, newJ] = [alX+i,alY+j]
            if(-1<newI&& newI<col&& -1<newJ&& newJ<row){
                if(!visit[newJ][newI]){
                    if(inpArray[newJ][newI]>0){
                        visit[newJ][newI] = true
                        dfsqueue.enqueue([newI,newJ])
                    }
                    
                }
                
            }
        }
    }
}