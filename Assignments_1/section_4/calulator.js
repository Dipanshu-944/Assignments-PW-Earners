let firstNumber = 30;
let secondNumber = 15;
let operator = "*";

console.log("Expression = ", firstNumber, operator, secondNumber);

switch (operator) {
  case "+":
    console.log("Addition Output= ", firstNumber + secondNumber);
    break;

  case "-":
    console.log("Subtraction Output= ", firstNumber - secondNumber);
    break;

  case "*":
    console.log("Multiplication Output= ", firstNumber * secondNumber);
    break;

  case "/":
    if (secondNumber == 0) {
      console.log("Output = Cannnot divide by Zero");
    } else {
      console.log("Divide Output= ", firstNumber / secondNumber);
    }
    break;

  case "%":
    console.log("Modulus Output= ", firstNumber % secondNumber);
    break;

  default:
    console.log("Invalid operator");
}
