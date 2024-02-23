const shirtAmt = 17, shoesAmt = 65, pantsAmt = 49, sunglassesAmt = 13;
const numofShirts = 2, numOfShoes = 1, numOfPants = 1, numOfSunglasses = 3;
let total, cart;

total = (shirtAmt * numofShirts) + (shoesAmt * numOfShoes) + (pantsAmt * numOfPants) + (sunglassesAmt * numOfSunglasses);

let discount = total * 0.10;
cart = total - discount;

console.log("Total: $", cart);