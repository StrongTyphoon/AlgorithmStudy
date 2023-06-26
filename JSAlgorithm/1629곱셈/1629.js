// 최대 반복 횟수가 21억번이므로 최대 42억번의 연산을 0.5초 내에 하기엔 무리가 있어서 시간초과가 났다.
// 그래서 다른 알고리즘을 사용해보자 
// 지수법칙 : a^(n+m) = a^n * a^m
// 모듈러 성질 : (a*b)%c = (a%c * b%c)%c 
// 지수 B 를 절반씩 나누면서 모듈로 연산을 합하여 보자(분할정복)

const [A,B,C] = require('fs').readFileSync('./1629곱셈/input.txt').toString().split(' ').map(ele=>{return BigInt(ele)})

function DaQ(N){
    if(N === 1n){
        return A%C
    }

    const half = DaQ(N/2n)%C    

    //half가 최대 C-1 까지 가능한데 c-1 * c-1 은 보다 10^10보다 큰 수를 나타낼 수 있는 BigInt를 이용하여야한다. (Number는 17자리수까지 정도만 나타낼 수 있다. )
    if(N % 2n){ // 홀수
        return (half*half*(A%C))%C
    }
    else{   // 짝수
        return (half*half)%C
    }
}

console.log(DaQ(B).toString())