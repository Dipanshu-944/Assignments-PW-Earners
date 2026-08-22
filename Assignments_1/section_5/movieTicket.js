let age = 60;
let numberOfTickets = 4;

let total; 

if(age < 12){
    console.log("Total: \u20B9",total = 100 * numberOfTickets);
}else if(age >=12 && age < 60){
    console.log("Total: \u20B9", total = 200 * numberOfTickets);
}else if(age >=60){
    console.log("Total: \u20B9", total = 120 * numberOfTickets);
}else {
    console.log("Invalid age or number of tickets")
}