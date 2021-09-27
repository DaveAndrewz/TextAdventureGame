// ! CONDITIONAL STATEMENTS
// Conditional Statements are used to complete a certain action (Or line(s) of code) based on condition(s)


// ! IF () !
/*
Syntax Example:

if (condition) {
    CODE TO BE RUN GOES HERE;
} 
*/
// Code inside brackets will run if the condition/value is true.

if (true) {
    console.log("Dave Is Awesome");
}

if (false) { // Condition is false so code does NOT run
    console.log("This will NOT run!!");
}

if (2 > 0) {
    console.log("Yeah 2 is greater than 0!!");
}

// ! IF and ELSE !
/*
Syntax Example

if (condition) {
    CODE TO BE RUN GOES HERE;
} else {
    CODE TO BE RUN GOES HERE;
}
*/

// Code in ELSE brackets runs when the IF condition/value is NOT true. Also when the IF condition/value IS true the code in the IF brackets will run and the code in the ELSE brackets will not run!
let num = 4;
if (num < 5) {
    console.log("Number is less than 5");
} else {
    console.log("Number is greater than or equal to 5");
}


// ! IF and ELSE IF !
/*
Syntax Example

if (condition) {
    CODE TO BE RUN GOES HERE;
} else if (condition) {
    CODE TO BE RUN GOES HERE;
}
*/
// Code in ELSE IF brackets runs if previous condition(s) are NOT true and the condition for that ELSE IF IS true.
// NOTE: While there can only be a single IF and a sing ELSE in a conditional statement, there is not a limit to the amount of ELSE IF's that can be used in a conditional statement.
console.log("================");
let number = 3;
if (number === 5) {
    console.log("Number is 5");
} else if (number === 4) {
    console.log("Number is 4");
} else if (number < 4) {
    console.log("Number is less than 4");
}


// ! IF, ELSE IF, and ELSE !
/*
Syntax Example

if (condition) {
    CODE TO BE RUN GOES HERE;
} else if (condition) {
    CODE TO BE RUN GOES HERE;
} else {
    CODE TO BE RUN GOES HERE;
}
*/
// Code in ELSE brackets will always run as long as previous conditions are False (Note: ELSE does not have a condition that needs to be met for it to run)
let day = "Thursday";
if (day === "Saturday") {
    console.log("IT IS SATURDAY!!");
} else if (day === "Sunday") {
    console.log("It IS SUNDAY!!");
} else {
    console.log("It is NOT Saturday or Sunday");
}


// ! NESTED CONDITIONAL STATEMENTS !
// 
if (true) {
    console.log("Hello");
    if (false) {
        console.log("Hi");
    })
} else {
    console.log("Goodbye");
}