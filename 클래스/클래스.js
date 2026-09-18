// 클래스 사용
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    //메서드
    console.log(`안녕! 나는 ${this.name}, ${this.age}살이야.`);
  }
}

const p1 = new Person("은관", 19);
p1.sayHi();
