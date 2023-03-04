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

const fs=require('fs')
const inp = fs.readFileSync("1697숨바꼭질/input.txt").toString().split(" ").map((ele)=>(Number(ele)))

const queue = new Queue()
let temp
let a
const exceptionary = new Array(100001).map(()=>(false))
queue.add([inp[0],0])
exceptionary[inp[0]] = true

if(inp[0]<inp[1]){
    const excep = 2*inp[1]
    while(queue.size() > 0){
    temp = queue.popleft()
    console.log(temp)
    if (temp[0] === inp[1]){
        console.log(temp[1])
        
    }
    else{
        a = temp[0]*2
        if(a < excep){
            if(!exceptionary[a]&& 0<a<100001){
                exceptionary[a] = true
                queue.add([a,temp[1]+1])
            }
        }
        
        a = temp[0]+1
        if(a < excep){
            if(!exceptionary[a]&& 0<a<100001){
                exceptionary[a] = true
                queue.add([a,temp[1]+1])
            }
        }
        a = temp[0]-1
        if(a < excep){
            if(!exceptionary[a]&& 0<a<100001){
                exceptionary[a] = true
                queue.add([a,temp[1]+1])
            }
        }
    }
}
}
else{
    console.log(inp[0]-inp[1])
}

