/*
객체지향 프로그래밍 in JS
추상자료형을 만들어낸다.

HOW? class를 사용하는데 이는 아무것도 안하고 새로운 객체를 찍어낼 때의 탬플릿역할
찍어낸 객체들은 class의 인스턴스라고 한다.

class 선언
Hoisting : 함수선언은 정의 전 호출가능 but 클래스는 반드시 정의한 뒤에 사용가능
const p = new Rectangle()   //ReferenceError
class Rerctange{}   

const abc = fnc()     // 이건가능
function fnc(){
    console.log('hi')
}

*/

class Rectangle{
    constructor(height,width){
        this.height = height
        this.width = width
    }
}

const p = new Rectangle()

/*
Polymorphism : when a method has the same name but a different implementation in different classes - is called polymorphism. 
Overrids: When a method in a subclass replaces the superclass's implementation, we say that the subclass overrides the version in the superclass.
Encapsulation:

class Student : extends Person
    properties
       private year
    constructor
        Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }

student = new Student('Weber', 1)
student.year // error: 'year' is a private property of Student

private 속성으로 정의하면 클래스 외부에서 그 속성을 접근할 수 없다 
이는 속성앞에 _name 이런식으로 private 속성이라고 convention으로 사용자에게 알려준다

constructor 는 클래스 정의를 가능하게 하고, 객체의 모양을 잡게해주며, 객체가 가지는 메소드를 포함한다. 그러나 프로토타입은 여기서 사용되어진다(?)
예를들어, 메소드가 constructor의 프로토타입 속성으로 정의되면, 모든 객체들은 constructor의 prototype에 의해 만들어진다. 또한 constructor를 만들 필요가 없다

constructors in JavaScript provide us with something like a class definition, enabling us to define the "shape" of an object, including any methods it contains, 
in a single place. But prototypes can be used here, too. 
For example, if a method is defined on a constructor's prototype property, then all objects created using that constructor get that method via their prototype, 
and we don't need to define it in the constructor.

프로토 타입 체인은 상속을 하기위한 자연스러운 방법이다. 
the prototype chain seems like a natural way to implement inheritance. 
For example, if we can have a Student object whose prototype is Person, then it can inherit name and override introduceSelf().

또한 prototype chain 이 상속계급도 같은 느낌이지만 조금 다른면도 있다. 
*/