// Friday 29th May - Classes
// class Student {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// let firstName = new Student("Travis", "Byrman");
// let lastName = new Student("Ali", "Kahwaji");

// console.log(firstName);
// console.log(lastName);

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
  }
  yourEmail() {
    return `Your email address is ${this.firstName.toLowerCase()}-${this.lastName.toLowerCase()}@nmit.ac.nz`;
  }
}

let firstStudent = new Student("Travis", "Byrman", 2020);
console.log(firstStudent);

let secondStudent = new Student("Travis", "Byrman");
console.log(secondStudent.yourEmail());

// Class Template
class DataStructure {
  constructor() {
    // what default properties should it have?
  }
  someInstanceMethod() {
    // what should each object created from this class be able to do?
  }
}
class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}
var cal = new Calculator();
console.log(cal.add(5, 5));
