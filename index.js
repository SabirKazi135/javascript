class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  both() {
    return `Name is ${this.name} and Age is ${this.age}`;
  }
}

const per1 = new Person("sabir", 22);
const per2 = new Person("raees", 21);

console.log(per1.both());
console.log(per2.both());
