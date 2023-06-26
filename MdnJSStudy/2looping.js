/*
반복문

*/

// for(let i=0; i<10; i++){
//     if(i === 5){
//         continue
//     }
//     else if(i === 7){
//         break
//     }
//     console.log(i)
    
// }

// let i = 0
// while(i<5){
//     process.stdout.write(i+ ' ')
//     i++
// }
// console.log()
// do{
//     process.stdout.write(i+' ')
//     i++
// }
// while(i<10)
/*
foreach반복문: 오직 Array인스턴스에만 사용가능 ES6부터 Map, Set등에 지원됨
배열의 요소들을 반복하여 사용가능

 */

var items = ['item1','item2','item3']
// forEach인자로 callback 함수를 등록가능함, 인덱스와 값에 접근가능 맵이랑 비슷한 느낌
items.forEach((ele)=>{console.log(ele)})

/* for in 반복문 : Object 객체의 속성들을 반복하여 작업을 수행가능 모든객체에 사용가능
for in 구문은 객체의 key값에 접근가능 하지만 value에 접근은 불가능 

*/

var obj = {
    a:1,
    b:2,
    c:3
}

for(var prop in obj){
    console.log(prop, obj[prop])
}

/* for of 반복문: ES6에 추가되었으며, 컬렉션 객체가 [Symbol.iterator]속성 가져야함
파이썬에서 in 느낌?
*/

var iterable = [10,20,30]
for(var value of iterable){
    console.log(value)
}