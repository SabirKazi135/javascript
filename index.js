class animal {
  constructor() {}
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends animal {
  name = "rabbit";
  run() {
    console.log(`This ${this.name} is running`);
  }
}

class Fish extends animal {
  name = "fish";
  swim() {
    console.log(`This ${this.name} swemming`);
  }
}

class Hawk extends animal {
  name = "hawk";
  fly() {
    console.log(`This ${this.name} fliying`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;
console.log(rabbit.alive);

rabbit.run();
