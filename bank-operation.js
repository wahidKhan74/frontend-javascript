let accounts = [
    { id:10001, username:"john",password:"john12", email:"john@gmail.com", balance:5000},
    { id:10002, username:"mike",password:"mike12", email:"mike@gmail.com",balance:2000},
    { id:10003, username:"will",password:"will12", email:"will@gmail.com",balance:6000},
    { id:10004, username:"David",password:"David12", email:"David@gmail.com",balance:3000},
    { id:10005, username:"Milli",password:"Milli12", email:"milli@gmail.com",balance:9000},
]

function findAccount(id) {
    let match = false;
    for (const acc of accounts) {
        if(acc.id ==id){
            console.log(`The user '${acc.username}' balance is : '${acc.balance}'`);
            match = true;
           return acc;
        }
    }
    if(!match) {
        console.log("accout not found");
        return null;
    }
}

function showBalance() {
    alert("Welcome to Lena dena Bank");
    let id = prompt("Enter User Account Id: ");
    let acc = findAccount(id);
}

function withdrawAmount(){
    alert("Welcome to Lena dena Bank");
    let id = prompt("Enter User Account Id: ");
    let amount = prompt("Enter Amount to withdraw: ");
    let acc = findAccount(id);
    if(acc!=null){
        if(amount<balance && amount>0)
        acc.balance -=  amount;
        console.log(`The user '${acc.username}' balance is : '${acc.balance}'`);
    }
}



// showBalance();
console.log("-------------");
withdrawAmount();
