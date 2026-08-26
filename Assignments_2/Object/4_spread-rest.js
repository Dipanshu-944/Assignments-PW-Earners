const user = {
    name : "Dipanshu",
    email: "Dipanshu@gmail.com",
    role : "Student",
};

// 15. copy object using spread 
const userCopy = {...user};
console.log(userCopy);

// 16. update using spread 
const updateUser= {...user,
    role : "Software-developer"
};
console.log(updateUser);

// 17.combine array using spread 
let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node.js", "Express"];

let output = [...frontend, ...backend];
console.log(output);

// 18 Rest parameter 
function showSkill(name, ...skills){
    console.log("Name: ",name)
    console.log("Skills: ",skills.join(","))
}

showSkill("Dipanshu", "HTML", "CSS", "JavaScript")