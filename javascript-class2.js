// class expression 
let Account = class {
    //properties
    id;
    name;
    balance;
    email;
    // constructor
    constructor(id,name,balance,email) {
        this.id = id;
        this.name= name;
        this.balance = balance;
        this.email=email;
    }

    showId() {
        console.log(`The is is ${this.id}`);
    }

    showAccount() {
        console.log(`
        The Account :
        id : ${this.id}
        name : ${this.name}
        balance : ${this.balance}
        email : ${this.email}
        `);
    }
}

let account = new Account(101,"John Smith",454654.56,"john@gmail.com");
console.log(account);

//access properties
console.log(account.id);
console.log(account.name);

account.showId();
account.showAccount();
