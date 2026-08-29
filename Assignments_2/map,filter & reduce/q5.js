let users = [
  { name: "Satinder", email: "Satinder@gmail.com", role: "Student" },
  { name: "Loveleen", email: "love@gmail.com", role: "Student"},
  { name: "Akshay", email: "Akshay@gmail.com", role: "Student" },
];

const changeRole = users.map((userRole) => {
    return {...userRole, role: "Developer"}
})
console.log(changeRole)