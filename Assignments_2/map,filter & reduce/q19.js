let tech =["HTML", "CSS", "JavaScript"] 

const combine = tech.reduce((acc, tech) => {
    return acc + "," + tech 
})

console.log(combine)