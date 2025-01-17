class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`This ${this.name} moves at a speed of ${speed}kmp`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age); // Pass name and age to the parent constructor
    this.runSpeed = runSpeed; // Set the Rabbit-specific property
  }

  run() {
    console.log(`This ${this.name} can run`);
    super.move(this.runSpeed);
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age); // Pass name and age to the parent constructor
    this.swimSpeed = swimSpeed; // Set the Fish-specific property
  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age); // Pass name and age to the parent constructor
    this.flySpeed = flySpeed; // Set the Hawk-specific property
  }
}

// Creating instances
const rabbit1 = new Rabbit("Rabo", 1, 25);
const fish1 = new Fish("Fisho", 1, 15);
const hawk1 = new Hawk("Hawko", 1, 40);

// Logging the insta// Hawk { name: 'Hawko', age: 1, flySpeed: 40 }

rabbit1.run();
