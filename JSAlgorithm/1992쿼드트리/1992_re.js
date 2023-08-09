const fs = require('fs')
const inp = fs.readFileSync('dev/stdin').toString()
    .replaceAll('\r','').trim().split('\n')

const [N, quadTree] = [inp[0], inp.slice(1).map(str=>str.split('').map(s=>+s))]
console.log(decode(quadTree, N))



// ary와 길이를 받아, str을 반환한다.
function decode(ary,n){
    //console.log(ary)
    if(n === 1){
        return `${ary[0]}`
    }

    // 현재 ary가 모두 0이거나 1일 경우 '0'과 '1'을 반환
    if(chkAllAry(ary) === 0){
        return '0'
    }else if(chkAllAry(ary) === 1){
        return '1'
    }

    const halfN = n/2
    
    // 4등분으로 배열 슬라이싱
    const leftUpList = ary.slice(0,halfN).map(a=>a.filter((val,idx)=>{
        return idx<halfN
    }))
    const rightUpList = ary.slice(0,halfN).map(a=>a.filter((val,idx)=>{
        return idx>=halfN
    }))
    const leftDownList = ary.slice(halfN).map(a=>a.filter((val,idx)=>{
        return idx<halfN
    }))
    const rightDownList = ary.slice(halfN).map(a=>a.filter((val,idx)=>{
        return idx>=halfN
    }))

    return `(${decode(leftUpList,halfN)}${decode(rightUpList,halfN)}${decode(leftDownList,halfN)}${decode(rightDownList,halfN)})`
}


// 배열을 받아 모든 수가 0이나 1일 경우, 0과 1을 반환 아닐 경우 아무것도 반환안함
function chkAllAry(ary){
    let temp =  ary[0][0]

    for(let i =0; i<ary.length; i++){
        for(let j=0; j<ary.length; j++){
            if(ary[i][j] !== temp){
                return 
            }
        }
    }
    return temp
}
