const person = {
  fullName: "Sabir",
  age: 21,
  isStudent: true,
  hobbies: ["karate", "coding", "cooking"],
  address: {
    street: "Vaibhav Nagar",
    city: "Belgavi",
    country: "India",
  },
};

for (const property in person.address) {
  console.log(person.address[property]);
}
