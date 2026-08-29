let users = 
[
    {name: "Rahul", isActive: true }, 
    {name: "Priya", isActive: false },
    {name: "Deeksha", isActive: false },
    {name: "Loveleen", isActive: true },
]

const activeUser = users.filter((user) => {
    return user.isActive
})

console.log(activeUser)