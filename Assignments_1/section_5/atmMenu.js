let balance = 10000;
let withdraw = 1000;
let deposit = 1200;
let remainingBalance;

console.log("ATM Menu:")
console.log("1. Check balance");
console.log("2. Depoit money");
console.log("3. Withdrwal money");
console.log("4. Exit");

let choice = 4;

switch (choice) {
  case 1:
    console.log("Current Balance: ", balance);
    break;
  case 2:
    console.log("Deposited amount", deposit);
    remainingBalance = balance + deposit;
    console.log("New balance: ", remainingBalance);
    break;
  case 3:
    if (withdraw <= balance && withdraw > 0) {
      console.log("Withdrawal successful ");

      console.log(
        "Remaining balance: \u20B9",
        (remainingBalance = balance - withdraw),
      );
    } else {
      console.log("Error: Insufficient balance");
    }
    break;
  case 4:
    console.log("Thank you using our service, Have a nice day");
    break;
  default:
    console.log("Error: Invalid choice");
}
