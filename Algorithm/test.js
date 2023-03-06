// const n = 5
// const visit = new Array(n).fill(false).map(ele=>{return new Array(n).fill(false)})
// visit[3][2] = true
// console.log(visit) 
    
// let i = 0
// console.log(i)
// console.log(i++)
// console.log(++i)

// console.log(Math.abs(-100))

const dfs = (x,visit) => {
    console.log(x,visit)
    visit[x] = true

    for(let cnt=0; cnt<5; cnt++){
        console.log('x:',x, 'cnt:', cnt, visit)
        if(!visit[cnt]){                    
            const temp = cnt
            console.log(x, temp)
            dfs(temp, visit)    
            
        }
    }
}

dfs(0, [false,false,false,false,false])
