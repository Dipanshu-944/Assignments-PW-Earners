let products = 
[
  { name: "Laptop", inStock: true },
  { name: "Mouse", inStock: false },
  { name: "Keyboard", inStock: true },
];

const stockProducts = products.filter((product) => {
    return product.inStock
})
console.log(stockProducts);