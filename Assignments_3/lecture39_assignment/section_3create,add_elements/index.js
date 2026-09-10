
let body = document.querySelector("body")

// 10. createElement 
let p2 = document.createElement("p")

p2.textContent = "This paragraph was created using JavaScript."
document.body.append(p2);

// 11. appendchild 
let list =document.querySelector("#list");
let item1 = document.createElement("li");
let item2 = document.createElement("li")

item1.textContent = "List item 1 (appendChild)";
item2.textContent = "List item 2 (appendChild)";

list.appendChild(item1);
list.appendChild(item2);

// 12. append , prepend 

let item3 = document.createElement("li")
let item4 = document.createElement("li")
let item5 = document.createElement("li")

item3.textContent = "List item 3 (append)";
item4.textContent = "List item 4 (append)";
item5.textContent = "List item 5 (Prepend)";

list.append(item3, item4);
list.prepend(item5);

// 13. insertbefore 
let item6 = document.createElement("li")
let item7 = document.createElement("li")

item6.textContent = "List item 6 (Insertbefore)";
item7.textContent = "List item 7 (Insertbefore)";

// list.children[2].before(item6);
// list.children[5].before(item7);
list.insertBefore(item6, list.children[2]);
list.insertBefore(item7, list.children[5]);

