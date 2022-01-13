// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var resultArray = [];
var userArray = [];


 var uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
 var lowercaseArray = "abcdefghijklmnopqrstuvwxyz" .split("");
 var numbersArray = "1234567890" .split("");
 var characterArray = "@#$%^&*()-_=+" .split("");

 uppercaseArray[1]
var numCharacter = window.prompt ("How many characters do you want between 8 and 128?");

 var numbers = window.confirm ("Do you want numbers in your password?");
 if (numbers){
  resultArray = resultArray.concat(numbersArray);
  
}
var uppercases = window.confirm ("Do you want Uppercase characters in your password?");
if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);

}
var lowercases = window.confirm ("Do you want lowercases characters in your password?");
if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);

}
var characters = window.confirm ("Do you want special characters in your password?");
if (characters){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)

for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
