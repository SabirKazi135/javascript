function displayPerson({ firstName, lastName, age, job = "unempoye" }) {
  console.log(firstName);
  console.log(lastName);
  console.log(age);
  console.log(job);
  console.log("-----------");
}

const person1 = {
  firstName: "Sabir",
  lastName: "Kazi",
  age: 21,
  job: "nonjob",
};
const person2 = {
  firstName: "Raees",
  lastName: "Jamadar",
  age: 20,
};

displayPerson(person1);
displayPerson(person2);
