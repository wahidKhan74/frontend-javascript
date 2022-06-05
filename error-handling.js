let  user  =  {} ;
try {
    if(true) {
        console.log("Statement 1");
        users.name = "john";
        console.log("Statement 2");
    }
} catch (ex) {
    console.log("Exception is handled.");
    console.log(ex.name);
    console.log(ex.message);
}
console.log("Statement 3");
console.log(user);