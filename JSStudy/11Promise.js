/*
https://developer.mozilla.org/ko/docs/Learn/JavaScript/Asynchronous/Promises

promise는 어떤 작업의 중간 상태를 나타내는 오브젝트이다. 즉 미래에 어떤 종류의 결과가 반환됨을
약속해주는 오브젝트이다
즉 작업이 완ㄹ되어 결과를 반한해주는 정확한 시간을 보장해 주진 않으나, 
결과를 반환했을 때에 의도대로 코드를 진행시키거나, 에러를 깔끔하게 처리 가능

promise를 반환하는 웹 api 사용하기
예를들어 getUserMedia 를 통하여 카메라와 마이크를 사용하기 위한 권한요청을 사용자에게 한다.
promise가 없으면 이 결정이 내려지기전까지 브라우저의 모든 것을 사용할 수 없게 된다.
대신에 getUserMedia가 MediaStream(접근허락받은 디바이스)을 직접 반환하는 대신에 getUserMedia는 MediaStream을 포함한 promise를 반환한다.

function handleCallButton(evt) {
  setStatusMessage("Calling...");
  navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(chatStream => {
      selfViewElem.srcObject = chatStream;
      chatStream.getTracks().forEach(track => myPeerConnection.addTrack(track, chatStream));
      setStatusMessage("Connected");
    }).catch(err => {
      setStatusMessage("Failed to connect");
    });
}
이 기능은 상태 메시지에 "Calling..."을 출력하는 setStatusMessage() 함수로 시작하며 통화가 시도되고 있음을 나타냅니다. 
그런 다음 getUserMedia()을 호출하여 비디오와 오디오 트랙이 모두 있는 스트림 요청을 합니다. 
그리고 스트림을 획득하면 카메라에서 나오는 스트림을 "self view,"로 표시하기 위해 video엘리먼트를 설정합니다. 
그리고 각 스트림의 트랙을 가져가 다른 사용자와의 연결을 나타내는 WebRTC RTCPeerConnection에 추가합니다. 그리고 마지막으로 상태 메시지를 "Connected"로 업데이트 합니다.

getUserMedia() 가 실패하면, catch 블럭이 실행되며, setStatusMessage() 를 사용하여 상태창에 오류 메시지를 표시합니다.

여기서 중요한건 getUserMedia()는 카메라 스트림이 아직 확보되지 않았음에도 거의 즉시 반환을 해줬다는 것 입니다. 
handleCallButton() 함수가 자신을 호출한 코드로 결과를 이미 반환을 했더라도 getUserMedia()의 작업이 종료되면 프로그래머가 작성한 다음 핸들러를 호출할 것 입니다. 
앱이 스트리밍을 했다고 가정하지 않는 한 계속 실행될 수 있습니다

callback 지옥 : 피자토핑고르기 -> 순서대로 준비 => 순서대로 놓기 => 먹기
chooseToppings(function(toppings) {
  placeOrder(toppings, function(order) {
    collectOrder(order, function(pizza) {
      eatPizza(pizza);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);

=> 

promise 사용 
chooseToppings()
.then(function(toppings) {
  return placeOrder(toppings);
})
.then(function(order) {
  return collectOrder(order);
})
.then(function(pizza) {
  eatPizza(pizza);
})
.catch(failureCallback);

혹은 다음과 같이 가능
chooseToppings()
.then(toppings => placeOrder(toppings))
.then(order => collectOrder(order))
.then(pizza => eatPizza(pizza))
.catch(failureCallback);

단 한개의 .catch문으로 모든 에러를 처리, 그리고 mainThread를 차단하지 않음
즉 비동기식으로 실행됨
.then 블럭은 자신이 속한 블럭의 작업이 끝났을 경우 새 promise를 반환

다음장에 배울 async await 문법으로 좀 더 간결하게 만들어 보자

promise는 이벤트 리스너와 유사하지만 다른점이 있다.
1. 한번에 하나의 성공/실패 결과값을 가짐. 하나의 요청에 두번 성공, 실패가 불가능, 이미 성공한 작업에 도랑갈 수 없다.
2. 
*/

/*
Promise Terminology recap
1. promise가 생성되면 그 상태는 성공도 실패도 아닌 pending 상태이다
2. promise 결과가 반환되면 결과에 상관없이 resolved상태이다.
2-1. 성공적으로 처리된 promise는 fulfilled 상태이다. 이 상태가 될 경우
promise 체인의 다음.then() 블럭에 사용할 수 있는 값을 반환한다.
그리고 .then() 블럭 내부의 executor 함수에 promise 반환된 값이 파라미터로 전달된다.
2-2 실패한 promise는 rejected 상태이다. 이때 어떤 이유때문에 Promise가 rejected 됐는지
에러 메시지를 포함한 결과를 반환. 이는 .catch() 에서 상세한 에러 메세지 확인 가능
 */

/*
지금까지는 연쇄적으로 일어나는 작업에 사용 되는 일반적인 promise의 기능이다.
그런데 모든 promise 가 fulfilled 됐을 경우 코드를 실행 시키고 싶은 경우?
promise.all() 을 사용하면 된다. 
이는 promise 배열을 매개변수로 삼고, 배열의 모든 promise가 fulfil 일 경우에만
fulfil promise 오브젝트를 반환한다.

Promise.all([a,b,c]).then(values=>{

})
배열 내 a, b, c 의 Promise 객체가 모두 fulfil이면 .then블럭의 executor 함수로
promise 결과의 배열을 전달한다. 하나라도 reject라면 전체 결과가 reject가 된다.


/*
myPromise
.then(response => {
  doSomething(response);
})
.catch(e => {
  returnError(e);
})
.finally(() => {
  runFinalCode();
});

위와 같이 finally 메서드를 이용하여 코드 반복을 줄이고 좀 더 우아하게 일을 처리 가능하다

*/

/*
Own custom Promise를 만드는 법
Using the Promise constructor
resolve 와 reject는 promise가 fulfil, reject 일때 일을 수행하기 위한 호출함수
 */
// let timeoutPromise = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("Success!")
//   },2000)
// })
// timeoutPromise
// .then((message)=>alert(message))


function timeoutPromise(message, interval) {
  return new Promise((resolve, reject) => {
    if (message === '' || typeof message !== 'string') {
      reject('Message is empty or not a string');
    } else if (interval < 0 || typeof interval !== 'number') {
      reject('Interval is negative or not a number');
    } else {
      setTimeout(function(){
        resolve(message);
      }, interval);
    }
  });
};

timeoutPromise('Hello There!', 1000)
.then(message=>{
  alert(message)
})
.catch(e=>{
  console.log('Error : ' + e)
})

// 추가적인 공부를 위해 
/*

*/