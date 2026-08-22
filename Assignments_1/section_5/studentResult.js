let studentName = "Dipanshu";
let rollNumber = 23;

let math = 99;
let science = 100;
let english = 50;

console.log("STUDENT RESULT:");
console.log("Name:", studentName);
console.log("Roll no.:", rollNumber);
console.log("Math:", math);
console.log("Science:", science);
console.log("English:", english);

if (
  math < 0 ||
  math > 100 ||
  science < 0 ||
  science > 100 ||
  english < 0 ||
  english > 100
) {
  console.log("Invalid marks! Marks must be between 0 and 100.");
} else {
  let total = math + science + english;
  let percentage = (total * 100) / 300;

  let grade;

  if (percentage >= 90 && percentage <= 100) {
    grade = "A";
  } else if (percentage >= 80) {
    grade = "B";
  } else if (percentage >= 70) {
    grade = "C";
  } else if (percentage >= 60) {
    grade = "D";
  } else if (percentage >= 40) {
    grade = "E";
  } else if (percentage >= 0 && percentage < 40) {
    grade = "F";
  } else {
    console.log("Invalid input");
  }

  console.log("Total:", total);
  console.log("Percentage:", percentage, "%");

  console.log("Grade:", grade);

  if (science >= 40 && math >= 40 && english >= 40) {
    console.log("Result: Pass");
  } else {
    console.log("Result: Fail");
  }
  console.log("__________");
}
