let salary = 30000;
let experience = 0;
let bonus = 0;

if (experience >= 10) {
  bonus = (salary * 20) / 100;
} else if (experience >= 5) {
  bonus = (salary * 10) / 100;
} else if (experience >= 2) {
  bonus = (salary * 5) / 100;
} else if (experience < 2) {
  bonus = 0;
} else {
  console.log("Invalid Experience");
}

let finalSalary = salary + bonus;

console.log("Original salary = ", salary);
console.log("Bonus = ", bonus);
console.log("Final Salary = ", finalSalary);
