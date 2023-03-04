function rotateAry(inpArray, move){
    const outArray = inpArray.map(ele=>[...ele])
    for(let i=0; i<cnt; i++){
        // 화살표 아래방향
        for(let j=i; j<n-1-i; j++){
            outArray[j+1][i] = inpArray[j][i]
        }
        // 화살표 오른방향
        for(let k=i; k<m-1-i ; k++){
            outArray[n-1-i][k+1] = inpArray[n-1-i][k]
        }
        // 화살표 위방향
        for(let l=n-i-1; l>i ; l--){
            outArray[l-1][m-1-i] = inpArray[l][m-1-i]
        }
        // 화살표 왼쪽방향
        for(let t=m-1-i; t>i; t--){
            outArray[i][t-1] = inpArray[i][t]
        }
    }
    return outArray
}

const rotate = (inpArray, mov) => {
    const outArray = inpArray.map(ele=>[...ele])
    for(let i=0; i<cnt; i++){
        const [newN, newM] = [n-i-1,m-i-1]
        let [down,right,left,top] = [true,false,false,false]
        let [initX, initY] = [i, i]
        // 처음 위치 잡기
        for(let i=0; i<mov; i++){
            if(down){
                initY += 1
                if(initY === newN){
                    down = false
                    right = true
                }
            }
            else if(right){
                initX += 1
                if(initX === newM){
                    right = false
                    top = true
                }
            }
            else if(top){
                initY -= 1
                if(initY === i){
                    top = false
                    left = true
                }
            }
            else if(left){
                initX -= 1
                if(initX === i){
                    left = false
                    down = true
                }
            }
            console.log(initX, initY)
        // 전탐색
        // for(let x=i; x<n-i-1;x++){
        //     inpAry[x][]
        // }

        }

        console.log('answer:',initX,initY)
    }   
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

// 입력받기
const fs = require('fs')
const inp = fs.readFileSync("./16926배열돌리기1/input.txt").toString().replaceAll('\r','').split('\n')
const[ n, m, rep] = inp[0].split(' ').map((ele)=>Number(ele))
const inpAry = []
for(let i=1 ; i <= n; i++){
    inpAry[i-1] = inp[i].split(' ').map((ele)=>Number(ele))
}

const cnt = Math.min(n,m)/2

rotate(inpAry,rep)

