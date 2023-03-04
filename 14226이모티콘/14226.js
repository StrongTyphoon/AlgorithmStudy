// https://www.acmicpc.net/problem/14226
class Queue{
    constructor(){
        this.storage = {}
        this.front = 0
        this.rear = 0
    }
    
    size() {
        if (this.storage[this.rear] === undefined) {
          return 0
        } else {
          return this.rear - this.rear + 1
        }
      }
      
    add(value) {
    if (this.size() === 0) {
        this.storage['0'] = value
    } else {    
        this.rear += 1
        this.storage[this.rear] = value
    }
    }
    
    popleft() {
    let temp;
    if (this.front === this.rear) {
        temp = this.storage[this.front]
        delete this.storage[this.front]
        this.front = 0
        this.rear = 0
    } else {
        temp = this.storage[this.front]
        delete this.storage[this.front]
        this.front += 1
    }
    return temp;
    }
}

const fs = require('fs')
const inp = fs.readFileSync('./14226이모티콘/input.txt').toString()
const ans = Number(inp)
const queue = new Queue()
const visit = Array.from(new Array(3001), () => new Array(3001).fill(0));
queue.add([1, 0, 0, 0])        // 현재 개수, n초, (0초기값 1현재값저장 2붙여넣기 3 삭제)
visit[1][0]= true   // [x][y] x는 위치, y는 클립보드
let temp


while(queue.size()){
    temp = queue.popleft()
    
    if(temp[0] === ans){
        console.log(temp[1])
        break
    } 
    if (temp[0] && temp[0]<1500){
        switch(temp[2]){
            case 0:
                queue.add([temp[0],temp[1]+1,1,temp[0]]) // 복사
                break
    
            case 1: // 복사시
                if(!visit[temp[0]+temp[3]][temp[3]]){
                    queue.add([temp[0]+temp[3], temp[1]+1, 2, temp[3]])  //붙여넣기
                    visit[temp[0]+temp[3]][temp[3]] = true
                }

                if(!visit[temp[0]-1][temp[3]]){
                    if(temp[0]>2){
                        queue.add([temp[0]-1, temp[1]+1, 3, temp[3]])
                        visit[temp[0]-1][temp[3]] = true
                    }     
                }
                break
                
            case 2: // 붙여넣기시
                queue.add([temp[0],temp[1]+1,1, temp[0]])    // 복사
    
                if(!visit[temp[0]+temp[3]][temp[3]]){
                    if(temp[3]){        
                        queue.add([temp[0]+temp[3],temp[1]+1,2,temp[3]])        //붙여넣기
                        visit[temp[0]+temp[3]][temp[3]] = true
                        }
                }
                if(!visit[temp[0]-1][temp[3]]){
                    if(temp[0]>2){
                        queue.add([temp[0]-1, temp[1]+1, 3, temp[3]])
                        visit[temp[0]-1][temp[3]] = true
                    }     
                }
                break
            case 3: //삭제시
                queue.add([temp[0],temp[1]+1, 1, temp[0]])    // 복사
    
                if(!visit[temp[0]+temp[3]][temp[3]]){
                    if(temp[3]){        
                        queue.add([temp[0]+temp[3],temp[1]+1,2,temp[3]])        //붙여넣기
                        visit[temp[0]+temp[3]][temp[3]] = true
                        }
                }
    
                if(!visit[temp[0]-1][temp[3]]){
                    if(temp[0]>2){
                        queue.add([temp[0]-1, temp[1]+1, 3, temp[3]])
                        visit[temp[0]-1][temp[3]] = true
                    }     
                }
        }
    
    }
    
}
