let score = "33";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score); // start the dataType name with capitalized letter for type conversion
// use Number(score).........Not...number(score)

console.log(typeof score);
console.log(typeof valueInNumber);

let anotherScore = "33abc";
//technically you can type convert this and still get the type as number
// but the stored value will be "NaN" -> not a number type
console.log(typeof anotherScore);
let valueInAnotherNumber = Number(anotherScore);
console.log(typeof valueInAnotherNumber); // it will give you type as number
console.log(valueInAnotherNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh";

let booleanIsLoggedIn = Boolean(isLoggedIn);
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
