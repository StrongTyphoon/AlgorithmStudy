/* 
N 은 3 ~ 5000
각 수는 -1,000,000,000 ~ 1,000,000,000

전 탐색은 무조건 시간초과
NC3  만큼의 시간복잡도 => N * N-1 * N-2 / 6=> 5000**3 = 25,000,000 * 5,000 / 6 = 125,000,000,000 / 6 시간초과

그럼 이진탐색 쓰자 (1,000,000,000의 큰 숫자)

1. 세 용액의 합으로 정렬이 필요
- 각 용액의 정렬이 세 용액의 합의 정렬 상태를 보장 X
[-97 -6 -2 -1 98]
-97 -6 -2 = -105
-97 -6 -1 = -97
-97 -6 98 = -5
-6 -2 -1 = -9
-6 -2 98 
-2 6 98

2. 그럼 N * N-1 에서 Log(n) 방식으로 이진탐색하여 구하고, 이를 최소값과 비교한다면?

=> 5000 * 5000 * log(5000) = 25,000,000*0.3xx*3 = 쌉가능 ㅇㅋ

풀이 방법
1. 용액의 배열을 정렬
2. N 개 중 2개를 선택, N-2개 중 1개를 이진 탐색해서 가장 0에 가깝게 구함
3. 구한 값과 최소 값의 절대값 비교하여 더 작다면 최소 값 갱신, ans 갱신

*/

/*        
시간초과1
const [temp, tempAry] = 
  binarySearch(
    inpAry[i],
    inpAry[j],
    inpAry.filter((_,idx)=>{
      if(idx === i || idx === j) return false
      return true
    })
    )
시간초과2 : slice도 O(n)이다
const [temp, tempAry] = 
  binarySearch(
    inpAry[i],
    inpAry[j],
    [...inpAry.slice(0,i),...inpAry.slice(i+1,j),...inpAry.slice(j+1)]
    )
    
        */

const fs = require('fs')
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt'
const inp = fs.readFileSync(filePath).toString().trim().replaceAll('\r','').split('\n')
const [N, inpAry] = [+inp[0], inp[1].split(' ').map(n=>+n)]

inpAry.sort((a,b)=>a-b)

let min = null
let ans = []

/*filter 시간복잡도 이거만 O(1)로 줄이면 될듯 */
for(let i=0; i<N; i++){
  for(let j=i+1; j<N; j++){
    const [temp, tempAry] = 
      binarySearch(
        inpAry[i],
        inpAry[j],
        i,
        j
        )
      
    if(!min) {
      min = Math.abs(temp)
      ans = tempAry
    }else{
      if(Math.abs(temp) < min){
        min = Math.abs(temp)
        ans = tempAry
      }
    }
  }
}

console.log(ans.join(' '))

/* 
N 개 중 두 수(num1, num2)와 나머지 N-2개의 수가 담긴 ary를 받아
가장 0에 가까운 수와 num set을 리턴

-2 -3 -24 -6 98 100 61

-24 -6 -3 -2 61 98 100 * * * * *
mid가 j보다 크다면 +1해주고
mid가 i보다 작다면 -1해주고


*/

function binarySearch(num1, num2, i, j){
  let sum = num1 + num2
  let start = 0
  let end = N-3
  let mid = 0

  while(true){
    mid = convertIdx(Math.floor((start + end)/2))

    console.log(num1, num2, i, j, mid)
    if(sum + inpAry[mid] === 0) return [0, [num1, num2, inpAry[mid]].sort((a,b)=>a-b)]
    else if(sum + inpAry[mid] > 0 ) end = convertIdx(mid - 1, i, j)
    else start = convertIdx(mid + 1,i,j)

    if(start >= end) {
      return [sum + inpAry[start], [num1, num2, inpAry[start]].sort((a,b)=>a-b) ]
    }
  }

}

/* 
[1, 3, 7, 9, 10, 12 , 15]
i=1, j=3인 경우
0 => 0
1 => 2
2 => 4
3 => 5
4 => 6
*/
function convertIdx(idx , i, j){
  if(idx<i){
    return idx
  }else if(idx < j-1){
    return idx + 1
  }
  return idx + 2
}