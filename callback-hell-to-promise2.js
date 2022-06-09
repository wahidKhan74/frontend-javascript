let promise = new Promise(function(resolve, reject) {
    let isError = false;
    if(!isError) {
        resolve(1000);
    } else {
        reject("Error Occured.")
    }
})

promise.then(first).then(second).then(third).then(function(response) {
    console.log("Response : ", response);
}).catch(function(error) {
     console.log(error);
})



function first(value){
    console.log("value : ", value);
    return value * 2;
};

function second(value){
    console.log("value : ", value);
    return value * 2;
}

function third(value){
    console.log("value : ", value);
    return value * 2;
}