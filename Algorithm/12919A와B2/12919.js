class Queue{
        constructor(){
            this.storage = {}
            this.head = 0
            this.tail = 0
            this.length = 0
        }
        
        push(ele){
            this.storage[this.tail] = ele
            this.tail ++
            this.length ++
        }

        shift(){
            const removed = this.storage[this.head]
            delete this.storage[this.head]
            this.head ++
            this.length --
            return removed
        }
        
        print(){
            var data = ""
            var n = this.head
            while(this.tail>n){
                data = data+this.storage[n]+","
                n++
            }
            return data
        }
    }


// bfs 알고리즘 사용했지만, 시간초과가 났다. B의 개수를 세아려 B의 개수를 넘어서면 잘라내볼까? // 안되네 접고 다른 알고리즘 이용해야 겠다.
const inp = require('fs').readFileSync('./12919A와B2/input.txt').toString().trim().replaceAll('\r','').split('\n')

const [S, T] = inp

//console.log(S,T)

function revStr(s){
    const len = s.length
    let rets = ''
    for(let i=0; i<len; i++){
        rets += s[len-i-1]
    }
    return rets
}

function findXnum(s,x){
    let cnt = 0
    for(const i of s){
        if(i===x){
            cnt++
        }
    }
    return cnt
}

const queue = new Queue()
queue.push(S)
const [Tlen, TANum, TBNum] = [T.length,findXnum(T,'A'),findXnum(T,'B')]
let ans = 0
while(queue.length){
    const newS = queue.shift()
//    console.log(newS)
    if(newS === T){
        ans = 1
        break
    }
    if(newS.length<Tlen && TANum>findXnum(newS,'A') && TBNum>findXnum(newS, 'B')){
        queue.push(newS+'A')
        queue.push(revStr(newS+'B'))
    }
}

console.log(ans)