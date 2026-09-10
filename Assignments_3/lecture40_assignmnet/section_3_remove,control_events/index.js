// 7. remove event listener
let btn = document.querySelector("#btn");
let h2 = document.querySelector("#text");

function addText(e) {
  console.log(e.target);
}
btn.addEventListener('click' ,addText);
btn.removeEventListener("click", addText);

// 8. run once
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("#one");

function onlyOnce() {
  p.classList.toggle("message");
}

btn2.addEventListener("click", onlyOnce, { once: true });

// 9. event propagtion
console.log("WITHOUT stopPropogation")

let div = document.querySelector("#parent");
let div2 = document.querySelector("#child");
let btnn = document.querySelector("#btnn");

div.addEventListener("click", (e) => {
    console.log("parent");
});

div2.addEventListener("click", (e) => {
    console.log("child");
});

btnn.addEventListener("click", (e) => {
    console.log("btnn");
});

console.log("WITH stopPropogation")

div.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("parent");
});

div2.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("child");
});

btnn.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("btnn");
});

