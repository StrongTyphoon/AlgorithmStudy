const fs = require('fs')
const inpAry = fs.readFileSync('./1914소문난칠공주/input.txt').toString().trim().replaceAll('\r','').split('\n')

// 0. 2차원 배열서 +로 교차되는 경우 bfs나 백트래킹으로 못푼다.
// ary[x][y] 의 인덱싱은 5*x+y 로 생각
// 1. 2차원 배열을 하나의 배열로 생각하고 인덱싱한다.
// 2. 25C7의 경우를 백트래킹으로 구한다. : 배열 
// 3. 4개 이상이 다솜파인지 확인한다 : 불리안
// 4. 이어져 있는지 확인한다.

let ans = 0

backtracking()
console.log(ans)

function backtracking (){
  for(let a=0; a<25; a++){
    for(let b=a+1; b<25;b++){
      for(let c=b+1; c<25; c++){
        for(let d=c+1; d<25; d++){
          for(let e=d+1;e<25;e++){
            for(let f=e+1; f<25;f++){
              for(let g=f+1; g<25; g++){
                if(a!==undefined&&b!==undefined&&c!==undefined&&d!==undefined&&e!==undefined&&f!==undefined&&g!==undefined){
                  if(!isDasom([a,b,c,d,e,f,g])) continue
                  if(!isOneArea([a,b,c,d,e,f,g])) continue
                  ans ++
                }
              }
            }
          }
        }
      }
    }
  }

}

function isInAry(ary,i){
  for(let n of ary){
    if(n===i) return true
  }
  return false
}

function isDasom(ary){
  let cnt = 0
  for(let num of ary){
    if(inpAry[Math.floor(num/5)][num%5] === "S"){
      cnt ++
    }
    if(cnt>3) return true
  }
  return false
}


function isOneArea(ary){
  const area = new Array(5).fill(false).map(e=>new Array(5).fill(false))
  const visited = new Array(5).fill(false).map(e=>new Array(5).fill(false))
  for(let i of ary){
    area[Math.floor(i/5)][i%5] = true
  }
  let cnt = 0
  const dx = [0,1,0,-1]
  const dy = [1,0,-1,0]
  
  const queue = [ary[0]%5, Math.floor(ary[0]/5)]
  visited[Math.floor(ary[0]/5)][ary[0]%5] = true
  
  while(queue.length){
    cnt++
    const [x,y] = [queue.pop(), queue.pop()]
    for(let i=0; i<4; i++){
      const [newX, newY] = [x+dx[i],y+dy[i]]
      if(newX>4||newX<0||newY<0||newY>4) continue
      if(visited[newX][newY]) continue
      if(!area[newX][newY]) continue
      queue.push(newY,newX)
      visited[newX][newY] = true
    }
  }
  if(cnt===7) return true
  return false

  // console.log(area)  
}

