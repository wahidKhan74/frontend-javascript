let userMap = new Map();

// set data values 
userMap.set('id',10001);  // key is string value is number
userMap.set(10001,"john smith");  // key is number value is string
userMap.set(true, 'Married'); // key is boolean value is string
userMap.set(null,'empty'); // key is null value is string
userMap.set({id:10001},'john smith'); // key is object value is string
userMap.set([10,20],'data'); // key is array value is string

console.log(userMap);

// get data values from map
console.log(userMap.get(10001));
console.log(userMap.get(true));
console.log(userMap.get(null));
console.log(userMap.get({id:10001}));  // undefined

// get values from map
console.log(userMap.values());

// get keys from map
console.log(userMap.keys());

// iterate over map
for( let [key,value] of userMap.entries()){
    console.log("Key : ", key , " Value : ",value);
}
console.log("----------------");
userMap.forEach((key,value) =>{
    console.log("Key : ", key , " Value : ",value);
})