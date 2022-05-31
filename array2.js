let users = [
    { id:10001, username:"john",password:"john12", email:"john@gmail.com"},
    { id:10002, username:"mike",password:"mike12", email:"mike@gmail.com"},
    { id:10003, username:"will",password:"will12", email:"will@gmail.com"},
    { id:10004, username:"David",password:"David12", email:"David@gmail.com"},
    { id:10005, username:"Milli",password:"Milli12", email:"milli@gmail.com"},
]

function findById() {
    let id = prompt("Enter user id : ");
    for (const user of users) {
        if(user.id ==id){
            console.log(user);
        }
    }
}

findById();
