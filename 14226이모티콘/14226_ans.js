const fs = require('fs')
const inp = Number(fs.readFileSync('./14226이모티콘/input.txt').toString())

const visit = Array(2001).fill(Array(2001).fill(0))
console.log(visit)