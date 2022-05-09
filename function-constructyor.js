// function constructor
function Employee (id, name, salary, dept) {
    this.id = id;
    this.name= name;
    this.salary = salary;
    this.dept = dept;
}


let Account = function (id, name, balance, address) {
    this.id = id;
    this.name= name;
    this.balance = balance;
    this.address = address;
}



// create employe object : functional object
let employee1 = new Employee();

let employee2 = new Employee(1001,"Harish", 45456.45, "Dev");
let employee3 = new Employee(1002,"Hari", 56545.45, "Dev");
let employee4 = new Employee(1004,"Harrrri", 78545.45, "Dev");

let account1 = new Account(10001,"Harrrrrrrrissssss", 56545.45, "Hariram nagar");

console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);
console.log(account1);