const fs = require('fs')
const inp = fs.readFileSync('input.txt').toString().trim().split('\n')
const [N, inpAry, cost] = [+inp[0], inp[1].trim().split(' ').map(n=>+n), +inp[2].trim()]
// cost의 값이 N 이상 10억 이하이므로 모든 경우를 하나씩 다 세아릴 순 없음
// 따라서 cost의 값에 따라 이진 탐색을 하는 것이 좋아보임
// 각 경우의 수 마다 예산을 구하고, 예산의 값이 초과 하면 아래로, 남는다면 위로 탐색

const sum = inpAry.reduce((prev,curr)=>{
  return prev += Number(curr)
},0)
if(sum <= cost) console.log(Math.max(...inpAry))
else console.log(binarySearch(inpAry, cost, 0, 1_000_000_000))



function binarySearch(ary, maxCost, start, end){
  // mid로 cost값을 구하고, 상한을 넘는경우 아래로, 
  let [ left, right ] = [start, end]

  while( left <= right ){
    //console.log('left',left, 'right',right)
    let mid = Math.floor((left + right) / 2)
    //console.log(calculateCost(ary,mid), maxCost)
    if(calculateCost(ary, mid) > maxCost){
      // 코스트를 줄인다
      right = mid - 1
    }else{
      // 코스트를 늘린다
      left = mid + 1
    }
  }
  
  return right
}


function calculateCost(ary, maxCost){
  let ans = 0
  for(let cost of ary){
    if(cost<=maxCost) ans += cost
    else ans += maxCost
  }
  return ans
}

// console.log(calculateCost(inpAry, 127))