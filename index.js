class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Rabbit extends Animal {
  constructor(runSpeed) {
    super();
    this.runSpeed = runSpeed;
  }
}
class Fish extends Animal {
  constructor(swimSpeed) {
    super();
    this.swimSpeed = swimSpeed;
  }
}
class Hawk extends Animal {
  constructor(flySpeed) {
    super();
    this.flySpeed = flySpeed;
  }
}

const rabbit1 = new Rabbit("rabo", 1, 25);
const fish1 = new Fish("fisho", 1, 25);
const hawk1 = new ("hawko", 1, 25)();
