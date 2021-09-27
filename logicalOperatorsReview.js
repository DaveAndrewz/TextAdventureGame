// LOGICAL OPERATORS REVIEW
// Logical Operators are used to return a True or False value based off of two boolean values (AKA True or False)

// ! AND                ( && )
// Returns true when both conditions/booleans are True. If at least one condition is false, it returns False.
console.log(true && true); // true

console.log(true && false && true); // false

console.log(7 < 8 && 1 == "1"); // true

// ! OR                 ( || )
// Returns False when both conditions.booleans are false. If at least one condition/boolean is true, then it will return true.
console.log(false || true); // true

console.log(false || false || true); // true

console.log(1 < 4 || "Hello" == `Hi`); // true

console.log(1 > 4 || "Hello" == "Hi" && 8 > 233); // false


// ! NOT                ( ! )
// The NOT logical operator reverses the True/False outcome of the booleans that follow the operator

console.log(!false); // true

console.log(!(1 < -1)); // true

console.log();

// ! AND, OR, NOT
// Order of operations - (AND before OR)

console.log(true || !true && true); // true

