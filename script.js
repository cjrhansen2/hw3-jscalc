// Assignment Code
var generateBtn = document.querySelector("#generate");
//Arrays for requiring specific characters in password
const number = "0123456789";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const special = "!@#$%^&*():?><";

//Functions for determining password characteristics
//first is for determining password length

function length() {
  promptLength = prompt("Enter the length of your password in characters (must be between 8 and 128 characters): ");

  //conditionals
  if (promptLength < 8) {
    alert("Password must be 8 characters or longer.");
  }
  else if (promptLength > 128) {
    alert("Password must be less than 128 characters.");
  }

  return promptLength;
}
//decide if passwords contain upper case, special characters, and numbers
function uppers() {
  promptUppers = prompt("Type yes if you want upper case letters in your password, type no otherwise: ");
  promptUppers = promptUppers.toLowerCase();
  var containsUppers;

  if (promptUppers === "yes" || promptUppers === "y") {
    containsUppers = true;
    return containsUppers;
  }
  else if (promptUppers === "no" || promptUppers === "n"){
    containsUppers = false;
    return containsUppers;
  }
}
function numbers() {
  promptNumbers = prompt("Type yes if you want numbers in your password, type no otherwise: ");
  promptNumbers = promptNumbers.toLowerCase();
  var containsNumbers;

  if (promptNumbers === "yes" || promptNumbers === "y") {
    containsNumbers = true;
    return containsNumbers;
  }
  else if (promptNumbers === "no" || promptNumbers === "n"){
    containsNumbers = false;
    return containsNumbers;
  }
}
function specials() {
  promptSpecials = prompt("Type yes if you want special characters in your password, type no otherwise: ");
  promptSpecials = promptSpecials.toLowerCase();
  var containsSpecials;

  if (promptSpecials === "yes" || promptSpecials === "y") {
    containsSpecials = true;
    return containsSpecials;
  }
  else if (promptSpecials === "no" || promptSpecials === "n"){
    containsSpecials = false;
    return containsSpecials;
  }
}

//function for generating password based on preferences
function generatePassword() {
  var pwLength = length();
  var pwUppers = uppers();
  var pwNumbers = numbers();
  var pwSpecials = specials();

  //set up the string that contains all the characters the password will be generated from
  //and create password string
  var pw = '';
  var pwOptions = lowercase;

  if (pwNumbers) {
    pwOptions += number;
  }

  if (pwSpecials) {
    pwOptions += special;
  }

  if (pwUppers) {
    pwOptions += uppercase;
  }
  
  //loop through character length, adding from string of password character options
  for (let i=0; i<pwLength; i++) {
    pw += pwOptions.charAt(Math.floor(Math.random()*(pwOptions.length)));
  }

  return pw
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


