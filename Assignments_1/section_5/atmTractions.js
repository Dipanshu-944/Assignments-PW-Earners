let balance = 10000;
let withdraw = 3000;
let remainingBalance;

// console.log("Current Balance = ",balance);
// console.log("Withdraw Amount = ",withdraw);
if (withdraw <= balance && withdraw > 0 ){
    console.log("Withdrawal successful ");

    console.log("Remaining balance: \u20B9",remainingBalance = balance - withdraw);
}else {
    console.log("Insufficient balance")
}