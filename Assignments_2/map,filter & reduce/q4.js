let productPrices = [400, 5000, 100]

const incresedPrices = productPrices.map((price) => {
    return price + price * 10/100;


    // return (price * 1.10).toFixed(1); 
    // it gives decimals answers even to round figures but we can fix it by toFixed
})

console.log("Original Price: ",productPrices)
console.log("Afetr increnment: ",incresedPrices)