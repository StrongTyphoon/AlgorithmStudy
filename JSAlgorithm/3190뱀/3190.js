const fs = require('fs')
const filePath = process.platform === 'linux' ? 'dev/stdin' : '3190뱀/input.txt'
const inp = fs.readFileSync(filePath).toString().replaceAll('\r','').split('\n')

const [n, k] = [+inp[0], +inp[1]]
// 0 은 빈 공간, 1 은 사과, 2는 뱀위치
const board = new Array(n).fill(false).map(()=>new Array(n).fill(0))
let ptr = 2
for(let i=0; i<k; i++){
  const [row, col] = inp[ptr++].split(' ').map(n=>+n)
  board[row-1][col-1] = 1
}
let dirChange = inp[ptr++]
const dir = []
for(let i=0; i<dirChange;i++){
  let [time ,direction] = inp[ptr++].split(' ')
  dir.push([+time, direction])
}
board[0][0] = 2
// console.log(board, dir)

// dequeue 으로 뱀의 위치를 넣어준다, push로 이동, shift로 꼬리제거
const snakes = [[0,0]]

// SnakeDir이 0이면 오른쪽, 1이면 아래, 2이면 왼쪽, 3이면 위쪽을 의미
let snakeDir = 0
let time = 0
let [nextChangeTime, nextChangeDir] = dir.shift()

while(1){
  // console.log(time, board, '방향:', snakeDir)
  
  let [headRow, headCol] = snakes[snakes.length-1]
  let nextHeadRow, nextHeadCol

  // 뱀 머리 방향대로 움직이기
  switch(snakeDir){
    case 0:
      ;[nextHeadRow, nextHeadCol] = [headRow, headCol+1]
      break
    case 1:
      ;[nextHeadRow, nextHeadCol] = [headRow+1, headCol]
      break
    case 2:
      ;[nextHeadRow, nextHeadCol] = [headRow, headCol-1]
      break
    case 3:
      ;[nextHeadRow, nextHeadCol] = [headRow-1, headCol]
      break
    default:
      console.log('방향 에러')
      break
  }

  // 벽에 부딪히거나, 몸에 부딪히는 경우 끝낸다
  if(nextHeadCol<0 || nextHeadCol>=n || nextHeadRow<0 || nextHeadRow >= n || board[nextHeadRow][nextHeadCol] === 2){
    console.log(++time)
    break
  }


  // 사과를 안먹는 경우
  if(board[nextHeadRow][nextHeadCol] !== 1){
    let [tailRow, tailCol] = snakes.shift()
    board[tailRow][tailCol] = 0
  }

  // board 와 snake 배열을 동기화
  board[nextHeadRow][nextHeadCol] = 2
  snakes.push([nextHeadRow, nextHeadCol])


  time ++ 

  // time초가 끝난 경우 변경 시간일 경우
  if(nextChangeTime){
    if(nextChangeTime === time){
      // 변경 방향으로 방향 변경
      if(nextChangeDir === 'L'){
        snakeDir --
        if(snakeDir < 0) snakeDir = 3
      }else{
        snakeDir ++
        if(snakeDir > 3) snakeDir = 0
      }
  
      const temp = dir.shift() 
      if(temp){
        ;[nextChangeTime, nextChangeDir] = [...temp]
      }else{
        ;[nextChangeTime, nextChangeDir] = [null, null]
      }
    }
  }
}
