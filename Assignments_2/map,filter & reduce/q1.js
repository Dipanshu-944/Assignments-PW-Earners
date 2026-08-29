let productNames = ["Laptop", "Mobile", "Keyboard", "Mouse"];

const names = productNames.map(
  (upper) => {
    return upper.toUpperCase()
  })

console.log(names);


// Short Hand
const name = productNames.map(upper => upper.toUpperCase())

console.log(names);


