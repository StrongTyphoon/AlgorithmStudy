const fs = require('fs')
const inp = fs.readFileSync('./14502연구소/input.txt').toString().trim().split('\n')
const [N,M] = inp[0].split(' ').map(Number)
const inpAry = inp.slice(1).map(ele=>ele.split(' ').map(e=>+e))

console.log(inpAry)

console.log(inpAry)