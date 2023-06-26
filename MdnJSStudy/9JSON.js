/*
json인 JS 문법을 따르는 문자 기반의 데이터 포맷 
json은 문자열 형태로 존재, 데이터에 접근하기 위해 json객체로 변환할 필요가 있습니다

문자열에서 네이티브 객체로 변환하는 것은 Parsing이라고 함
네트워크를 통해 전달 할 수 있게 문자열로 변환하는 것을 stringification이라고 함

JSON은 JS 객체 리터럴 문법을 따르는 문자열이다.
JSON 안에 JS의 기본 데이터 타입인 문자열, 숫자, 배열, 불리언, 객체 포함가능

JSON 파일을 서버에서 가져오기 위하여 XMLHttpRequest (XHR) API를 사용하자
이는 우리가 서버로 부터 다양한 리소스를 가져오는 요청을 만들어 준다. 즉 전체 ㅍ ㅔ이지를 불러오지 않고 필요한 부분만 업데이트 할 수 있따.


*/


// var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
// const xml = require('xmlhttprequest')
// var request = xml.XMLHttpRequest()
// request.open('GET',requestURL)  // 서버의 데이터를 가져오는 GET과, 요청을 받아올 URL
// request.responseType = 'json'   // json 데이터 반환 받음
// request.send()      // 요청 보내기
// request.onload = function(){
//     var superHeros = request.response
//     console.log(superHeros)
// }
// console.log(superHeros)

/* 
아무튼 통신하기 전엔 stringify()로 JSON을 문자열형태로
데이터를 이용하기 위해 parse()로 객체로 변환한다.
*/

/*로컬 JSON 파일 불러오기 */
const fs = require('fs')
fs.readFile('./JSStudy/9JSON.json', (err, data)=>{
    if(err) throw err
    const user = JSON.parse(data)
    console.log(user)
    console.log(user['squadName'])
})
