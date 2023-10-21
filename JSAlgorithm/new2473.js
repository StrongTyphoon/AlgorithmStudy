const fs = require('fs')
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt'
const inp = fs.readFileSync(filePath).toString().trim().replaceAll('\r','').split('\n')
const [N, inpAry] = [+inp[0], inp[1].split(' ').map(n=>+n)]

inpAry.sort((a,b)=>a-b)

let min = 3000000000;

function solution() {
  let result = [];

  for(let i = 0; i < N - 2; i++) {
    for(let j = i + 1; j < N - 1; j++) {
      // 두 용액을 num1, num2로 지정
      let num1 = inpAry[i];
      let num2 = inpAry[j];
      
      // 나머지 배열인 j + 1 index부터 이분 탐색 시작
      let l = j + 1;
      let r = inpAry.length - 1;

      while(l <= r) {
        let mid = (l + r) / 2 >> 0;
        let total = num1 + num2 + inpAry[mid];

        if(min > Math.abs(total)) {
          min = Math.abs(total);
          result = [num1, num2, inpAry[mid]];
        }

        if(total === 0) {
          return result;
        } else if(total > 0) {
          r = mid - 1;
        } else {
          l = mid + 1;
        }
      }
    }
  }

  return result;
}

console.log(solution().join(' '))