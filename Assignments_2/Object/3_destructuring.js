// 11. object destructuring 
let user = {
    name : "Dipanshu",
    email: "Dipanshu@gmail.com",
    role : "Software-developer",
};

let {name, email, role} = user

console.log(name, email)

// 12. renaming 
let product = {
    name : "Mobile",
    price: 199999,
    category : "Electronics",
};

let {name: productName,}= product;
console.log(productName);

// 13. shorthand property 
let firstName = "Akshay";
let eMail = "akshay@gmil.com";
let currentROle = "Developer";

let user2 ={firstName,eMail,currentROle};
console.log(user2);

// 14. destructure func parameter 
let user3 = {
    name : "Dipanshu",
    email: "Dipanshu@gmail.com",
};
function displayUser({name, email}) {
    console.log(name)
    console.log(email)
}

displayUser(user3)