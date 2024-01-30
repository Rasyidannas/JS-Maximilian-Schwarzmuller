//Library land
const uid = Symbol("uid"); //this is symbol is unique property identifier for object
console.log(uid);

const user = {
  [uid]: "p1", //this call Symbol
  name: "Rasyid",
  age: "25",
};

user[uid] = "p3"; //this reassign symbol

//app land => using the library
user.id = "p2";

console.log(user);
console.log(user[Symbol("uid")]);

//this is iterations in object using next() method
const company = {
  currEmployee: 0,
  employees: ["Rasyid", "Ciko", "Coki"],
  next() {
    if (this.currEmployee >= this.employees.length) {
      return { value: this.currEmployee, done: true };
    }

    const returnValue = {
      value: this.employees[this.currEmployee],
      done: false,
    };
    this.currEmployee++;
    return returnValue;
  },
};

let employee = company.next();

while (!employee.done) {
  console.log(employee.value);
  employee = company.next();
}
