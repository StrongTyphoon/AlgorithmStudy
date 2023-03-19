const fs = require('fs')
const inp = fs.readFileSync('./1012유기농배추/input.txt').toString().trim().split('\n')

const testcase = +inp[0]
let ptr = 1
for(let _=0; _<testcase; _++){
    const [width, height, cnt] = inp[ptr++].split(' ').map(ele=>+ele)
    const farm = new Array(height).fill(0).map(()=>new Array(width).fill(0))
    for(let i=0; i<cnt; i++){
        const[w, h] = inp[ptr++].split(' ').map(ele=>+ele)
        farm[h][w] = 1
    }
    //console.log(farm)
    const visit = new Array(height).fill(0).map(()=>new Array(width).fill(false))
    let ans = 0
    for(let i=0; i<height; i++){
        for(let j=0; j<width; j++){
            if(farm[i][j]){
                if(!visit[i][j]){
                    ans ++
                    dfs(i,j)
                }
            }
        }
    }

    console.log(ans)

    function dfs(x,y){
        const delta = [[1,0],[-1,0], [0,1], [0,-1]]
        visit[x][y] = true

        for(const [dx, dy] of delta){
            const [newX, newY] = [x+dx, y+dy]
            if(-1<newX&&newX<height&&-1<newY&&newY<width){
                if(farm[newX][newY]){
                    if(!visit[newX][newY]){
                        dfs(newX,newY)
                    }
                }
            }
        }
    }
    
}
