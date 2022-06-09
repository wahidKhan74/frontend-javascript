let promiseToStart = function() {
    return new Promise(function(resolve, reject){
        let isOn = true;
        if(isOn) {
            resolve({ isOn : true });
        } else{
            reject({ isOn : false });
        }
    })
}

let promiseToDrive = function( status ) {
    return new Promise(function(resolve, reject){
        if(status.isOn) {
            status.driveOn = "Yes";
            resolve(status);
        } else{
            status.driveOn = "Off";
            reject(status);
        }
    })
}

let promiseToFly = function( status ) {
    return new Promise(function(resolve, reject){
        if(status.driveOn == "Yes") {
            status.flyOn = "Flying";
            resolve(status);
        } else{
            status.flyOn = "Dying";
            reject(status);
        }
    })
}

promiseToStart().then(function(result) {
    console.log(result);
    return promiseToDrive(result);
}).then(function(result) {
    console.log(result);
    return promiseToFly(result);
}).then(function(result) {
    console.log(result);
}).catch(function(error){
    console.log(error);
});