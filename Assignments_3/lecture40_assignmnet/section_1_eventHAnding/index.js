
// 1. button click 
let btn = document.querySelector("#btn");
let p = document.querySelector(".message");

function revealbtn() {
  p.classList.remove("message");
  p.classList.add("visible");
}

btn.addEventListener("click", revealbtn);

// 2. change text on click 
let btn2 = document.querySelector("#btn2");
let p2 = document.querySelector(".change");

function changeText() {
    p2.textContent = "Thanks for visiting our webiste, Have a great day"
}

btn2.addEventListener('click' , changeText)

// 3. mouseover 
let h1 = document.querySelector("#head")

h1.addEventListener('mouseover' ,() => {
    h1.textContent = "You are overing the mouse here."
})
h1.addEventListener('mouseout' ,() => {
    h1.textContent = "Javascript, overmouse event."
})