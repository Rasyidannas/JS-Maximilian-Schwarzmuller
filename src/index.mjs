class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

//Example Class
class Person extends AgedPerson {
  //so AgedPerson will store in __proto__
  //properti
  name = "Rasyid";

  //this is property for auto run when instantiate
  constructor() {
    super();
    this.age = 24;
  }

  //this will not store in __proto__
  // greet = function() {
  //   console.log(
  //     "Hi, I am " + this.name + " and I am " + this.age + " years old."
  //   );
  // }

  //this method will store in __proto__
  greet() {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  }
}

//this is intantiate Class
const person = new Person();
person.greet();
person.printAge();
console.log(person.__proto__); //this is proof of extends AgedPerson above is store in __proto__

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

//this will be not added in __proto__
PersonConstructor.decribe = function () {
  console.log("Creating persons...");
};
//this is proof of above
console.log(PersonConstructor);

//this for assign new object with method and it will store in __proto__
// PersonConstructor.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

//this for assign method like class extends
PersonConstructor.prototype.printAge = function () {
  console.log(this.age);
};

const personConstructor = new PersonConstructor(); //this is proof of above is store in __proto__
personConstructor.greet();
console.log(personConstructor.__proto__);

//this is for if you can't access contructor but you need do this for do method (PersonConstructor.prototype.printAge)
const p2 = new personConstructor.__proto__.constructor();
console.log(p2);

//this is prof all object has __proto__, __proto__ has bunch of static methods and as fallback too
console.log(Object.prototype.__proto__);

const course = {
  title: "JavaScript - The Complete Guide",
  rating: 5,
};

// console.log(course.__proto__);
//this same like console.log in above
console.log(Object.getPrototypeOf(course));

//this is for set method in object
Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});
course.printRating();
