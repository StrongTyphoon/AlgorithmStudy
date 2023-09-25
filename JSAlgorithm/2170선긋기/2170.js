/* 그리디 알고리즘의 대표 문제인 회의실 문제와 비슷해 보이는데 사실 기억이 안남 */

const fs = require('fs')
const filePath = process.platform === 'linux' ? "dev/stdin" : "2170선긋기/input.txt"
const inp = fs.readFileSync(filePath, 'utf8').trim().replaceAll('\r','').split('\n')
const N = +inp[0]
