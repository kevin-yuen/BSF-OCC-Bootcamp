// Function declaration - can be hoisted
// hoisting = JS moves function declaration to the top
// best practice to use function expression as it has more control
function greet() {
    console.log("Hello to the world of functions!");
}
greet();

functionDeclaration();
function functionDeclaration() {
    console.log("Hello! I am a function declaration!");
}
//functionDeclaration();

// Function expression - cannot be hoisted
//functionExpression();   // error expected
const functionExpression = function() {
    console.log("Hello! I am a function expression!");
}
functionExpression();

// Functions with parameter
function greetme(name) {
    console.log(`Hello, ${name}!`);
}
greetme("Kevin");

// Functions with a return value
function sum(a, b) {
    return a + b;
}
console.log(`The sum of a and b is: ${sum(10, 20)}`);
