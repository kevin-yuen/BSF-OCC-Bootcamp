// var = global variable - global-scoped variable
if (true) {
    var myName = "Regel";    
}
console.log(myName);

// let = local variable - block-scoped variable - best practices to use let
let age = 18;
console.log(age);

// if (true) {
//     let myAge = 35;
// }
// console.log(myAge);

if (true) {
    let animal = "poodle";
    console.log(animal);

    animal = "huske";
    console.log(animal);
}

// const - constant variable - variable is fixed in the life of the application
const birthdate = "10-16-1985";
console.log(birthdate);

// birthdate = "11-16-1985";
// console.log(birthdate);