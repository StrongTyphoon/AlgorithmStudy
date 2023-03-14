const fs = require('fs')
const inp = fs.readFileSync('dev/stdin').toString().trim().split('')
inp.sort((a,b)=>{return a.charCodeAt(0)-b.charCodeAt(0)})
const joinStr = inp.join('')
//console.log(joinStr)



function solve(){
    const dic = {}

    for(const str of joinStr){
        if (dic.hasOwnProperty(str)){
            dic[str] ++
        }
        else{
            dic[str] = 1
        }
    }

    let oddStr = ''
    for(let i in dic){
        //console.log(dic[i])
        if(dic[i]%2 === 1){
            if(!oddStr){
                oddStr = i
            }
            else{
                console.log("I'm Sorry Hansoo")
                return
            }
        }
    }
    //console.log(dic)

    if(oddStr){
        dic[oddStr] --
    }
    for(let i in dic){
        dic[i] /= 2
    }
    //console.log(dic)

    let ans = ''
    const stack = []
    
    for(let i in dic){
        for(let j=0; j<dic[i];j++){
            ans += i
            stack.push(i)
        }
    }
    if(oddStr){
        ans += oddStr
    }
    //console.log(stack)
    const len = stack.length
    for(let k=0; k<len; k++){
        ans += stack.pop()
    }
    console.log(ans)
   


}

solve()