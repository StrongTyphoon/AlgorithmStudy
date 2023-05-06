// 문제풀이에 감을 못잡아 답을 찾아봄

const fs = require('fs')
const inp = fs.readFileSync('./12869뮤탈리스크/input.txt').toString().replaceAll('\r','').split('\n')
const N = +inp[0] // n은 1~3 사이 자연수
const inpAry = inp[1].split(' ').map(e=>+e)
const ary3 = [9,3,1]
const ary2 = [9,3]
const ary1 = [9]

const dp = new Array(61*61*61).fill(0)      // 체력이 0,0,0 => dp[0], 1,0,0 []
