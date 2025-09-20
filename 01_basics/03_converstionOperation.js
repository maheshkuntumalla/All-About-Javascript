let score = "33abc";

// console.log(typeof score);
// console.log(typeof score);

let valueInNumber = Number(score); // convert string to number
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn); // convert number to boolean
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

//1, 2, 3, -1, -2 => true
//0 => false
//"", ' ', "Mahesh" => true
//null => false
//undefined => false
//NaN => false

let someNumber = 33;
let stringNumber = String(someNumber); // convert number to string
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ********************************** Operations *******************************

let value = 3;
let negValue = -value; // unary operator
// console.log(negValue);

// console.log(2+2); // 4 (both are numbers, so addition)
// console.log(2-2); // 0 (both are numbers, so subtraction)
// console.log(2*2); // 4 (both are numbers, so multiplication)
// console.log(2/2); // 1 (both are numbers, so division)
// console.log(2%2); // 0 (both are numbers, so modulus)
// console.log(2**3); // 8 (both are numbers, so exponentiation)

let str1 = "Hello ";
let str2 = "mahesh";

let str3 = str1 + str2; // + operator (binary operator)
// console.log(str3);

// console.log(2 + "2"); // 22 (both are strings, so concatenation)
// console.log(1 + "2"); // 3 (both are numbers, so addition) (unary plus)
// console.log("1" + 2 + 2); // 122 (from left to right)
// console.log(1 + 2 + "2"); // 32 (from left to right)

// console.log(+true); // 1 (unary plus convert boolean to number)
// console.log(+""); // 0 (unary plus convert boolean to number)
// console.log(+"33abc"); // NaN (unary plus convert boolean to number)

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // right to left execution
// console.log(num1, num2, num3); // 4 4 4

let gameCounter = 100;
gameCounter++; // post increment (gameCounter = gameCounter + 1)
console.log(gameCounter);
++gameCounter; // pre increment (gameCounter = gameCounter + 1)
console.log(gameCounter);
