class Queue {
    constructor() {
      this.storage = {};
      this.front = 0;
      this.rear = 0;
    }
    
    size() {
      if (this.storage[this.rear] === undefined) {
        return 0;
      } else {
        return this.rear - this.rear + 1;
      }
    }
    
    add(value) {
      if (this.size() === 0) {
        this.storage['0'] = value;
      } else {
        this.rear += 1;
        this.storage[this.rear] = value;
      }
    }
    
    popleft() {
      let temp;
      if (this.front === this.rear) {
        temp = this.storage[this.front];
        delete this.storage[this.front];
        this.front = 0;
        this.rear = 0;
      } else {
        temp = this.storage[this.front];
        delete this.storage[this.front];
        this.front += 1;
      }
      return temp;
    }
  }
  

const fs = require('fs')
const inp = fs.readFileSync('./dev/stdin.txt').toString().replace(/\r/g,'').split('\n')
// js window환경에서 행바꿈을 \r\n으로 사용한다. 

const [col, row] = inp[0].split(' ').map((ele) => (Number(ele)))

const inparr = []
const queue = new Queue()



for (let i = 0; i < row; i++){
    inparr[i] = inp[i+1].split(' ').map((ele)=>(Number(ele)))
    for (let j=0; j<col; j++){
        if(inparr[i][j]===1){
            queue.add([i,j,0])
        }
    }
}

// for(let i=0; i<row; i++){
//     for (let j=0; j<col; j++){
//         if(inparr[i][j]===1){
//             queue.push([i,j,0])
//         }
//     }
// }

let day_temp = undefined
while(queue.size() > 0){
    const [m,n,day] = queue.popleft()         // shift대신에 queue사용해보기
    if (m+1<row){
        if(inparr[m+1][n] === 0){
            queue.add([m+1,n,day+1])
            inparr[m+1][n] = 1
        }
    }
    if(m-1 >= 0){
        if(inparr[m-1][n] === 0 ){
            queue.add([m-1,n,day+1])
            inparr[m-1][n] = 1
        }
    }
    if(n+1 <col){
        if(inparr[m][n+1] === 0){
            queue.add([m,n+1,day+1])
            inparr[m][n+1] = 1
        }
    }
    if(n-1>=0){
        if(inparr[m][n-1] === 0){
            queue.add([m,n-1,day+1])
            inparr[m][n-1] = 1
        }
    }
   
    day_temp = day
}

    // 전탐색 시 하나라도 0이 나오면 -1 출력
    // 전탐색 시 모두 1일 경우 맨 마지막으로 pop 한 배열의 날짜 출력

let bool = true
for(let i=0; i<row; i++){
    for (let j=0; j<col; j++){
        if(inparr[i][j]===0){
            bool = false
        }
    }
}

if(bool=== true){
    console.log(day_temp)
}
else if (bool === false){
    console.log(-1)
}