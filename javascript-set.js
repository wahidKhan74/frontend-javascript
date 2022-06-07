// Set – is a collection of unique values.

// Methods and properties:

// new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
// set.add(value) – adds a value (does nothing if value exists), returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

let setOfCompanies = new Set();

// add data values into set
setOfCompanies.add("DELL");
setOfCompanies.add("FB");
setOfCompanies.add("MS");
setOfCompanies.add("GOOGLE");
setOfCompanies.add("FB");

console.log(setOfCompanies);

//access data from set 
console.log(setOfCompanies.has('FBO'));

//delete data from set 
console.log(setOfCompanies.delete('F0B'));

//iterate over set data list
for(let comp of setOfCompanies){
    console.log(comp);
}

console.log("---------------");

setOfCompanies.forEach((comp)=>{
    console.log(comp);
})
