const fs = require('fs')
const inp = fs.readFileSync('./1992쿼드트리/input.txt').toString().trim().replaceAll('\r','').split('\n')
const N = +inp[0]
const inpAry = inp.slice(1).map(ele=>ele.split('').map(e=>+e))

const chkAllZero = (images)=>{
    for(let i=0; i<images.length; i++){
        for(let j=0; j<images.length; j++){
            if(images[i][j]===1) return false
        }
    }
    return true
}

const chkAllOne = (images)=>{
    for(let i=0; i<images.length; i++){
        for(let j=0; j<images.length; j++){
            if(images[i][j]===0){
                return false
            } 
        }
    }
    return true
}

const divCon = (images) =>{
    if(chkAllZero(images)){
        return "0"
    }

    if(chkAllOne(images)){
        return "1"
    }

    const halflen = images.length/2

    const Ary1 = []
    const Ary2 = []
    const Ary3 = []
    const Ary4 = []

    for(let i=0;i<halflen;i++){
        Ary1.push(images[i].slice(0,halflen))
        Ary2.push(images[i].slice(halflen))
    }

    for(let i=halflen; i<images.length; i++){
        Ary3.push(images[i].slice(0,halflen))
        Ary4.push(images[i].slice(halflen))
    }
//    console.log(Ary1,'\n', Ary2,'\n',Ary3,'\n', Ary4,'\n')

    return '('+divCon(Ary1)+divCon(Ary2)+divCon(Ary3)+divCon(Ary4)+')'


}

console.log(divCon(inpAry))