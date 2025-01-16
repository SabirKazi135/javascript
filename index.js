const Person1 = {
  firstName: "Sabir",
  lastName: "Kazi",
  age: 21,
  isEmployee: false,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
const Person2 = {
  firstName: "Raees",
  lastName: "jamadar",
  age: 22,
  isEmployee: false,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(Person1.firstName);
console.log(Person1.lastName);
console.log(Person1.age);
console.log(Person1.isEmployee);
console.log(Person1.fullName());

console.log("---------------");
console.log(Person2.firstName);
console.log(Person2.lastName);
console.log(Person2.age);
console.log(Person2.isEmployee);
console.log(Person2.fullName());
