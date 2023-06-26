const fs = require('fs')
const inp = fs.readFileSync('dev/stdin').toString().trim().replaceAll('\r','').split('\n')
const inpAry = inp.slice(1)
let Ascore=0
let Bscore=0

let Atime = 0
let Btime = 0
const [initM,initS] = inpAry[0].split(' ')[1].split(':')
let temptime = totime(+initM, +initS)
let nxtdraw = false
inpAry.forEach(v=>{
    let [win, mmss] = v.split(' ')
    win = +win
    let [m, s] = mmss.split(':').map(ele=>+ele)

    if(win === 1){
        Ascore++
    }
    else{
        Bscore++
    }

    if(nxtdraw){

        nxtdraw = false
    }
    else{
        if(Ascore>Bscore){
            Atime = Atime + totime(m,s)-temptime
        }
        else if(Bscore>Ascore){
            Btime = Btime + totime(m,s)-temptime
        }
        else{
            if(win === 1){
                Btime += totime(m,s)-temptime
            }
            else{
                Atime += totime(m,s)-temptime
            }
            nxtdraw = true
        }
    }
    
    temptime = totime(m,s)
    //console.log(Ascore,Bscore)
    //console.log(tommss(Atime), tommss(Btime))
})

if(Ascore>Bscore){
    Atime = Atime + totime(48,0)-temptime
}
else if(Bscore>Ascore){
    Btime = Btime + totime(48,0)-temptime
}

console.log(ansprint(tommss(Atime)[0],tommss(Atime)[1]))
console.log(ansprint(tommss(Btime)[0],tommss(Btime)[1]))


function totime(m1,s1){
    return (m1)*60 + (s1)
}

function tommss(int){
    return [Math.floor(int/60), int%60 ]
}

function ansprint(m,s){
    let ret = ''
    if(String(m).length === 1){
        ret += '0'
    } 
    ret += String(m)+':'
    if(String(s).length === 1){
        ret += '0'
    }
    ret += String(s)

    return ret
}