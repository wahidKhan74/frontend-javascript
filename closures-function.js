// nested function are closures
// Access three diff scopr :-
  // global varaibles
  // outer function varaible and paramenters
  // inner function varaible and paramenters

let firstName = "John";

function fullName(x) {

    let middleName = "William";  // local variable or outer fn variable
    //nested function or closures
    function combine()  {
        let lastName ="Smith";  // local variable or inner fn variable
        return `${firstName} ${middleName} ${lastName}`;
    }

 return combine();
}

console.log(fullName());