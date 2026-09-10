// 10. event bubbling 
let parentDiv = document.querySelector("#parent")
let btn = document.querySelector("#btn")

parentDiv.addEventListener('click', (e) => {
    console.log("Parent Clicked")
})
btn.addEventListener('click', (e) => {
    console.log("Button clicked")
    
})

// 11. event capturing
let parentDiv2 = document.querySelector("#parent2")
let btn2 = document.querySelector("#btn2")

parentDiv2.addEventListener('click', (e) => {
    console.log("Parent Clicked")
}, {capture: true})
btn2.addEventListener('click', (e) => {
    console.log("Button clicked")
})


// Section_ 5 here 

// 12. event delegation 
let btns = document.querySelector("#buttons")

btns.addEventListener('click', (e) => {
    e.stopPropagation()
    // console.log(e.target)
    console.log(e.target.textContent + " Button clicked");
})


// 13. handle dyanmic list event delegation
let skill = document.querySelector("#skills")
let res = document.querySelector("#res")

skill.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log("You clicked: " + e.target.textContent)
})