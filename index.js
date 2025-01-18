class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numberOfDoors, getDetails) {
    super(make, model, year);
    this.numberOfDoors = numberOfDoors;
    this.getDetails = getDetails;
  }
}
class bike extends Vehicle {
  constructor(make, model, year, type) {
    super(make, model, year);
    this.type = type;
  }
}

const car1 = new Car("Toyota", "Camry", 2020, 4);
const car2 = new Car("Honda", "Civic", 2018, 2);
const car3 = new Car("Ford", "Mustang", 2021, 2);

const bike1 = new bike("Harley-Deavidson", "iron 883", 2019, "Cruiser");
const bike2 = new bike("Yamaha", "YZF R3", 2022, "Sport");
const bike3 = new bike("Kawasaki", "Ninja 400", 2021, "Sport");
