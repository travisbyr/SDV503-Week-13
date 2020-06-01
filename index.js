// Talk about this in Week 13 Journal Entry under what I have learnt
// add free code camp examples to journal
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
/*
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

//Last in is the first out -- Stack example of data, plates.
var array = [];
array.push("First");
array.push("Second");
array.push("Third");
console.log(array);
array.pop();
console.log(array);

function factorial(x) {
  if (x === 0) return 1;
  return x * factorial(x - 1);
}
console.log(factorial(4));
// 5*4*3*2*1

//Queue - first in, first out
var queue = [1, 2, 3];
console.log(queue);
queue.shift();
console.log(queue);
*/


// Linked List Example
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if(!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

var list = new SinglyLinkedList()
list.push("Hi")
list.pop("Hi")

console.log(list)

