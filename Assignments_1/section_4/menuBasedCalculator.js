console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
console.log("5. Modulus");

let num1 = 30;
let num2 = 40;
let choice = "3";

console.log("Choice = ", choice);

switch (choice) {
  case "1":
    console.log("addition = ", num1 + num2);
    break;
  case "2":
    console.log("Subtraction = ", num1 - num2);
    break;
  case "3":
    console.log("Multiply = ", num1 * num2);
    break;
  case "4":
    console.log("Divide = ", num1 / num2);
    break;
  case "5":
    console.log("Modulus = ", num1 % num2);
    break;
  default:
    console.log("Invalid choice");
}
