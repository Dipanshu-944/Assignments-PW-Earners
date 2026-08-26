// 17. print numbers using function 
function printNumebers(n){
    for(i = 1; i <= n; i++){
        console.log(i);
    }
    }
printNumebers(5)

// 18. multiplication table function 
function tables(n){
    for(i = 1; i <= n; i++){
        console.log(i*5);
    }
    }
tables(10)

// 19. sum from 1-n 
let sum = 0;
function sumNumbers(num){
   for(i = 1; i <= num; i++){
    sum += i
   }
   console.log(sum);
}

sumNumbers(10)