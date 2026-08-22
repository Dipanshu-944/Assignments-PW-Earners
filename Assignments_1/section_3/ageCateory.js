 
let age = 13;
console.log("Person's age");
if (age >= 0 && age <= 12){
    console.log("He/She is child");
}else if(age >= 13 && age <= 19){
console.log("He/She is Teenager");
}else if (age >= 20 && age <= 59){
    console.log("He/She is Adult");
}else if(age >= 60 && age <= 120 ){
    console.log("He/She is Senior citizen");
}else {
    console.log("Wrong age input")
}