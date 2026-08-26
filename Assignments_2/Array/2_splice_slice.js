let arr = ["HTML", "CSS", "JavaScript", "React"];
console.log("Original array:",arr)

// 7. remove element using splice 
arr.splice(1, 1)
console.log(arr);

// 8. add element
arr.splice(1,  0, "CSS")
console.log(arr);

// 9. replace 
arr.splice(2, 1, "Java")
console.log(arr);

let arr2 = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
// 10. extract array 
let result = arr2.slice(1, 4);
console.log(result);

// 11. create copy 
console.log(arr2)
let copyArray = arr2.slice(0, 5);
console.log(copyArray);