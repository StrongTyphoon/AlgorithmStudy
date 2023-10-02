/* 
500,000개의 상근이 카드와 500,000개의 숫자 카드를 비교
=> 시간복잡도 O(nlog(n)) 까지 가능

카드는 -10,000,000 ~ 10,000,000

500,000개 정렬 => 시간복잡도 O(2nlog(n))
정렬된 배열의 O(n~2n) 만큼 탐색

하려 했는데 출력시 입력 순서를 기억해야하네? 

1. 일단 막무가내로 개수마다 상근이 카드 모두 순회시 O(n^2) X
2. m개의 카드마다 log(n)으로 순회시 O(nlogn) ㅇㅋ

어떻게?
1. 상근이 카드를 정렬
2. m개의 출력을 순회
3. 각 개수마다 이진탐색
*/

const fs = require('fs')
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt'
const inp = fs.readFileSync(filePath).toString().trim().replaceAll('\r','').split('\n')
const [N, M] = [+inp[0], +inp[2]]
const [nArr, mArr] = [inp[1].split(' ').map(n=>+n), inp[3].split(' ').map(n=>+n)]

nArr.sort((a,b)=>a-b)

const ans = []

for(let target of mArr){
  let start = 0
  let end = N-1
  let mid = 0
  while(true){
    mid = Math.floor((start+end)/2)
    if(nArr[mid] === target){
      ans.push(1)
      break
    }else if(target < nArr[mid] ){
      end = mid - 1
    }else{
      start = mid + 1
    }

    if(start>end){
      ans.push(0)
      break
    }
  }
}
console.log(ans.join(' '))

