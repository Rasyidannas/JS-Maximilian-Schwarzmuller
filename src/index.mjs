//Example Class
class Person {
  //properti
  name = "Rasyid";

  //this is property for auto run when instantiate
  constructor() {
    this.age = 24;
  }

  //method
  greet() {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  }
}

//this is intantiate Class
const person = new Person();
person.greet();

//Example Constructor Function
function PersonConstructor() {
  this.age = 24;
  this.name = "Rasyid";
  this.greet = function () {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  };
}

//this for assign new object with method and it will store in __proto__ (proof in lin 43)
PersonConstructor.prototype = {
  printAge() {
    console.log(this.age);
  },
};

const personConstructor = new PersonConstructor();
personConstructor.greet();
console.log(personConstructor.__proto__);
