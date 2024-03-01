// main application app.js

// import necessary modules
const product = require("./product");
const cart = require("./cart");
const calculateTotal = require("./order");
const products = require("./product");

// add products to cart
cart.addToCart(products[0]);
cart.addToCart(products[2]);

// display the cart items
console.log("Cart Items", cart.getCartItems());

// calculate and display the order amount
const totalAmount = calculateTotal(cart.getCartItems());
console.log("total order amount: ", totalAmount);
