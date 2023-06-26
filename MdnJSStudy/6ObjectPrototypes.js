/* 
https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes
객체를 상속하기 위해 프로토타입 방식 사용 in JS
JS : 프로토타입 기반 언어 

모든 객체들은 메소드와 속성들을 상속받기 위한 템플릿으로써 프로토타입 객체를 가진다.
프로토타입 객체도 상위 프로토타입 객체로부터 메소드와 속성을 상속받을 수 있다.
이를 프로토 타입 체인이라 한다.
다른 객체에 정의된 메소드와 속성을 한 객체에서 사용가능하게 함

상속되는 속성과 메소드들은 각 개체가 아니라 객체의 생성자의 prototype 속성에 정의됨
prototype 속성에서 파생된 __proto__ 속성으로 객체 인스턴스에 구현 
이 연결을 따라 프로토타입 체인을 타고 올라감

예제를 보면 
우선 person1객체는 Person으로부터 상속받고, Person은 Object로 부터 상속받는다.

person1.valueOf()를 실행 시, person1에 메소드가 있는지 check 
-> 없으므로 프로토타입객체(Person생성자의 프로토타입)에 메소드 있는지 check
-> 없으므로 person() 생성자의 프로토타입 객체의 프로토타입 객체(Object생성자의 프로토타입) 메소드 check

한 객체의 메소드와 속성이 다른객체로 복사되는 것이 아닌 체인을 타고 올라가며 접근함

프로토타입 객체에 접근하는 공식적인 방법은 없으나 모던 브라우저에서 __proto__속성을 통해 접근하도록 구현함
person1.__proto__, person1.__proto__.__proto__ 구경가능
ECMAScript 2015부터는 Object.getPrototypeOf(obj) 함수를 통해 객체의 프로토타입 객체에 바로 접근할 수 있게 되었습니다..+

String.prototype 콘솔창에 찍어보면 상속받는 메소드와 속성들을 확인할 수 있다. 또한 string의 프로트타입 객체의 프로토타입 객체(Object 생성자) 또한 확인 가능하다

var person2 = Object.create(person1)
create() 메소드는 주어진 객체를 프로토 타입 객체로 삼아 새로운 객체를 생성 

person2.__proto__ 는 person1 이 출력

모든 생성자 함수는 constructor 속성을 지닌 객체를 프로토타입 객체로 가지고 있음
->
https://velog.io/@h0ngwon/Javascript-proto-vs-prototype-%EC%B0%A8%EC%9D%B4

person1.constructor, person2.constructor 는 Person생성자를 반환

var person3 = new person1.construcor('Karen', 'Stemphensos', 26, 'female', ['playing drum'])
과 같이 선언 가능


*/

//프로토타입 수정하기
Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
};

/*
this: 현재 객체를 가르킴
__proto__ : 겍체의 프로토타입객체를 가르키는 내장 객체, 모든 객체가 가지고 있고 하나의 포인터인듯
prototype : 상속시키려는 멤버들이 정의된 객체, 함수객체만 가지고 있다. 
construcotr : 프로토타입 객체가 가지며 원래 객체를 가르킴

이건 다시 공부하자 ㅋㅋ어려워
*/
