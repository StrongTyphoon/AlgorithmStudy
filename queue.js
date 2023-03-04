    class Queue{
        constructor(){
            this.storage = {}
            this.head = 0
            this.tail = 0
            this.length = 0
        }
        
        enqueue(ele){
            this.storage[this.tail] = ele
            this.tail ++
            this.length ++
        }

        dequeue(ele){
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

    //1000건 이상의 데이터는 queue 사용 권장