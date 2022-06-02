let showMessage = function () {
    console.log("Today is good day!");
}

// on parametrised arrow function
let showMessage2 = () => {
    console.log("Today is wonderfull day!");
}

// parametrised arrow function
let showMessage3 = (username,age) => {
    console.log("Today is wonderfull day!");
    console.log(username + "   "+ age );
}


// parametrised arrow function
let showMessage4 = (username,execute) => {
    console.log("Today is wonderfull day!");
    console.log(username);
    execute();
}

showMessage();
showMessage2();

showMessage3("johnsmith",20);

showMessage4("johnsmith",showMessage3);

