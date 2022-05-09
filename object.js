// object literal
let employee  = {
    id: 1000,
    name : "mike",
    salary:2343,
    email:'mike12@gmail.com',
    dept:"Engineering"
}

console.log(employee);

// access properties from object via (.) operation
console.log(employee.id);
console.log(employee.name);
console.log(employee.salary);
console.log(employee.email);
console.log(employee.dept);

console.log("------------------------");
// acces properties from object  via ['key'] operator
console.log(employee['id']);
console.log(employee['name']);
console.log(employee['salary']);
console.log(employee['email']);
console.log(employee['dept']);


console.log("------------------------");

Object.keys(employee).forEach( ( key )=> {
   console.log(` Key : ${key}  and value : ${employee[key]}`);
})

// object literal
let employee1  = {
    id: 1000,
    name : "mike",
    salary:2343,
    email:'mike12@gmail.com',
    dept:"Engineering"
}

// create object via object constructor 
let employee2  =  new Object({
    id: 1002,
    name : "jonn",
    salary:89343,
    email:'john@gmail.com',
    dept:"Engineering"
});


console.log(employee1);
console.log(employee2);