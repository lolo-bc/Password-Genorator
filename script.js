// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  
  var lengthOfPw = prompt("How many characters would you like your password to be?");

  if (parseInt(lengthOfPw) < 8) {
    alert("Password must be at least 8 characters");
  } else {
    var includeLowers = confirm("Would you like to use lower case letters in your password?");
    var includeUppers = confirm("Would you like to use upper case letters in your password?");
  }

  


  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;



}



 



  var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];
  // console.log(lowerCase);


 var buttholes = Math.floor(Math.random() * (lowerCase.length - 0)) + 0 
 console.log(lowerCase[rando]);

 var titties = Math.floor(Math.random() * (uppers.length - 0)) + 0 
 console.log(uppers[rando]);



console.log(lowerCase[rando] + uppers[rando]);