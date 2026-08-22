let units = 1100;

let bill;

if (units > 0 && units < 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = 100 * 5 + (units - 100) * 7;
} else {
    bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
}
console.log("Total units comsume in month = ", units);
console.log("Total bill = ", bill);
