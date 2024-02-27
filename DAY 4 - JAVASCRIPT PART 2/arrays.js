let characters = ["pippin", "goku", "layla", "morgana", "aang"];

// Modify array
characters.push("gohan");
characters.pop();
characters[0] = "ck mouse";

console.log("Modified Array: ", characters);

// Iterate array
// for loop
for (let i = 1; i <= characters.length; i++) {
  console.log(`Character ${i}:`, characters[i - 1]);
}

// for-each loop v1
characters.forEach((e) => {
  console.log(e);
});
// for-each loop v2
characters.forEach(function (e) {
  console.log(e);
});

// Array methods
// indexOf
console.log(characters.indexOf("goku"));

// includes
console.log(characters.includes("morgana"));
console.log(characters.includes("mama"));

// join - the specified character joins with each array element and return the elements as string as a whole
console.log("Joined array: ", characters.join(" - "));

// slice - doesn't modify the original array
let slicedArray = characters.slice(1, characters.length-1);
console.log(slicedArray);
console.log(characters);

// splice - remove from the original array
let removedElements = characters.splice(1, 2);
console.log(removedElements);
console.log(characters);