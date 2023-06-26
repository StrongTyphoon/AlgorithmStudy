/*
객체 기본

var person = {}

var objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value
};

// */

// const person = {                //객체 리터럴 : 서버와 통신할 때 따로따로보다 객체 하나를 통째로 전송
//     name: ['Bob', 'Smith'],     //프로퍼티
//     age: 32,
//     gender: 'male',
//     interests: ['music','skiing'],
//     bio: function(){            //메소드
//         console.log(this.name[0] + ' '+ this.name[1] + ' '+ this.age + 'years old')
//     },
//     greeting: function(){
//         console.log('Hi! I\'m '+this.name[0])
//     }
// }

// console.log(person.name)
// console.log(person.name[0])
// console.log(person.age)
// person.bio()
// person.greeting()

const person = {
    name:{
        first: 'Bob',
        last : 'Smith'
    },
    age: 32,
    gender: 'male',
    interests: ['music','skiing'],
    bio: function(){
        console.log(this.name[0] + ' '+ this.name[1] + ' '+ this.age + 'years old')
    },
    greeting: function(){
        console.log('Hi! I\'m '+this.name[0])
    }
    
}

console.log(person.name.first)  //하위 namespace 가지기

console.log(person['age'])  
console.log(person['name']['first'])    
// 괄호 표기법 : 배열속에 있는 항목에 접근하는 것과 같다. 
// 객체는 배열로 선언되어있는데 JS에서 배열은 각 항목마다 크기가 같지 않다.
// 따라서 다음과 같은 객체리터럴(연관배열)을 배열로 선언할 수 있는 것이다.

person.age = 45
person['name']['last'] = 'Cratchit'
person.farewell = function(){
    console.log("Bye everybody")
}
person['eyes'] = 'hazel'       //대괄호 표현의 장점은 멤버의 값을 동적으로 변경 가능 
console.log(person)

//person[myDataName] = myDataValue 와 같이 대괄호 표현만 다음과 같이 입력이 가능하다


// this:
// person 객체에서의 this는 person 객체를 뜻함 이는 객체 멤버의 커텍스트가 바뀌는 ㄱ경우에도 정확한 값을 사용하게 해줌
// String.length 에 괄호가 안붙는건 String클래스가 가진 멤버변수이기 때문이다

const abc = new String()
