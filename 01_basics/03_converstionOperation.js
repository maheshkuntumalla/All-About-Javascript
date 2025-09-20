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
console.log(stringNumber);
console.log(typeof stringNumber);
