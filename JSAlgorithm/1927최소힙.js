/* 최소 힙 
1. length 확인
2. 넣기
3. 빼기
*/

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  getMin() {
    return this.heap[1];
  }

  getSize() {
    return this.heap.length - 1;
  }

  isEmpty() {
    return this.heap.length < 2;
  }

  insert(node) {
    let current = this.heap.length;

    while (current > 1) {
      const parent = Math.floor(current / 2);
      if (this.heap[parent] > node) {
        this.heap[current] = this.heap[parent];
        current = parent;
      } else break;
    }

    this.heap[current] = node;
  }

  remove() {
    let min = this.heap[1];

    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      while (this.heap[leftChildIndex]) {
        let childIndexToCompare = leftChildIndex;
        if (
          this.heap[rightChildIndex] &&
          this.heap[rightChildIndex] < this.heap[childIndexToCompare]
        )
          childIndexToCompare = rightChildIndex;

        if (this.heap[current] > this.heap[childIndexToCompare]) {
          [this.heap[current], this.heap[childIndexToCompare]] = [
            this.heap[childIndexToCompare],
            this.heap[current],
          ];
          current = childIndexToCompare;
        } else break;

        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }

    return min;
  }
}

const fs = require('fs')
const path = process.platform === 'linux' ? 'dev/stdin' : 'input.txt' 
const inp = fs.readFileSync(path).toString().trim().replaceAll('\r','').split('\n').map(n=>+n)
const min_heap = new MinHeap()
const ans = []

for(let i=1; i<inp.length; i++){
  const val = inp[i]
  if(val === 0){
    if(min_heap.getSize() === 0){
      ans.push('0')
    }else{
      ans.push(String(min_heap.remove()))
    }
  }else{
    min_heap.insert(val)
  }
}

console.log(ans.join('\n'))
