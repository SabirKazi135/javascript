// Address class to encapsulate address logic
class Address {
  constructor(street, city, country = "India") {
    this.street = street;
    this.city = city;
    this.country = country;
  }

  // Method to return the full address as a formatted string
  getFullAddress() {
    return `${this.street}, ${this.city}, ${this.country}`;
  }

  // Method to validate the address fields
  validate() {
    if (!this.street || !this.city || !this.country) {
      throw new Error("Invalid address: All fields must be filled.");
    }
  }
}

// Person class using Address
class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address); // Accepts an array for address details
  }

  // Method to display person details
  getDetails() {
    return `Name: ${this.name}, Age: ${
      this.age
    }, Address: ${this.address.getFullAddress()}`;
  }
}

// Company class using Address
class Company {
  constructor(name, industry, address) {
    this.name = name;
    this.industry = industry;
    this.address = new Address(...address); // Accepts an array for address details
  }

  // Method to display company details
  getDetails() {
    return `Company: ${this.name}, Industry: ${
      this.industry
    }, Address: ${this.address.getFullAddress()}`;
  }
}

// Example usage:

// Create a person with an address
const personAddress = ["123 Main Street", "Mumbai", "India"];
const person = new Person("John Doe", 30, personAddress);
console.log(person.getDetails()); // Output: Name: John Doe, Age: 30, Address: 123 Main Street, Mumbai, India

// Create a company with an address
const companyAddress = ["456 High Street", "Bangalore", "India"];
const company = new Company("TechCorp", "Technology", companyAddress);
console.log(company.getDetails()); // Output: Company: TechCorp, Industry: Technology, Address: 456 High Street, Bangalore, India

// Validate the addresses
try {
  person.address.validate(); // No error
  company.address.validate(); // No error
  console.log("Both addresses are valid.");
} catch (error) {
  console.error(error.message);
}
