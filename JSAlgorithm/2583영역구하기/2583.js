const fs = require('fs')
const inp = fs.readFileSync('./2583영역구하기/input.txt').toString().split('\n')
const [height,width,cnt] = inp[0].split(' ').map(ele=>+ele)
const inpAry = new Array(height).fill(1).map(()=>new Array(width).fill(1))

for(let i=1; i<cnt+1; i++){
    const [x1, y1, x2, y2] = inp[i].split(' ').map(ele=>+ele)

    for(let y=height-y2; y<height-y1; y++){//y=1, 2,
        for(let x=x1; x<x2; x++ ){//x=0,1,2,3
            inpAry[y][x] = 0

        }
    }

}
//console.log(inpAry)//0이 직사각형 영역이고, 1이 빈 영역이다 즉 인접한 1의 개수들의 수를 세아리면 된다

// 재귀 dfs로 개수를 세아릴 수 있나? bfs는 가능할거같은데 stack 이용 dfs gogo
const ans = []
const delta = [[1,0],[0,1],[-1,0],[0,-1]]
for(let i=0; i<height; i++){
    for(let j=0; j<width; j++){
        let cnt = 0
        if(inpAry[i][j]){
            const stack = []
            stack.push([i,j])
            inpAry[i][j] = 0
            while(stack.length){
                const [oldx,oldy] = stack.pop()
                cnt++
                for(const [dx, dy] of delta){
                    const [x,y] = [oldx+dx, oldy+dy]
                    if(x>-1&&x<height&&y>-1&&y<width){
                        if(inpAry[x][y]){
                            inpAry[x][y] = 0
                            stack.push([x,y])
                        }
                    }
                }
            }
            ans.push(cnt)
        }
    }
}

ans.sort((a,b)=>{return a-b})
console.log(ans.length)
for(let a of ans){
    process.stdout.write(a+' ')
}
