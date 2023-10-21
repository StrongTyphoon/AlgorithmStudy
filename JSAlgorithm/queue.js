class Queue{
  constructor(){
    this.storage = {};
    this.tail = 0
    this.head = 0
    this.length = 0
  }
  push(el){
    this.storage[this.tail++] = el
    this.length++
  }
  shift(){
    const removed = this.storage[this.head]
    delete this.storage[this.head]
    this.head ++
    this.length --
    return removed
  }
}

const queue = new Queue()

queue.push(1)
queue.push(2)
queue.push(3)
console.log(queue.length)
console.log(queue.shift())
queue.push(5)
console.log(queue.shift())
console.log(queue.shift())
console.log(queue.shift())