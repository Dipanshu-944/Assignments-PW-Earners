let num = 0;

console.log("Input = ",num);

// Positive zero negative
if(num > 0){
    console.log("Positive");
}else if(num < 0){
    console.log("Negative");
}else if (num == 0){
    console.log("Zero")
}else{
    console.log("Invalid number")
}

// Odd Even
if(num%2 == 0){
    console.log("Even")
}else {
    console.log("Odd")
}

// num < 100 > num
if(num > 100){
    console.log("Greater than 100 ");
}
else if (num < 100){
    console.log("Smaller than 100 ");
}else if(num == 100){
    console.log("Number equal to 100");
}else {
    console.log("Invalid number")
}

