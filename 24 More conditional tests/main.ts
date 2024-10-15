let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "orange", "banana"];

//Test for equality and inequality with strings

console.log("Is apple is equal to apple");
console.log(apple == "apple");

console.log("Is apple is not equal to apple?");
console.log(apple != "apple");

// Test using lower case function

console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("Is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

// Numerical tests

console.log("Is ten is equal to twenty?");
console.log(ten == twenty);

console.log("Is ten is not equal to twenty?");
console.log(ten != twenty);

// Greater than and less than

console.log("Is ten is greater than zero?");
console.log(ten > 0);

console.log("Is twenty is less than ten?");
console.log(twenty < 10);

// Greater than or equal to

console.log("Is ten is greater than or equal to 5?");
console.log(ten >= 5);

// Less than or equal to

console.log("twenty is less than or equal to 10" );
console.log(twenty <= 10);

// Tests using and or operators

console.log("twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

// using "||" operator


console.log("twenty is greater than 50  OR twenty is equal to 20");
console.log(twenty > 50 || twenty == 20);

console.log("twenty is greater than 50  OR twenty is not equal to 20");
console.log(twenty > 50 || twenty != 20);

// Test whether an item is included in array

console.log("Is orange includes in my fruits array");
console.log(fruits.includes("orange"));

console.log("Is orange not include in my fruit array");
console.log(!fruits.includes("orange"));


