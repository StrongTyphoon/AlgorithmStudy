const fs = require('fs')
const inpAry = fs.readFileSync('dev/stdin').toString().replaceAll('\r','').split('\n')

// 현재 상황에서 DFS 를 돌면서 4개이상 있을 경우 모두 지우기
// 리스트 아래로 붙이기
// 계속 반복

// 4개 이상 같은 경우 터트리기
const bombPuyo = ( puyoAry ) => {
  const deepcopy = puyoAry.map(ary=> [...ary])
  let isBomb = false
  const visited = new Array(12).fill(0).map(()=>{return new Array(6).fill(false)})
  const delta = [[1,0],[0,1],[-1,0],[0,-1]]

  for(let i=0; i<12; i++){
    for(let j=0; j<6; j++){
      if(puyoAry[i][j] === '.'){
        visited[i][j] = true
        continue
      }
      // R, G, B Y 인 경우
      const retAry = dfs(i,j,puyoAry[i][j])
      if(retAry.length >= 4){
        isBomb = true
        for(let [x,y] of retAry){
          deepcopy[x][y] = '.'
        }
      }
    }
  }

  return [isBomb, deepcopy]

  // 시작 위치와 color 를 받아, visited를 체크하고, 붙어있는 좌표 ary 를 return 한다.
  function dfs(i,j,color){
    const retAry = []
    const stack = [[i,j]]

    while(stack.length){
      const [x,y] = stack.pop()
      for(let [dx, dy] of delta){
        const [newX, newY] = [x+dx, y+dy]
        if(newX<0||newX>11||newY<0||newY>6) continue
        if(visited[newX][newY]) continue
        if(puyoAry[newX][newY] !== color) continue
        retAry.push([newX, newY])
        stack.push([newX, newY])
        visited[newX][newY] = true
      }
    }
    return retAry
  }
}

let ary = inpAry
let cnt = 0

while(1){
  const [isBomb, retAry] = bombPuyo(ary)
  if(!isBomb){
    console.log(cnt)
    break;
  } 

  cnt ++
  ary = downPuyo(retAry)

}

function downPuyo(puyoAry){
  //console.log(puyoAry)
  const retAry = new Array(12).fill(0).map(()=>{return new Array(6).fill('.')})

  for(let j=0; j<6;j++){
    const stack = []
    for(let i=0; i<12; i++){
      if(puyoAry[i][j] === '.') continue
      stack.push(puyoAry[i][j])
    }
    let cnt = 11
    while(stack.length){
      retAry[cnt--][j] = stack.pop()
    }
  }
//  console.log(retAry)
  return retAry
}