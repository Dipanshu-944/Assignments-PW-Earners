// 17. current date and time 
let date = new Date();
console.log(date);

// 18. specific date 
let specificDate = new Date("2026-01-01");
console.log(specificDate.toDateString());

// 19. curretn timestamp 
console.log(Date.now());

// 20. simple date difference 
let date1 = new Date("2026-01-01");
let date2 = new Date("2026-08-26");

let difference = date2 - date1;

console.log("Diference is:",difference);

