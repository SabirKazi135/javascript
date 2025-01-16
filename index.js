class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const per1 = new Person("Sabir", "Kazi", 21);
const per2 = new Person("Raees", "Jamadar", 20);
const per3 = new Person("Siddiq", "Untwale", 22);
const per4 = new Person("Taif", "Bepari", 23);

const persons = [per1, per2, per3, per4];

persons.forEach((per) => {
  console.log(per.firstName);
  console.log(per.lastName);
  console.log(per.age);
  console.log(per.fullName());
  console.log("");
});
