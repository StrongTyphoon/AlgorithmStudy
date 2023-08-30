const fs = require('fs');
const inp = fs.readFileSync('./7795먹을것인가먹힐것인가/input.txt').toString().replaceAll('\r','').split('\n')
let ptr = 1

for(let i=0; i< +inp[0]; i++){
  const [n,m] = inp[ptr++].split(' ').map(n=>+n)
  const predator = inp[ptr++].split(' ').map(n=>+n)
  const food = inp[ptr++].split(' ').map(n=>+n)

  predator.sort(function(a,b){return a-b})
  food.sort(function(a,b){return a-b})

  // console.log('predator',predator)
  // console.log('food',food)
  
  let foodIdx = 0
  let ans = 0
  for(let pred of predator){
    if(pred<=food[foodIdx]){
      ans += foodIdx
      continue
    }

    while(true){
      if(foodIdx >= food.length){
        ans += foodIdx
        break
      }
      foodIdx ++
      if(pred<=food[foodIdx]){
        ans += foodIdx
        break
      }
    }
  }
  console.log(ans)

}


// 정렬이 O(n^2) 일 경우 총 시간 복잡도 O(n^2 + n) 이도록 설계
// O(n^2)~ O(n^2logn) 정도 해야함