// ! TERNARY OPERATOR ! \\
// Similar to an IF/ELSE statement, a Ternary Operator has a single condition as well as two possible actions (Or Code) to be completed based on the condition.
// However, a Ternary can be written on a single line. Also, a Ternary returns a value.

/* 
Syntax Example

(condition) ? value : value;
*/

// Ex: 1
// If the value of the AGE variable is 16 or more, then the True Boolean value will be set to the canDrive variable. If the value of the AGE variable is less than 16, then the False boolean value will be set to the canDrive variable.
let age = 14;
let canDrive = (age >= 16) ? true : false;
console.log(canDrive); // false
// is the same as
let age1 = 14;
let canDrive1 = (age >= 16) ? console.log("Allowed to Drive") : console.log("Can NOT Drive");


// Ex: 2
//If the length of the PASSWORD string variable is 11 characters or more, then the "Meets Length Requirement" string will be set to the passwordCheck variable. If the length of the PASSWORD string variable is less than 11 characters, then the "Invalid. Does NOT Meet Length Requirement" string will be set to the passwordCheck variable.
let password = "password123";
let passwordCheck = (password.length >= 11) ? "Meets Length Requirement" : "Invalid. Does NOT meet length requirement";
console.log(passwordCheck);


// Ex: 3
// A Ternary can also be used to run some code (AKA complete an action). However, it is better to use an IF/ELSE in this situation.
(true) ? console.log("It Was True") : console.log("It was False");

console.log((false) ? "It was True!" : "It was False!");
