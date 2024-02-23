// if statement
let age = 17;

if (age >= 18) {
  console.log("You are eligible to vote!");
} else {
  console.log("You are not eligible to vote!");
}

// if-else if-else statement
let temperature = 25;

if (temperature < 0) {
  console.log("It is freezing!");
} else if ((temperature >= 0) & (temperature < 20)) {
  console.log("It's cool outside!");
} else {
  console.log("It's a warm day.");
}

// switch statement
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It is the start of the week.");
    break;
  case "Friday":
    console.log("It is end of the week.");
    break;
  default:
    console.log("I don't know what day today is.");
    break;
}

