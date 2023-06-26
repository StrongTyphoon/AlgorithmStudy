//자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
//1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열

const fs = require('fs')
const [N,M] = fs.readFileSync('./15649N과M1/input.txt').toString().split(' ').map(e=>+e)
//console.log(N,M)
const numAry = new Array(N).fill(0).map((_,idx)=>{return idx+1})
//console.log(numAry)
let str = ''

const dfs = (visitAry=[]) =>{
    if(visitAry.length === M){
        str += visitAry.join(' ') + '\n'
        return 
    }

    for(let i=0; i<N; i++){
        if(visitAry.includes(numAry[i])) continue
        visitAry.push(numAry[i])
        dfs(visitAry)
        visitAry.pop()
    }

}

dfs()
console.log(str)