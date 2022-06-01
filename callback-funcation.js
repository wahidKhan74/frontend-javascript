// A JavaScript callback is a function which is to 
// be executed after another function has finished execution. 

// A callback is a function passed as an argument to another function. 

let x = function () {
    console.log("I am X function");
}

let y = function (callback) {
    console.log("I am Y function");
    callback();
}

y(x);

y( function () {
    console.log("I am Anonymous function");
});