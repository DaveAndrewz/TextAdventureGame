// COMPARISON OPERATORS REVIEW
// Comparison Operators are used to return a True or False Boolean value when comparing two values

// ! GREATER THAN ! \\                  ( > )
console.log(7 > 6); // true
console.log(2.1 > 1.2345); // true

// ! LESS THAN ! \\                     ( < )
console.log(7 < 6); // false
console.log(0.9 < -4); // false

// ! GREATER THAN OR EQUAL TO ! \\      ( >= )
console.log(10 >= 10); // true
console.log(6 >= 8); // true

// ! LESS THAN OR EQUAL TO ! \\         ( <= )
console.log(.54 <= .723); // true
console.log(.23 <= .229); // false

// EQUAL COMPARISONS

// ! DOUBLE EQUALS ! \\                 ( == )
// Equal face/character value, but does NOT check data type
// For a false value to be returned it must be different face/character values
console.log(3 == 2); // false
console.log("Friday" == "Friday"); // true
console.log('17' == "17"); // true
console.log(3 == `3`); // true
console.log("3" == "Three"); // false
console.log("T" == "t"); // false (JS recognizes these two letter as different characters 'if you placed them on top of each other they would not match')

// ! TRIPLE EQUALS ! \\                 ( === )
// Equal face/character value AND equal data type (string, number, etc)
// For a False value to be returned they must either be different face/character value OR different data types (string, number etc)
// NOTE: It is best to use "===" unless there is a specific reason to use "=="
console.log(7 === 7); // true
console.log(6 === '6'); // false
console.log(`six` === "six"); // true


// NOT EQUAL COMPARISONS

// ! NOT EQUAL ! \\                     ( != )
// Not Equal face/character value, but does NOT check data type
// For a True value to be returned must be different face/character values
console.log(3 != 3); // false
console.log(3 != 2); // true
console.log(3 != "3"); // false

// ! STRICT NOT EQUAL ! \\              ( !! )
// NOT Equal face/character value OR not equal data type
// For a True value to be returned must be different face/character values
console.log(3 !== 3); // false
console.log(5 !== `5`); // true
console.log(`Dave` !== "Dave"); // false 
