let products =
[
    { name: "Mouse", price: 500 }, 
    { name: "Keyboard", price: 1500 },
    { name: "Printer", price: 5500 },
];

const price = products.filter((product) => {
    return product.price > 1000
})

console.log(price)