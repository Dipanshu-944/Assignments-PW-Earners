let burger = 150;
let pizza = 250;
let pasta = 180;
let sandwich = 120;

console.log("Restaurant Menu:")
console.log("1. Burger = \u20B9",burger);
console.log("2. Pizza= \u20B9",pizza)
console.log("3. Pasta= \u20B9",pasta);
console.log("4. Sandich= \u20B9",sandwich);

let choice = 2;
let quantity = 3;
let price;
let total;


switch (choice){
    case 1:
        price = burger;
        console.log("Item: Burger");
        break;
    case 2:
        price = pizza;
        console.log("Item: Pizza");
        break;
    case 3:
        price = burger;
        console.log("Item: Pasta");
        break;
    case 4:
        price = Sandwich;
        console.log("Item: Burger");
        break;
}
console.log("Quantity: ",quantity)
console.log("TOtal: \u20B9",total = price * quantity);
