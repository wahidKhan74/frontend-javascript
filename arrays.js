let listOfCompanies = ["Dell", "Google","Microsoft","Facebook"];
let numbers = [10,20,30,40,50,60,70,80,90];

let data = ["Johh","Smith",55,true, 54556.56, null, undefined];

console.log(listOfCompanies);
console.log(numbers);
console.log(data);

console.log(data[data.length-3]);

console.log("------------");
for (let index = 0; index < listOfCompanies.length; index++) {
    const company = listOfCompanies[index];
    console.log(company);
}

console.log("------------");
numbers.forEach(num => {
    console.log(num);
});

console.log("------------");
for (const index in data) {
    const element = data[index];
    console.log(element);
}

console.log("------------");
for (const value of data) {
    console.log(value);
}