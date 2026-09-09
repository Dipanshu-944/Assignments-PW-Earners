// 1. element by id 
document.getElementById("title").textContent = "Hello from Javascript."

// 2. querySelector 
let p = document.querySelector(".description")
p.textContent = " New Description is herre"

// 3. querySelectorAll 

let items = document.querySelectorAll(".item")

items.forEach((item) => {
    // item.style.color = "blue"
    // item.style.backgroundColor = "yellow"
    item.classList.add("li-design");
    // by external css (class)
})

// 4. use textContent
let p1 = document.querySelector("#message")

p1.textContent = "Be the change that you wish to see in the world (New Text)"

// 5. innerHTml 
let div = document.querySelector("#container")

div.innerHTML = "<h1> My website </h1>"
div.innerHTML += "<p> Welcome to website description, this is e-commerce website.</p>"

