const fs = require('fs')
const inp = fs.readFileSync('./10709기상캐스터/input.txt').toString().trim().replaceAll('\r','').split('\n')

const [H,W] = inp[0].split(' ').map(ele=>+ele)
const inpAry = inp.slice(1).map(ele => {return [...ele]})
const dayArray = Array.from(Array(H),()=> new Array(W).fill(-1))

let day = 0
for(let k=0; k<W;k++){
    for(let i=W-1; i>=0;i--){
        for(let j=0; j<H; j++){
            if(inpAry[j][i] === 'c'){
                if(dayArray[j][i] === -1){
                    dayArray[j][i] = day
                } 

            }

            if(i !== W-1){
                inpAry[j][i+1] = inpAry[j][i]
            }
            if(i === 0){
                inpAry[j][i] = '.'
            }
        }
    }
    day++

}
    
console.log(dayArray.join('\n').replaceAll(',',' '))