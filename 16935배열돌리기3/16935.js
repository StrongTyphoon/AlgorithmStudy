function reverseTopDown(inpArray){
    const newN = inpArray.length
    const outArray = inpArray.map(v=>[...v])
    for(let i=0 ; i<newN; i++){ // n이 6일(짝수)경우 0,1,2 까지, n이 7일(홀수)경우 0,1,2,3 까지
        outArray[i] = inpArray[newN-1-i]
    }
    return outArray
}

function reverseLeftRight(inpArray){
    const outArray = inpArray.map(v=>[...v])
    const newN = inpArray.length
    const newM = inpArray[0].length

    for(let i=0; i<newN; i++){ //inpArray[i][j]
        for(let j=0; j<newM; j++){
            outArray[i][j] = inpArray[i][newM-j-1]
        }
    }
    return outArray
}

// 머리터지는줄 알았네
function rotateRight90(inpArray){
    const newN = inpArray.length
    const newM = inpArray[0].length
    const outArray = new Array(newM).fill(-1).map(()=>new Array(newN).fill(-1))
    for(let i=0; i<newN;i++){
        for(let j=0; j<newM; j++){
            outArray[j][newN-1-i] = inpArray[i][j]
        }
    }
    return outArray
}

function rotateLeft90(inpArray){
    const newN = inpArray.length
    const newM = inpArray[0].length
    const outArray = new Array(newM).fill(-1).map(()=>new Array(newN).fill(-1))
    for(let i=0; i<newN;i++){
        for(let j=0; j<newM; j++){
            outArray[newM-1-j][i] = inpArray[i][j]
        }
    }
    return outArray
}

function pieceRotateRight(inpArray){
    const outArray = inpArray.map(v=>[...v])
    const newN = inpArray.length
    const newM = inpArray[0].length

    for(let i=newN/2; i<n; i++){
        for(let j=0; j<newM/2; j++){
            outArray[i-newN/2][j] = inpArray[i][j]
        }
    }

    for(let i=newN/2; i<newN; i++){
        for(let j=newM/2; j<newM; j++){
            outArray[i][j-newM/2] = inpArray[i][j]
        }
    }    

    for(let i=0; i<newN/2; i++){
        for(let j=newM/2; j<newM; j++){
            outArray[i+newN/2][j] = inpArray[i][j]
        }
    }

    for(let i=0; i<newN/2; i++){
        for(let j=0; j<newM/2; j++){
            outArray[i][j+newM/2] = inpArray[i][j]
        }
    }    
    return outArray
}

function pieceRotateLeft(inpArray){
    const outArray = inpArray.map(v=>[...v])
    const newN = inpArray.length
    const newM = inpArray[0].length

    for(let i=newN/2; i<newN; i++){
        for(let j=0; j<newM/2; j++){
            outArray[i][j+newM/2] = inpArray[i][j]
        }
    }
    for(let i=n/2; i<newN; i++){
        for(let j=m/2; j<newM; j++){
            outArray[i-newN/2][j] = inpArray[i][j]
        }
    }    
    for(let i=0; i<newN/2; i++){
        for(let j=m/2; j<newM; j++){
            outArray[i][j-newM/2] = inpArray[i][j]
        }
    }
    for(let i=0; i<newN/2; i++){
        for(let j=0; j<newM/2; j++){
            outArray[i+newN/2][j] = inpArray[i][j]
        }
    }    
    return outArray
}

const printDoubleArray = (inpArray) =>{
    const col = inpArray.length
    const row = inpArray[0].length
    for(let j=0; j<col; j++){
        for(let i=0; i<row; i++){
            process.stdout.write(String(inpArray[j][i])+' ')
        }
        console.log()
    }
}

const fs = require('fs')
const inp = fs.readFileSync("./16935배열돌리기3/input.txt").toString().replaceAll('\r','').split('\n')


const[ n, m, rep] = inp[0].split(' ').map((ele)=>Number(ele))
const inpAry = []
for(let i=1 ; i <= n; i++){
    inpAry[i-1] = inp[i].split(' ').map((ele)=>Number(ele))
}
const WhatCom = inp[n+1].split(' ').map(ele=>Number(ele))


let inpArray = [...inpAry]
for(let cnt=0; cnt<rep; cnt++){
    switch(WhatCom[cnt]){
        case 1: 
            inpArray = reverseTopDown(inpArray)
            break;
    
        case 2:
            inpArray = reverseLeftRight(inpArray)
            break;
    
        case 3:
            inpArray = rotateRight90(inpArray)
            break;
    
        case 4:
            inpArray = rotateLeft90(inpArray)
            break;
    
        case 5:
            inpArray = pieceRotateRight(inpArray)
            break;
    
        case 6:    
            inpArray = pieceRotateLeft(inpArray)
            break;
    }
}

printDoubleArray(inpArray)

