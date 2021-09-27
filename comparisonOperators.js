// ! COMPARISON OPERATORS

// Comparison Operators are used to return a True or False Boolean value when comparing two values

// GREATER THAN (Ex: > )
console.log(3 > 1); // true
console.log(0.9 > 1); // false

// LESS THAN (Ex: < )
console.log(3 < 1); // false
console.log(0.9 < 1); // true

// GREATER THAN OR EQUAL TO (Ex: >= )

console.log(3 >= 3); // true
console.log(3 >= 2); // true
console.log(3 >= 4); // false

// LESS THAN OR EQUAL TO (Ex: <= )

console.log(3 <= 3); // true
console.log(3 <= 2); // false
console.log(3 <= 4); // true


// ! EQUAL COMPARISONS

// ! DOUBLE EQUALS (Ex: == )
// Checks if the characters (AKA face value) of two values are the same
// NOTE: Does NOT include data type when comparing
console.log(3 == 3); // true
console.log(3 == 2); // false
console.log(3 == "3"); // true
console.log("Hello" == "Hello"); // true
console.log("Hello" == "Hi"); // false
console.log("Hello" == "hello"); // false (Casing must be the same)

let hello = "Hi"
console.log(hello == "Hi"); // true

// ! TRIPLE EQUALS (AKA Strict Equality) (Ex: === )
// Checks if the characters (AKA face value) of two values are the same. Also, compares data types to compare if they are the same as well.
console.log(3 === 3); // true
console.log(3 === "3"); // false



// ! NOT EQUAL COMPARISONS !

// ! NOT EQUAL (Ex: != )
// Checks to see if characters (AKA face values) of two values are NOT equal to each other
console.log(3 != 3); // false
console.log(3 != 2); // true
console.log("Hello" != "hello"); // true (The case is not the same Ex: lower "h")
console.log(3 != "3"); // false (It isn't strict)

// ! STRICT NOT EQUALS (Ex: !== )
// 
console.log(3 !== 3); // false
console.log(3 !== "3"); // true (Checking face [number] and data [string] values)
