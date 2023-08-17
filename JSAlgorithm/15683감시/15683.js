const fs = require('fs')
const inp = fs.readFileSync('./15638감시/input.txt').toString().trim().replaceAll('\r','').split('\n')
const [N,M] = inp[0].split(' ').map(n=>+n)
const inpAry = inp.slice(1).map(str=>str.split(' ').map(s=>+s))
const cctv = []

let wallCnt = 0
for(let i=0; i<N; i++){
  for(let j=0; j<M; j++){
    if(inpAry[i][j] !== 0 && inpAry[i][j] !== 6){
      // [cctv종류, x, y]
      cctv.push( [inpAry[i][j],i,j] )
    }
    if(inpAry[i][j] === 6){
      wallCnt ++
    }
  }
}

const dirCnt = [0, 4, 2, 4, 4, 1]
const cctvCnt = cctv.map(ary=>dirCnt[ary[0]])

let ans = []
const backtracking = (visited)=>{
  if(visited.length === cctv.length){
    let temp = solve(visited)
    if(temp === 0) {
      ans = [0]
      return
    }else{
      ans.push(temp)
    }
    
  }

  for(let i=0; i<cctvCnt[visited.length]; i++){
    let idx = visited.length
    visited.push(i)
    backtracking(visited)
    visited.splice(idx,1)
  }

}

backtracking([])
console.log(Math.min(...ans))

// 1 => 4가지 경우(상 우 하 좌) 
// 2 => 2가지 경우(상하 좌우)
// 3 => 4가지 경우(상우, 우하, 하좌, 좌상)
// 4 => 4가지 경우(상우하, 우하좌, 하좌상, 좌상우)
// 5 => 1가지 경우(상하좌우)

function solve( numAry ){
  const rooms = JSON.parse(JSON.stringify(inpAry))
  let cnt = 0

  const func1 = [[up], [right], [down], [left]]
  const func2 = [[up,down], [left,right]]
  const func3 = [[up,right],[right, down], [down,left],[left,up]]
  const func4 = [[up,right,down],[right,down,left],[down,left,up],[left,up,right]]
  const func5 = [[up,right,down,left]]

  for(let i in cctv){
    const [num, x, y] = cctv[i]
    switch (num){
      case 1:
      func1[numAry[i]].forEach(func=>{
        func(x,y)
      })
      break
      
      case 2:
        func2[numAry[i]].forEach(func=>{
          func(x,y)
        })
      break

      case 3:
        func3[numAry[i]].forEach(func=>{
          func(x,y)
        })
      break

      case 4:
        func4[numAry[i]].forEach(func=>{
          func(x,y)
        })
      break

      case 5:
        func5[numAry[i]].forEach(func=>{
          func(x,y)
        })
      break
      
      default:
        console.log('error')
    }
  }

  return N*M-cctv.length-cnt-wallCnt

  function left(x,y){
    for(let j=y-1; j>=0; j--){
      if(rooms[x][j] === 6) return
      if(rooms[x][j] === 0){
        rooms[x][j] = '#'
        cnt ++
      }   
    }
  }

  function right(x,y){
    for(let j=y+1; j<M; j++){
      if(rooms[x][j] === 6) return
      if(rooms[x][j] === 0){
        rooms[x][j] = '#'
        cnt ++
      }   
    }
  }
  function up(x,y){
    for(let i=x-1; i>=0; i--){
      if(rooms[i][y] === 6) return
      if(rooms[i][y] === 0){
        rooms[i][y] = '#'
        cnt ++
      }   
    }
  }
  function down(x,y){
    for(let i=x+1; i<N; i++){
      if(rooms[i][y] === 6) return
      if(rooms[i][y] === 0){
        rooms[i][y] = '#'
        cnt ++
      }   
    }
  }
}

