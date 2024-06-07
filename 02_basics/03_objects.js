// SINGLETON
// Object.create

// Object Literals
const mySymbol = Symbol("key1"); // this is declared for understanding the use of symbol object in an object

const JsUser = {
  name: "promit",
  "full name": "Promit Bodak",
  [mySymbol]: "mykey1",
  age: 22,
  location: "kolkata",
  email: "promit@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
/*
youn can use both type of method to access key values
but in some cases like option 2, and 3 you cannot use
the dot method {case 2: key is given as a string}
               {case 3: Symbol data type is used}
*/
console.log(JsUser["full name"]);
console.log(JsUser[mySymbol]);

// Changing the value OR overwrite object key values
JsUser.email = "Prommmmmmit@ban2.com";

// Making an Object immutable
Object.freeze(JsUser);

// Now make an attempt to change the object it would not happen
console.log(JsUser);

// CREATING FUNCTIONS IN OBJECT
JsUser.greeting = function () {
  console.log("Hello Js User");
};

// TO ACCESS THE FUNC USE {JsUser.greeting} AND {JsUser.greeting()} TO SEE THE DIFFERENCE IN OUTPUT
console.log(JsUser.greeting); // it returns Function(anonymous). Matlab there exist this function but its not been called yet
console.log(JsUser.greeting());

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`); // using string interpolation and this method
};
console.log(JsUser.greetingTwo());
