/*
if, else 문과 if, else if, else 문

비교 연산자 
=== : 같은지? 
!== : 다른지? 
< / > : 작은지? / 큰지? 
<= / >= : 같거나 작은지? / 같거나 큰지?

if (조건)
조건에 false, undefined, null, 0, Nan, '' (빈문자열) 이 아니면 if문 실행

&& : and연산자
|| : or연산자

if (x === 5 || 7 || 10 || 20) {
  // run my code
}  => 항상 truthy 함 (x가 5이거나 x가 7이거나 .. 의 원하는 조건을 나타내는 식이 아님)

if (x === 5 || x === 7 || x === 10 ||x === 20) {
  // run my code
}  => 이런식으로 해야지 작동함


*/

if("abc" && 1 && true){
    console.log("truthy check")
}
else{
    console.log("falsy check")
}

/*
Switch문 -> if else문 단축

<Syntax of Switch>
switch (expression) {
  case choice1:
    run this code
    break;        //break 문 뒤엔 세미콜론

  case choice2:
    run this code instead
    break;

  // 원하는 만큼 많은 case를 포함하십시오

  default:        // 일치하는 항목이 없으면 실행되는 기본 옵션, break 문은 넣지 않음
    actually, just run this code  
}

*/

// const select = document.querySelector('select');
// const para = document.querySelector('p');

// select.addEventListener('change', setWeather);


// function setWeather() {
//   const choice = select.value;

//   switch (choice) {
//     case 'sunny':
//       para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
//       break;
//     case 'rainy':
//       para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
//       break;
//     case 'snowing':
//       para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
//       break;
//     case 'overcast':
//       para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
//       break;
//     default:
//       para.textContent = '';
//   }
// }

/*
삼항연산자
( condition ) ? run this code(true) : run this code instead(false)
*/

// const select = document.querySelector('select')
// const html = document.querySelector('html')
// document.body.style.padding = '10px'

// function update(bgColor, textColor){
//   html.style.backgroundColor = bgColor
//   html.style.color = textColor
// }

// select.onchange = function(){
//   (select.value === 'black') ? update('black','white') : update('white', 'black')
// }

