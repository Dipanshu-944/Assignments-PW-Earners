// 6.change attribute
let car = document.querySelector("#car");

car.setAttribute("src", "new.jpeg");
car.setAttribute("alt", "Updated_image");

// 7.classList
let btn = document.querySelector("#btn");
btn.classList.add(".createdClass");
btn.classList.remove(".createdClass");

// 8. modify element Style 
let head = document.querySelector("#heading")
head.classList.add("headesign")

// 9. use dataset read data 
let productBtn  = document.querySelector("#productBtn")
console.log(productBtn.dataset.id)
