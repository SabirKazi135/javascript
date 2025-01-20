function createCounter() {
  let count = 0;
  function increament() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  function getCount() {
    return count;
  }
  return { increament, getCount };
}

const counter = createCounter();

counter.increament();
counter.increament();
counter.increament();
counter.increament();
counter.increament();

counter.increament();

console.log(`current ` + counter.getCount());
