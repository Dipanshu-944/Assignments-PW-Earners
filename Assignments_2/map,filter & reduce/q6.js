let products = 
[ 
{ name: "Laptop", price: 60000 }, 
{ name: "Mouse", price: 500 },
{ name: "Keyboard", price: 900 }, 
];

const updateProducts = products.map((product) => {
   return {...product, inStock: true
   }
})

console.log(updateProducts);