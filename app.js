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
