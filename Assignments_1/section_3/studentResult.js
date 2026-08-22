let science = 70;
let math = 45;
let computer = 39;
console.log("Science marks = ",science);
console.log("Math marks = ",math);
console.log("Computer marks = ",computer);

let average = (science + math + computer)/3;
if(science >= 40 && math >= 40 && computer >= 40){
    console.log("Pass");
    console.log("Average marks of all subject = ", average);
    if(average >= 75){
        console.log("Student Result: Distinction");
    }else if (average >= 60){
        console.log("Student Result: Frist Divison");
    }else if(average >= 50){
        console.log("Student Result: Second Division");
    }else {
        console.log("Student Result: Pass");
    }
}else{
    console.log("Fail");
}

