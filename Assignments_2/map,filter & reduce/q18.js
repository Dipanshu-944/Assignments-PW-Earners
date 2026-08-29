let amounts = 
[
{ amount: 500 }, 
{ amount: 1000 }, 
{ amount: 7500 } 
]

const totalAmount = amounts.reduce((acc, amount) => {
    return acc + amount.amount
}, 0 )

console.log(totalAmount);