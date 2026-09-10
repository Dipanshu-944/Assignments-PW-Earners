// 14. remove an element 
let list = document.querySelector("#list_remove");

let item1 = list.children[1];

list.removeChild(item1)
list.children[3].remove();

// 15. clone 

let body = document.querySelector("body")

let btn = document.querySelector("#btn")
let btn2 = btn.cloneNode(true)

document.body.append(btn2)