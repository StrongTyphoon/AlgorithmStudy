/*자바스크립트의 클래스 
프로토 타입 다시 공부하고 다시 클래스 보자 .. 머리깨지겠다
*/

function Brick(){
    this.width = 10
    this.height = 20
}

function BlueGlassBrick(){
    Brick.call(this)
    // BlueGlassBrick에는 매개변수가 없으므로 넘겨받은 인수는 없고, property만 넘겨받는다
    this.opacity = 0.5
    this.color = 'blue'
}

const BGB = new BlueGlassBrick()
console.log(BGB.color)
console.log(BGB.height)