// 16. Flatter a nested array 
let arr = [1,2,[3,4],[5,6]]
let result = arr.flat();
console.log(result);

// 17. Flatter multi-level array 
let arr2 = [1,2,[3,4,[5,6]]]
let result2 = arr2.flat(2);
console.log(result2);

// 18. using foreach 
let colors = ["red", "yellow","orange", "blue","pink" ]
colors.forEach(function(color){
    console.log(color)
})

// 19. display Element with index 
let languages = ["HTML", "CSS", "JavaScript", "React", "Node.js"]; 
languages.forEach(function(language, index){
    console.log(language, index)
})

// 20. update array 
let languagess = ["HTML", "CSS", "JavaScript", "React", "Node.js"]; 

languagess.push("Php")
languagess.shift()

console.log("final : ",languages)

