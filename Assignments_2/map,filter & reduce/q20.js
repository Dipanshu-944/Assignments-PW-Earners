let items =
[ 
{ name: "Mouse", price: 500, quantity: 2 }, 
{ name: "Keyboard", price: 1000, quantity: 1 }, 
{ name: "Laptop", price: 10000, quantity: 2 }, 
] 

const cartTotal = items.reduce((acc, item) => {
    return acc + item.price * item.quantity

}, 0 )

console.log(cartTotal)