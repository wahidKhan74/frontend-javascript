let promiseToStart = new Promise(function(resolve, reject) {
    let isOn = true;
    if(isOn){
        resolve("Jet is started !");
    } else {
        reject("Jet is Off ! ");
    }
});


promiseToStart.then(function(response) {
    console.log("Response : ", response);
}).catch(function(error) {
    console.log(error);
})


