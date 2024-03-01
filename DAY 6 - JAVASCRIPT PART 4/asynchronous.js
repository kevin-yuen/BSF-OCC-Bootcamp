// synchronous function
console.log("First");
console.log("Second");
console.log("Third");


//asynchronous programming
console.log("First");

setTimeout(() => {
    console.log("Second");    
}, 5000)

console.log("Third");
