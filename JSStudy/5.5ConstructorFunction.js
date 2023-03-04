/*
생성자 함수(constructor function)는 일반함수와 같으나 두 관례가 있음
1. 함수 이름의 첫 글자는 대문자
2. new 연산자를 붙여 실행


*/

function User(name){
    this.name = name
    this.isAdmin = false
}

let user = new User("보라")
// 문구는 다음과 같다.
// let user = {
//      name: "보라",
//      isAdmin: false
//}
console.log(user.name)