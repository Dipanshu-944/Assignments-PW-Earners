let units = 2000;

let bill;
let discount = 0;


if (units > 0 && units < 100) {
  bill = units * 5;
} else if (units <= 200) {
  bill = 100 * 5 + (units - 100) * 7;
} else {
  bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
}

console.log("Total units comsume in month = ", units);
console.log("Original bill = ",bill);

if (bill >= 2000) {
    discount = (bill * 10)/100;
    console.log("Discount = ",discount);
  }else if (bill < 2000) {
    console.log("No discount")
  }else {
    console.log("Invalid bill")
  }

let finalBill = bill - discount;


console.log("Total bill = ", finalBill);
