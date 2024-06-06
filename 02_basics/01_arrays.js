// Array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["ironman", "Dr.Strange"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[1]);

// Read the Concept of (SHALLOW COPY) AND (DEEP COPY)
// From the MDN documentation

// ARRAY METHODS

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)   // Insert at begining (expensive operation)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // It dosent manipulates the original array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); // It Manipulates the Original Array
console.log("C ", myArr);
console.log(myn2);
