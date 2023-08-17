const fs = require('fs')
const inpAry = fs.readFileSync('./1914소문난칠공주/input.txt').toString().trim().replaceAll('\r','').split('\n')

let ans = 0
const dx = [0,1,0,-1]
const dy = [1,0,-1,0]

for(let i=0; i<5; i++){
  for(let j=0; j<5; j++){
    bfs([[i,j]],i,j)
  }
}

console.log(ans)

function bfs(visited = [], x, y){
  //console.log(visited, "start")
  if(visited.length === 7){
    let cnt = 0 
    for(const [a,b] of visited){
      if(inpAry[a][b] === "S"){cnt++}
    }
    if(cnt>3) {
      console.log('It is 7공주',visited)
      ans++
    }
    return
  }

  for(let i=0; i<4; i++){
    const [newX, newY] = [x+dx[i],y+dy[i]]
    if(newX>4||newX<0||newY<0||newY>4) continue
    if(isContain(newX, newY, visited)) continue
    let idx = visited.length
    visited.push([newX,newY])
    bfs(visited,newX,newY)
    visited.splice(idx,1)
  }
}
// [x,y]가 visted에 포함돼있는가?
function isContain (x,y,visited){
  for(let [i,j] of visited){
    if(i === x && j === y) return true
  }
  return false
}