/*
비동기프로그램은 오래실행되는 작업이 끝나는 것을 기다리지 않고, 다른 이벤트에 응답할 수 있게 함
예를들어, 브라우저의 많은 기능들이 (특히 흥미로운 것) 모두 비동기적이다. 

fetch() 이용하여 http 요청 만들기
getUserMedia() 사용해서 사용자 카메라 또는 마이크 접근
showOpenFilePicker() 이용하여 사용자에게 파일 선택을 요청

*/

const name = 'Miriam'
const greeting = `Hello, my name is ${name}!` 
console.log(greeting)

function makeGreeting(name){
    return `Hello, my name is ${name}!` 
}

// makeGreeting은 동기 함수다. 또한 greeting또한 동기프로그래밍에 포함된다

/* 
이 같은 동기식 프로그래밍의 문제점은 장기 실행 동기함수가 발생하면 오랜기간 동안
다른 작업을 수행할 수 없다.

비동기식 함수를 사용하여
1. 함수 호출하여 장기적으로 실행하는 작업을 시작한다.
2. 이 함수로 작업을 시작하고 즉시 복귀하여 다른 이벤트에 응답할 수 있게 한다.
3. 작업이 완료되면 결과를 알려준다.

이벤트처리기? 또한 비동기 프로그래밍이다. 
 */

/*
이벤트 핸들러는 콜백의 일종이다. 콜백

 */

// function doStep1(init) {
//     return init + 1;
//   }
  
//   function doStep2(init) {
//     return init + 2;
//   }
  
//   function doStep3(init) {
//     return init + 3;
//   }
  
//   function doOperation() {
//     let result = 0;
//     result = doStep1(result);
//     result = doStep2(result);
//     result = doStep3(result);
//     console.log(`result: ${result}`);
//   }
  
//   doOperation();
  // 를 동기식으로 구현하기는 쉽다. 하지만 이를 콜백을 이용하여 구현하면 다음과 같다.


  function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
  }
  
  function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
  }
  
  function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
  }
  
  function doOperation() {
    doStep1(0, result1 => {
      doStep2(result1, result2 => {
        doStep3(result2, result3 => {
          console.log(`result: ${result3}`);
        });
      });
    });
  
  }
  // 콜백 함수 내부에 콜백 함수가 선언되어 콜백 지옥이 생긴다.
  // 이는 오류처리도 어려워지고, 가독성이 떨어진다. 
  // 따라서 최신 비동기 API는 콜백대신에 Promise를 사용한다.
  doOperation();


