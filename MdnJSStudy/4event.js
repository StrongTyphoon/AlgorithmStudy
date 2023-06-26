/*
https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Events
이벤트 : 프로그래밍에서 발생하는 사건과 동작들

예시
The user selects, clicks, or hovers the cursor over a certain element. : hover, click, select
The user chooses a key on the keyboard. : 키보드에 키 입력
The user resizes or closes the browser window. : 윈도우 브라우저 크기조절, 창닫기
A web page finishes loading. : 로딩이 끝났을 경우
A form is submitted. : form 제출
A video is played, paused, or ends. 
An error occurs.

이벤트를 다루기 위해 이벤트핸들러(이벤트리스너)를 사용한다

참고로 웹이벤트는 JS언어의 일부가 아니고 브라우저상 API의 부분이다.

1. addEventListener
const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

이벤트는 자바스크립트에 종속된게 아니다. 다른 언어에서의 이벤트들은 JS 이벤트와 다르다
nodejs(런타임언어) 에서는 이벤트 컨트롤 방법이 다르다

2. onclick
const btn = document.querySelector('button');

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

3.onclick = function
const btn = document.querySelector('button');

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;

이벤트 핸들러 프로퍼티가 다양하다. 

다양한 이벤트들 (일반적으로 대부분 사용가능)
1. onfocus, onblur : 탭키로 포커스를 잡고, 또 탭을 눌러 포커스를 풀 때에 발생, 양식필드(form field)가 포커스, 올바르지 않을 때 속성을 나타내기 위해 사용
2. ondblclick : 오직 버튼이 더블 클릭 되었을 경우
3. window.onkeydown, window.onkeyup : 키보드의 키를 누르고 땔 경우 반응, 이는 버튼과 같은 곳에 핸들러 등록X, 전체 브라우저를 나타내는 window에 등록해야함
4. onmouseover, onmouseout : 마우스포인터가 올라가 있을때, 혹은 포인터가 버튼을 벗어날 때 발생

위의 다양한 이벤트들은 대부분 사용이 가능하지만 onplay는 video태그에만 사용가능

다음과 같은 HTML 속성의 인라인 이벤트 핸들러는 속도가 느려질 수 있으며 하지 말 것
<button onclick="bgChange()">Press me</button>

JS와 HTML를 뒤죽박죽 섞으면 JS를 분석(parse)하기 힘들어짐, 
JS를 분리된 파일로 나둘 시에 다수의 HTML 문서에 적용 가능
또한 유지보수가 힘들어지고 다수의 버튼들에 대해 이벤트 핸들러 적용이 힘듬

btn.removeEventListener('click', bgChange);
안쓰는 핸들러 지우는 것은 작은프로그램에서 필수적이지 않으나, 큰 프로그램에선 효율적일 수 있다.

이벤트 객체
function bgChange(e) {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener('click', bgChange);
와 같은 코드에서 매개변수 e는 이벤트 객체를 의미한다. 예시에서 e.target은 버튼 그 자체를 의미함
target 프로퍼티는 이벤트가 발생된 요소에 대한 참조이다. 
이벤트에 대한 자세한 document https://developer.mozilla.org/ko/docs/Web/API/Event

이벤트 버블링과 캡처
이벤트 핸들러가 겹쳐져있다면 브라우저는 캡쳐링과 버블링 단계를 실행함

캡처링 : 요소의 가장 바깥쪽의 조상(html)이 캡처링 단계에 대해 그것에 등록된 onclick 이벤트 핸들러가 있는지 검사 후 실행
그리고 html 내부에 있는 다음 요소로 이동하여 이동하고 실제로 선택된 요소에 닿을때 까지 계속 반복

버블링 : 브라우저는 선택된 요소가 onclick 이벤트 핸들러를 가지고 있는지 확인 있으면 실행
없다면 조상요소로 이동하고 검사, ... html요소에 닿을때 까지 반복

현대 브라우저에선 대부분 버블링임. 상향식으로 올라감 
예제에서는 비디오 클릭시 영상 실행, 비디오 바깥 div 클릭시 비디오 숨김인데
비디오 클릭 시 -> 영상 실행 -> 윗 div 박스에 onclick 이벤트 핸들러 확인 -> 창 닫음
의 결과가 발생함

이를 해결하기 위해 표준 이벤트 객체가 가진 stopPropagation() 사용

video.onclick = function(e) { // 첫번째 이벤트 객체가 호출되었을 경우
  e.stopPropagation();        // 이벤트가 더이상 위로 전파되지 않게 만들어 준다.
  video.play();
};

버블링으로 이벤트 위임의 장점을 가짐 
이벤트 위임 : 자식에 이벤트 리스너를 사용 대신에 부모에 이벤트 리스너를 설정해 자식 클릭 시 부모까지 올라올 수 있음
https://davidwalsh.name/event-delegate


*/
