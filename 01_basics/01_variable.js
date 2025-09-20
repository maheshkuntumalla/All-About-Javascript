const accountId = 1122;
let accountEmail = "mahesh@example.com";
var accountPassword = "12345";
accountCity = "Bangalore"; // never use this way even though it works.

// accountId = 2; // not allowed

accountEmail = "changing@example.com";
accountPassword = "changingpassword";
accountCity = "Mumbai";

console.log(accountId);

/*

prefer not to use var
because of issues with block scope and function scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity]);
