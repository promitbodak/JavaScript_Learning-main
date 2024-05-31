//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// 1)Primitive: These are call-by-value. The types of primitive data types include String, Number, Boolean, Null, Undefined, Symbol, and BigInt. Note that Symbols uniquely identify variables, even if two variables have the same data and data type. Primitive variables datatype is same but null datatype is object
// 2) Non-primitive: These are call-by-reference. The types of non-primitive data types are Array, Object, and Function. The data type for these is 'object,' but for functions, they return a data type of 'function,' though they also have an object data type.
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "hitesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);
