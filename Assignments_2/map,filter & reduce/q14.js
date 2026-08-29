let users = [
  { name: "Satinder", email: "Satinder@gmail.com", role: "Student" },
  { name: "Loveleen", email: "love@gmail.com", role: "Student"},
  { name: "Akshay", email: "Akshay@yahoo.com", role: "Student" },
];

const emails = users.filter((user) => {
    return user.email.endsWith("@gmail.com")
})

console.log(emails);