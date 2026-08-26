let i = 1;

// 7. simple while loop
while (i <= 10) {
  console.log(i);
  i++;
}

// 8. sum of even numbers
sum = 0;
while (i <= 20) {
  if (i % 2 === 0) {
    sum += i;
  }
  i++;
}
console.log(sum);

// 9. break statement
while (i <= 10) {
  if (i === 6) {
    break;
  }
  console.log(i);
  i++;
}

// 10. skip number (cotinue statement)
while (i <= 10) {
  if (i === 5) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
