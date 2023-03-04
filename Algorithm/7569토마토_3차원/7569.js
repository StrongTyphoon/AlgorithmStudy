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
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.length --
        this.head ++
        return removed
    }

}
const fs = require('fs')
const inp = fs.readFileSync('./7569토마토_3차원/input.txt').toString().replaceAll('\r','').split('\n')
const [col, row, height] = inp[0].split(' ').map(ele=>{return Number(ele)})
const inpArray = []
const visit = []

for(let z=0; z<height; z++){
    const tempArray = []
    const visitArray = []
    for(let y=0; y<row; y++){
        tempArray.push(inp[row*z+1+y].split(' ').map(ele=>{return Number(ele)}))
        visitArray.push(new Array(col).fill(false))
    }
    inpArray.push(tempArray)
    visit.push(visitArray)
}
const queue = new Queue

// 전조사  1인 것들 day 0 으로 넣기 최대 10만번
for(let z=0; z<height; z++){
    for(let y=0; y<row; y++){
        for(let x=0; x<col; x++){
            if(inpArray[z][y][x] === 1){
                queue.push([x,y,z,0])   //좌표와 day 넣음
                visit[z][y][x] = true
            }
        }
    }
}

const alpha = [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]
let ansDay = 0
while(queue.length){
    const [X,Y,Z,day] = queue.shift()
    
    for(let [alX,alY,alZ] of alpha){
        const [newX, newY, newZ] = [X+alX, Y+alY, Z+alZ]
        if(-1<newX && newX<col && -1<newY && newY<row && -1<newZ && newZ<height){
            if(!visit[newZ][newY][newX]){
                if(inpArray[newZ][newY][newX] === 0){
                    queue.push([newX,newY,newZ,day+1])
                    visit[newZ][newY][newX] = true
                }
            }
        }
    }
    ansDay = day
    
}
let ans = true

for(let z=0; z<height; z++){
    for(let y=0; y<row; y++){
        for(let x=0; x<col; x++){
            if(!visit[z][y][x]){
                if(inpArray[z][y][x] === 0) {
                    ans = false
                }
            }
        }
    }
}

if(ans){
    console.log(ansDay)
}
else{
    console.log(-1)
}