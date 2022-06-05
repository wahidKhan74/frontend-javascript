function ValidaionError(message) {
    this.name = "ValidaionError";
    this.message = message;
}

function ageValidator(age) {
    try {
        if(age<18){
            throw new ValidaionError(`${age} , Is not valid age`);
        } else {
            console.log("Welcome to vote, your age is valid , ", age);
        }
    } catch (error) {
        console.log("Error : ", error.name);
        console.log("Message : ", error.message); 
    }
}


ageValidator(20);
console.log("--------------");
ageValidator(10);
console.log("--------------");
ageValidator(50);



// let error = new ValidaionError("This is a validation error message");
// console.log(error);