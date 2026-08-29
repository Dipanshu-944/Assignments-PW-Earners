let users = [
  { name: "Satinder", email: "Satinder@gmail.com", role: "Developer" },
  { name: "Loveleen", email: "love@gmail.com", role: "Student"},
  { name: "Akshay", email: "Akshay@gmail.com", role: "Developer" },
];

const userRole = users.filter((user) => {
    return user.role === "Developer"
})

console.log(userRole);