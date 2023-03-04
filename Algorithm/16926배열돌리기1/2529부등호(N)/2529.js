// 입력받기
const fs = require('fs')
const inp = fs.readFileSync("./2529부등호/input.txt").toString().replaceAll('\r','').split('\n')
const n = Number(inp[0])
const inpArray = inp[1].split(' ')


console.log(n, inpArray)

function dfs(){
    var stack = new Stack();
    var temp = this.first;
    while (temp) {
        temp.inTree = false;
        temp = temp.next;
    }
    temp = this.first;
    stack.push(temp); // 스택에 첫 버텍스를 넣음
    temp.inTree = true;
    while (stack.count) { // 탐색을 완료할 때까지
        temp = stack.pop(); // 넣었던 버텍스를 하나씩 꺼냄
        console.log(temp.key);
        temp.inTree = true;
        var arc = temp.arc;
        while (arc) {
        if (!arc.destination.inTree) {
            stack.push(arc.destination); // 꺼낸 것과 연결된 버텍스들을 스택에 넣음
            arc.destination.inTree = true;
        }
        arc = arc.nextArc;
        }
    }
}