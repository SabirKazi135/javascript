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
console.log(Person1.fullName);
