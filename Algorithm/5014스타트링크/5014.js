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
const [total, from, to, up, down] = fs.readFileSync("./5014스타트링크/input.txt").toString().split(' ').map((ele)=>{return +ele})

//console.log([total, from, to, up, down])

let ans = "use the stairs"
const queue = new Queue()
const visit = new Array(total+1).fill(false)
queue.enqueue([from, 0])
visit[from] = true

while(queue.length){
    const [pos ,day] = queue.dequeue()
    //console.log(pos, day)
    if(pos === to){
        ans = String(day)
        break;
    }
    for(let del of [up, -down]){
        const newPos = pos + del
        if(0<newPos && newPos<total+1){
            if(!visit[newPos]){ 
                queue.enqueue([newPos, day+1])
                visit[newPos] = true
                
            }
        }
    }

}
console.log(ans)