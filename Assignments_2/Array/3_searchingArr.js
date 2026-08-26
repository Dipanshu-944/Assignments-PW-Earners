let arr = ["HTML", "CSS", "JavaScript", "React"]; 

// 12, find index of an elements 
console.log(arr.indexOf("JavaScript"));

// 13. find ele using indexOf()
console.log(arr.indexOf("React"));

// 14. find() 
let data = [ 
    { name: "Rahul", age: 20 }, 
    { name: "Dipanshu", age: 24},
    { name: "Anshu", age: 22 },
    { name: "Ansh", age: 23 }
] 
let findByName = data.find(function(person) {
    return person.name === "Dipanshu"
});

console.log(findByName);

// 15. findIndex() 
let findByIndex = data.findIndex(function(data){
    return data.name === "Ansh"
})

console.log(findByIndex);