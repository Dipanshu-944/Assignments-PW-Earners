
// 4. clicked element 
let btn = document.querySelector("#btn")

btn.addEventListener('click' , (e) => {
    console.log(e.target)
})

// 5. mouse co-odinates 
btn.addEventListener('click' ,(e) => {
    console.log(e.clientX, e.clientY)
})

// 6. get input using event object
let p = document.querySelector("#p1")

p.addEventListener('input', (e) => {
    console.log(e.target.value)
})