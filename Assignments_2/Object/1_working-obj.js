// 1. display object 
let details = {
    name : "Dipanshu",
    email: "Dipanshu@gmail.com",
    role : "Software-developer",
};

console.log(details);

// 2. dot nototaions 
let product = {
    name : "Headphoens",
    price: 1999,
    category : "Electronics",
};

console.log(product.name);
console.log(product.price);

// 3. braket notations 

console.log(details["email"]);
console.log(details["name"]);

// 4. dynamic property 
const user = { 
name: "Akshay", 
email: "akshay@gmail.com" 
}; 

const key = "name";
console.log(user[key]);

// 5. update object 
let user2 = {
    name : "Dipanshu",
    email: "Dipanshu@gmail.com",
    role : "Student",
};

user2.role = "Software Developer"
console.log(user2);

// 6. add new key 
const user3 = { 
name: "Akshay", 
email: "akshay@gmail.com" 
}; 
user3.isLooggedIn = true
console.log(user3);