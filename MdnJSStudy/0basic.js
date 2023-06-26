/*
자료형의 종류
숫자(정수, 부동소수)
문자열('이나"로 묶어야함)
불리언(true,false)
배열([]로 묶이고 쉼표로 구분)
객체
ex)

var dog = {name:'Spot', breed:'Dalmatian'}
dog.name

forEach : for문과 같이 반복문을 수행, 인자로 함수를 넣음
break나 continue가 없음
*/

const arr = [0,1,2,3,4,5]
arr.forEach((ele, idx, arr) => (console.log(ele)))


/**
map 배열안 요소들을 일괄적으로 변경 후 새 배열 생성
1대1매핑을 하지만 기존 객체를 수정하지 않는다.
 */

const arr2 = arr.map((ele)=>{return ele*2})
console.log(arr2)

/*
filter : callback함수의 조건에 해당하는 모든 요소가 있는 배열 새로 생성
 */

const arr3 = arr.filter((ele)=>{return ele%2==0})
console.log(arr3)
const data = [
    {name: '시연', age : 23},
    {name: '예원', age: 24 },
    {name: '예진', age: 24}
]

const name_24 = data.filter(x=> {return x.age==24})
console.log(name_24)

//find : filter와 비슷하지만 한개의 요소만 리턴

console.log(arr.find(ele=>{return ele%2==0}))

//1차원 배열 deep copy

const arrA = [1,2,3];
const arrB = [...arrA];

// 2차원 배열 deepcopy

const arrC = [[1,2,3],[4,5,6],[7,8,9]]
console.log(arrC.map(v=>[...arrC]))
