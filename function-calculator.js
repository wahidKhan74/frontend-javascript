let add = function(num1, num2){
    return num1 + num2;
}

let sub = function(num1, num2){
    return num1 - num2;
}

let mul = function(num1, num2){
    return num1 * num2;
}

let div = function(num1, num2){
    return num1 / num2;
}

let x = 100;
let y = 50;

console.log("Addition of "+ x + " + "+ y + " = "+add(x,y));
console.log("Substraction of "+ x + " - "+ y + " = "+sub(x,y));
console.log("Multiplication of "+ x + " * "+ y + " = "+mul(x ));
console.log("Division of "+ x + " / "+ y + " = "+div(x,y));