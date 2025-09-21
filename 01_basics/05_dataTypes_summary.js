// Primitive data types

// 7 types: String, Number, Boolean, null, undefined, symbol, bigint

// javascript is a dynamically typed language

const score = 33; // number
const scoreValue = "33"; // string
const isLoggedIn = false; // boolean
let outsideTemp = null;
let userEmail; // undefined
const id = Symbol("12345");
const anotherId = Symbol("12345");
console.log(id === anotherId); // false

const bigNumber = 123456789012378787456789012345678901234567890n; // bigint
console.log(bigNumber);

// Reference data types (Non-primitive data types)

// 3 types: Object, Array, Function

const heros = ["shaktiman", "naagraj", "doga"]; // array

console.log(typeof heros);
let myObj = {
  name: "mahesh",
  age: 22,
}; // object literal

function sayHello() {
  console.log("Hello");
} // function
