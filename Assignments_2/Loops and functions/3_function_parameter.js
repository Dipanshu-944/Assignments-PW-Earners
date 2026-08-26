// 11. function with a parameter
function greetUser(name) {
  console.log(`Hello, ${name}`);
}

greetUser("Dipanshu");

// 12. add two numbers
function add(num1, num2) {
  return (sum = num1 + num2);
}

console.log("Sum =",add(10, 10));

// 13. even or odd number 
function evenOdd(num){
    if(num%2 === 0){
        console.log("Even number");
    }else {
        console.log("Odd number");
    }
}

evenOdd(5)
evenOdd(6)

// 14. square of number 
function squareNum(num){
    console.log(num ** 2);
}

squareNum(5)

// 15. largest of two 
function greaterNumeber(num1, num2){
    if(num1 > num2){
        console.log("num1 is greatest");
    }else if(num2 > num1){
        console.log("num2 is greatest");
    }else {
        console.log("num1 = num2");
    }
}

greaterNumeber(20, 20)

// 16. calculate total 
function totalPrice(price, quantity){
    return total = price*quantity
}

console.log("Total Price:",totalPrice(300, 5));