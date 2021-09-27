// LOGICAL OPERATORS

// Logical Operators are used to return a True or False value based off of two boolean values (AKA True or False)



// AND (Ex: && )

// The AND Logical Operator checks if both values are true.
// Both values need to be true for the ending result to be true when using AND ( && )
let andOne = true && false;
console.log(andOne); // false

let andTwo = 5 < 6 && 10 >= 10;
console.log(andTwo); // true

let andThree = "Hello!".length === 6 && 100 === "10";
console.log(andThree);  // false

let andFour = 2 > -10 && "Hi" !== "hi!" && 2 != "2";
console.log(andFour); //  false


// OR (Ex: || )
// The OR Logical Operator checks that at least ONE value is True
// Only one value needs to be true for the ending result to be true when using OR
let orOne = true || false;
console.log(orOne); // true

let orTwo = 1 > 2 || "Jam" == "Jelly"
console.log(orTwo); // false

let orThree = `Two` == 2 || "One".length == 1 || false === false;
console.log(orThree); // true

let orFour = "Five".length === 4 || `Hot Dog` === `Sandwich`;
console.log(orFour); // true


// ORDER OF OPERATORS (AND before OR)
// Note: Comparison Operators are completed before Logical Operators
let orderOne = "Mirror" === `Mirror` || `On` === `The` && "Wall" === ".";
console.log(orderOne); // true


// NOT (Ex: ! )
// "!" is called a Bang in Javascript
// The NOT logical operator converts the value from True to False or vice versa
let notOne = !true;
console.log(notOne); // false

let notTwo = !("Chuck Norris".length >= "John Wick".length);
console.log(notTwo);

// AND, OR as well as NOT

let andOrNot = !(1 < 3 || 6 === 4 && !true);
console.log(andOrNot);





