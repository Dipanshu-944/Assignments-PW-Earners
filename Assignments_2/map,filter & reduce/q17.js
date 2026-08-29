let cartItems = 
[
{ name: "Laptop", quantity: 1 }, 
{ name: "Mouse", quantity: 2 }, 
{ name: "Keyboard", quantity: 2 }, 
]

const totalQuantity = cartItems.reduce((acc, items) => {
    return acc + items.quantity
}, 0 )

console.log(totalQuantity)