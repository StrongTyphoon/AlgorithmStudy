const fs = require('fs')
const inp = fs.readFileSync('./4659비밀번호발음/input.txt').toString().replaceAll('\r','').split('\n')
let ptr = 0
const vowel = ['a','e','i','o','u']
while(1){
    const JaMoeum = []
    const str = inp[ptr++]
    let continue2 = ''
    let continue2bool = false
    if(str === 'end'){
        break
    }

    for(let s of str){
        let Mo = 'J'
        for(let jm of vowel){
            if(s===jm){
                Mo = 'M'
            }
        }
        
        if(!continue2){
            continue2 = s 
        }
        else{
            if(continue2 === s){
                if(s === 'e' || s === 'o'){
                    continue2 =''
                }
                else{
                    continue2bool = true
                }
            }
            else{
                continue2 = s
            }
        }

        JaMoeum.push(Mo)
    }


    let AllJaeum = true
    let MJ3EA = false
    let stack = []


    for(let jm of JaMoeum){
        if(jm === 'M'){
            AllJaeum = false            // 1번규칙
        }

        if(stack.length === 0){
            stack.push(jm)
        }
        else{
            if(stack[stack.length-1] === jm){
                stack.push(jm)
            }
            else{
                stack = []
                stack.push(jm)
            }
        }
        if(stack.length > 2){
            MJ3EA = true
            break
        }
    }





    if(AllJaeum){
        console.log('<'+str+'>' +' is not acceptable.')
        continue
    }
    else if(MJ3EA){
        console.log('<'+str+'>' +' is not acceptable.')
        continue
    }
    else if(continue2bool){
        console.log('<'+str+'>' +' is not acceptable.')
        continue
    }
    else{
        console.log('<'+str+'>' +' is acceptable.')
    }

}
