class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numberOfDoors) {
    super(make, model, year);
    this.numberOfDoors = numberOfDoors;
  }
  getDetail() {
    return `Car : ${this.make} ${this.model}, Year: ${this.year}, Doors: ${this.numberOfDoors}`;
  }
}
class Bike extends Vehicle {
  constructor(make, model, year, type) {
    super(make, model, year);
    this.type = type;
  }
  getDetail() {
    return `Bike : ${this.make} ${this.model}, Year: ${this.year}, Type: ${this.type}`;
  }
}

const car1 = new Car("Toyota", "Camry", 2020, 4);
const car2 = new Car("Honda", "Civic", 2018, 2);
const car3 = new Car("Ford", "Mustang", 2021, 2);

const bike1 = new Bike("Harley-Deavidson", "iron 883", 2019, "Cruiser");
const bike2 = new Bike("Yamaha", "YZF R3", 2022, "Sport");
const bike3 = new Bike("Kawasaki", "Ninja 400", 2021, "Sport");

console.log(car1.getDetail());
console.log(car2.getDetail());
console.log(car3.getDetail());

console.log(bike1.getDetail());
console.log(bike2.getDetail());
console.log(bike3.getDetail());
