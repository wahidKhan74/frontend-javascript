let users = [];

function login() {
    let username = prompt("Please enter a username : ");
    let password = prompt("Please enter a password : ");
    if(username!=null && username!="" && password!=null && password!=""){
        if(username==="admin@gmail.com"&& password==="admin@123") {
            console.log("Login Successfull!");
            alert("Login Successfull!");
        }else{
            console.log("User does not exist.");
            alert("User does not exist.");
        }
    } else {
        console.log("Required fields are missing.");
        alert("Required fields are missing.");
    }
}

function register() {
    let username = prompt("Please enter a username : ");
    let password = prompt("Please enter a password : ");
    let email = prompt("Please enter a email : ");
    if(username!=null && username!="" && password!=null && password!="" && email!=null && email!=""){
        let u = {
            "username" : username,
            "password" : password,
            "email" :email
        };
        users.push(u);
        console.log(users);
    } else {
        console.log("Required fields are missing.");
        alert("Required fields are missing.");
    }
}
// login();