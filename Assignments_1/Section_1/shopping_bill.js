// Product 1 
let tShirt = 599;
console.log("T-Shirt price = \u20B9",tShirt);
let tShirtQuantity = 4;
console.log("T-Shirt Quantity =",tShirtQuantity);
let tShirtTotal = tShirt * tShirtQuantity;
console.log("T-Shirt Total = \u20B9",tShirtTotal);

// Product 2 
let pant = 899;
console.log("Pant price = \u20B9",pant)
let pantQuantity = 2;
console.log("Pant Quantity = ",pantQuantity)
let pantTotal = pant * pantQuantity;
console.log("Pant Total = \u20B9",pantTotal);

// Original bill total
let totalBillAmount = tShirtTotal + pantTotal;
console.log("Products total amount include GST = \u20B9",totalBillAmount);
console.log("Bill before Discount (Original Bill) = \u20B9",totalBillAmount);

// discounted billl 
let finalBillDiscount = (totalBillAmount*10)/100;
console.log("Discounted amount is = \u20B9",finalBillDiscount);
let finalBill = totalBillAmount - finalBillDiscount;
console.log("Bill after 10% Discount + GST (Final Bill)= \u20B9",finalBill );

