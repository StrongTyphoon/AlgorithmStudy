// https://www.acmicpc.net/problem/1932
// 맨 위층 7부터 시작해서 아래에 있는 수 중 하나를 선택하여 아래층으로 내려올 때, 이제까지 선택된 수의 합이 최대가 되는 경로를 구하는 프로그램을 작성하라. 아래층에 있는 수는 현재 층에서 선택된 수의 대각선 왼쪽 또는 대각선 오른쪽에 있는 것 중에서만 선택할 수 있다.
// 입력 : 층의 개수 n,  2~n+1까지 정수삼각형
// 출력 : 첫째 줄에 합이 최대가 되는 경로에 있는 수의 합 출력


// fill 내장함수 : arr.fill(value[, start[, end]])

const fs = require('fs')
const inp = fs.readFileSync('./dev/stdin').toString().replace(/\r/g, '').split('\n')


const n = parseInt(inp[0])
let ansary = new Array(n).fill(0)

for(let i=0;i<n;i++){
    const tempary = inp[i+1].split(' ').map(Number)
    const array = ansary.slice()   //깊은복사

    for(let j=0; j<i+1; j++){
        if(j === 0){
            array[j] = ansary[j] + tempary[j]
        
        }
        else if(j === i){
            array[j] = ansary[j-1] + tempary[j]
        
        }
        else{
            if(ansary[j-1]>ansary[j]){
                array[j] = ansary[j-1] + tempary[j]
            }
            else{
                array[j] = ansary[j] + tempary[j]
            }
        
        }  
    }
    ansary = array.slice()

}

console.log(Math.max.apply(null,ansary))