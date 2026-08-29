let productPrice = [400, 5630, 1000, 490];

let totalPrice = 0;

const total = productPrice.reduce((acc, currentPrice) => {
    return acc + currentPrice
}, 0)

console.log(total)