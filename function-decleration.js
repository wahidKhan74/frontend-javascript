// 1. A JavaScript function is a block of code designed to perform a particular task.
// 2. A JavaScript function is executed when "something" invokes it (calls it).
// 3. Functions are one of the fundamental building blocks in JavaScript. 

//1. Non parametrised function
function showMessage() {
    let message = "Welcome to javascript.";
    console.log("Hello,Today is a good day.");
    console.log(message);
}

// function calling
showMessage();
console.log("-------------------");

//2. One parametrised function
function showData(data) {
    console.log("Hi,Today is a 'Greate' day.");
    console.log(data);
}

showData();
console.log("-------------------");
showData("Hello");
console.log("-------------------");
showData(56756);
console.log("-------------------");
let user = {
    id : 3434, name:"john", age:34
}
showData(user);

//3. Multi parametrised function
function fetchUser(name,age,gender) {
    console.log(`The user ${name} and its age ${age} and gender ${gender}`);
 }

 fetchUser();
 fetchUser("John",50);

 //4. One pamertired (obj) method
function fetchEmployee(employee){
    console.log(`The Employee :
    Id : ${employee.id}
    Name : ${employee.name}
    Salary : ${employee.salary}
    Dept : ${employee.dept}
    `);
}

let emp = {
    id:10000,
    name:'Aria Stark',
    salary:354356,
    dept: 'Engineeering'
}
fetchEmployee(emp);
// fetchEmployee();  // Uncaught TypeError: Cannot read properties of undefined

// 5. Default Prametrised function
function getInfo(username="user", phone="101010101010", email="user@gmail.com") {
    console.log(`The user : ${username} 
    and its phone number : ${phone} 
    and email : ${email}`);
}
getInfo();
getInfo("john");