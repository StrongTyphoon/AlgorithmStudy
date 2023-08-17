const fs = require('fs')
const inp = fs.readFileSync('./6603로또/input.txt').toString().trim().replaceAll('\r','').split('\n')


let ansAry = []

for(let i=0; i<inp.length-1; i++){
  const [N, ...inpAry] = inp[i].split(' ').map(e=>+e)
  // console.log(N, inpAry)
  let ans = ""
  const bfs = ( visited = [] ) => {
    if(visited.length === 6){
      ans += visited.join(" ")+ "\n"
    }
    
    for(let j=0; j<N; j++){
      // if( visited.findIndex(val=>val===inpAry[j]) !== -1 ) continue
      if(visited.includes(inpAry[j])) continue
      if( inpAry[j] < visited.slice(-1)[0] ) continue
      const idx = visited.length
      visited.push(inpAry[j])
      bfs(visited)
      visited.splice(idx,1)
    }
  } 

  bfs()
  ansAry.push(ans)
}
console.log(ansAry.join('\n'))