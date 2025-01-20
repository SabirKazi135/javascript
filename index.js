class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const per1 = new Person("sabir", 21, "vaibhav nagar", "belgavi", "india");
const per2 = new Person("raees", 20, "tipu nagar", "gokak", "india");

console.log(per1.address.street);
