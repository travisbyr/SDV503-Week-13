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

//class calculator, take 2 properties, add, sub, mult and divide

class Calculator {
  constructor(numberOne, numberTwo) {
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
  }
  addition() {
    return this.numberOne + this.numberTwo;
  }
  subtraction() {
    return this.numberOne - this.numberTwo;
  }
  multiplication() {
    return this.numberOne * this.numberTwo;
  }
  division() {
    return this.numberOne / this.numberTwo;
  }
}

let firstCalculation = new Calculator(1, 2);

console.log(firstCalculation.addition());
console.log(firstCalculation.subtraction());
console.log(firstCalculation.multiplication());
console.log(firstCalculation.division());
