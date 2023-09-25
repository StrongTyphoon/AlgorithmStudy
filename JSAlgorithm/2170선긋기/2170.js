  /* 그리디 알고리즘의 대표 문제인 회의실 문제와 비슷해 보이는데 사실 기억이 안남 */

  const fs = require('fs')
  const filePath = process.platform === 'linux' ? "dev/stdin" : "2170선긋기/input.txt"
  const inp = fs.readFileSync(filePath, 'utf8').trim().replaceAll('\r','').split('\n')
  const N = +inp[0]

  // Nlog(N) 까지 가능함 ~ 시작 위치로 정렬

  const inpAry = inp.slice(1).map(s=>s.split(' ').map(n=>+n))
  inpAry.sort((a,b)=>a[0]-b[0])

  let ans = 0
  let tempX = inpAry[0][0]
  let tempY = inpAry[0][1]

  for(let i=1; i<N; i++) { 
    let [x,y] = inpAry[i]
    // 정렬된 줄 좌표가, 이전에 것에 포함된다면 tempY 초가화
    if(x<=tempY){
      tempY = Math.max(tempY,y)
    // 정렬된 줄 좌표가, 이전에 것에 포함되지 않는다면 이전의 것을 계산 후 tempX, tempY 초기화
    }else{
      ans += tempY-tempX
      tempX = x
      tempY = y
    }
  }
  ans += tempY-tempX

  console.log(ans)