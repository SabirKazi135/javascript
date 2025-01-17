class Animal {}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    this.name = name;
    this.age = age;
    this.runSpeed = runSpeed;
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    this.name = name;
    this.age = age;
    this.swimSpeed = swimSpeed;
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    this.name = name;
    this.age = age;
    this.flySpeed = flySpeed;
  }
}

const rabbit1 = new Rabbit("rabo", 1, 25);
const fish1 = new Fish("fisho", 1, 25);
const hawk1 = new ("hawko", 1, 25)();
