/*
많은 내장함수는 많은 기능을 위해 C++과 같은 하급언어로 작성되어짐
객체의 부분인 함수를 메소드라고 함
내장된 코드는 두 형태로 나뉨 : 함수와 메소드

익명함수 : 혼자선 암것두 못함 그래서 이벤트핸들러와 함께 사용됨
function(){
    alert('hello')
}

document.querySelector('button').onclick = function(){
    alert('hello')
}

변수에 익명함수를 넣을 수 있음 하지만 헷갈리니까 쓰지말기
var myGreeting = function(){
    alert('hello')
}
호출
myGreeting()

대신에 이 방식
function myGreeting(){
    alert('hello')
}
으로 쓰기

전역 스코프 
<script src="first.js"></script>
<script src="second.js"></script>
<script>
  greeting();
</script>

// first.js
var name = 'Chris';
function greeting() {
  alert('Hello ' + name + ': welcome to our company.');
}

// second.js
let name = 'Zaptec';
function greeting() {
  alert('Our company is called ' + name + '.');
}

first.js파일의 greeting()만 접근 가능, 또한 second.js name 변수도 두번 선언되어 오류


*/