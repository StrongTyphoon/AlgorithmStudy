const fs = require('fs')
const inp = fs.readFileSync('./2910빈도정렬/input.txt').toString().split('\n')
const [N, C] = inp[0].split(' ').map(ele=>+ele)  // N 숫자 수(max 1000), 모든 수는 C보다 같거나 작다.

// 1. 빈도 수       
// 2. 빈도수가 같다면 먼저 나온 순서

// 1. object객체에 나온 순서대로 인덱스를 부여하여 숫자를 count 한다
// 2. object에서 값이 큰 순서대로 값대로 ansary에 넣는다
// 3. object의 값이 같은 것이 있다면 tempary에 담아 각각 index를 비교하여 작은 것 부터 ansary에 넣는다.

const dic = {}
const inpAry = inp[1].split(' ').map(ele=>+ele)

if(d)




