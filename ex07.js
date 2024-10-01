// Exercise 7: Write a function `validateEmail` that takes a string as an email
// and returns true if the email is valid, and false otherwise. Use basic validation
// (e.g., the presence of "@" and a ".").
// Example: validateEmail("test@example.com") should return true.

const validateEmail = (email) => {
    if (email.includes("@") && email.includes(".")) {
      console.log("Validate Email");
      return true;
    } else {
      console.log("Invalid Email");
      return false;
    }
  };
  



console.log(validateEmail("test@example.com")); // Expected output: true
console.log(validateEmail("invalid-email.com")); // Expected output: false