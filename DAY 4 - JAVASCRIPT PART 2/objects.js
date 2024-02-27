const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  hobbies: ["reading", "coding", "hiking"],
  greet: function () {
    console.log(`Hello, my name is ${this.firstName}`);
  },
};

console.log(person.firstName);
console.log(person.age);
person.greet();

person.lastName = "Swift";
console.log(person.lastName);

// add a new property for the object
person.nationality = "American";
console.log(person);

// add a new method for the object
person.introduce = function () {
    console.log(
      `I am ${this.firstName} ${this.lastName}. I am ${this.age} years old.`
    );
  };
console.log(person);
person.introduce();

const address = {
    street: "123 Main St",
    city: "San Francisco",
    country: "USA"
}

person.homeAddress = address;
console.log(person.homeAddress.street);

// Object destructuring
const {firstName, lastName, age} = person;
console.log(firstName, lastName, age);