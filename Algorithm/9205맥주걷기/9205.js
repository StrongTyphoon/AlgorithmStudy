const inp = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
const testCase = +inp[0]
let ptr = 1

const isCanGo = (startx,starty,endx,endy)=>{
    return Math.abs(startx-endx) + Math.abs(starty-endy)<=1000
}

for(let i=0; i<testCase;i++){
    //입출력
    const convi = inp[ptr++]
    const [startX, startY] = inp[ptr++].split(' ').map(ele=>{return +ele})
    const conviAry = []
    const visit = []
    for(let j=0; j<convi;j++){
        conviAry.push(inp[ptr++].split(' ').map(ele=>{return +ele}))
        visit.push(false)
    }
    const [endX, endY] = inp[ptr++].split(' ').map(ele=>{return +ele})
    
   // console.log(`[${startX},${startY}] ,`,conviAry, `, [${endX},${endY}]`)
    
    let ans = 'sad'
    
    const dfs = (x,y,visit) => {
        //console.log(x,y,visit)
        if(isCanGo(x,y,endX,endY)){
            ans = 'happy'
        }
        else{
            for(let cnt=0; cnt<convi; cnt++){
                if(!visit[cnt]){                    
                    const temp = conviAry[cnt]
                   // console.log('x,y :',x,y,'temp:',temp[0],temp[1])

                    if(isCanGo(x,y,temp[0],temp[1])){
                        visit[cnt] = true
                        dfs(temp[0],temp[1],visit)
                    }
                    
                }
            }
        }
    }

    dfs(startX,startY,visit)
    console.log(ans)
}
