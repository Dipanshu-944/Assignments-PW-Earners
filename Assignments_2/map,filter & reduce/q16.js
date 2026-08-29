let users = [
  { name: "Satinder", email: "Satinder@gmail.com", role: "Student" },
  { name: "Loveleen", email: "love@gmail.com", role: "Student"},
  { name: "Akshay", email: "Akshay@gmail.com", role: "Student" },
];

const countUser = users.reduce((acc, currentuser) => {
    return acc + 1
}, 0)

console.log(countUser)