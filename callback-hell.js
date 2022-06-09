// Nested callbacks lead to callback hell.
first(1000, function(firstRes, error) {
    console.log(firstRes, error);
    if(!error){
        second(firstRes, function(secondRes, error){
            console.log(secondRes, error);
            if(!error){
                third(secondRes, function(thirdRes, error){
                    console.log(thirdRes, error);
                })
            }
        })
    }
});


function first(value, callback){
    callback(value*2, false);
}

function second(value, callback){
    callback(value*2, false);
}

function third(value, callback){
    callback(value*2, false);
}