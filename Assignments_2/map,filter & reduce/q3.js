let user = 
[
  { name: "Rahul", email: "rahul@gmail.com" },
  { name: "Priya", email: "priya@gmail.com" },
  { name: "Anamika", email: "Anamika@gmail.com" },
];

const userNames = user.map((user) => {
    return user.name
})
console.log(userNames);