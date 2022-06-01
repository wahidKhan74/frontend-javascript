let ageFn = function (yearOfBirth) {
    let currentYear = 2022;
    return currentYear - yearOfBirth;
};

let retirement = function (yearOfBirth , callback) {
   let age = callback(yearOfBirth);
   if(age > 60){
        console.log("Retired.");
   } else{
       console.log("Not Retired.");
   }
}

retirement(1995, ageFn);
retirement(1895, ageFn);