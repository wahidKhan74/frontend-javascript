function validateAge(age) {
  try {
    if (age < 18) {
      throw new RangeError( `Age ${age}, Invalid Age Exception`);
    } else {
      console.log("Welcome to vote, your age is valid , ", age);
    }
  } catch (error) {
    console.log("Error : ", error.name);
    console.log("Message : ", error.message);
  }
}

validateAge(20);
validateAge(10);

validateAge(100);
validateAge(4);

