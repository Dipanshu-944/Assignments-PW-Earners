let num1 = 10;
let num2 = 20;

// 1. simple for loop loop
for (i = 1; i <= num1; i++) {
  console.log(i);
}

// 2. print even numbers
console.log("Even numbers(1-20): ");
for (i = 1; i <= num2; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3. print odd numbers
console.log("Odd numbers(1-20): ");
for (i = 1; i <= num2; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

// 4. reverse counting
console.log("Reverse numbers: ");
for (i = 10; i > 0; i--) {
  console.log(i);
}

// 5. sum of numbers
sum = 0;
for (i = 1; i <= num1; i++) {
  sum += i;
}
console.log("sum = ", sum);

// 6. multiplication table
console.log("Table: ");
for (i = 1; i <= num1; i++) {
  console.log(i, "* 10 = ", i * 10);
}
