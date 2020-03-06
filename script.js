// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordText = document.querySelector("#password");

var usersChoice = [];
var usersPW = "";
var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowers = ["a", "b", "c", "d", "e", "f", "g", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];
var numbies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specials = [ '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F','\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E'];


// Write password to the #password input
function writePassword() {

  usersPW = "";  

  var lengthOfPw = prompt("How many characters would you like your password to be?");
  
  if (lengthOfPw == null) {
    return;
  }

  if (parseInt(lengthOfPw) < 8) {
    alert("Password must be at least 8 characters");
  } else {
    var includeLowers = confirm("Would you like to use lower case letters in your password?");
    var includeUppers = confirm("Would you like to use upper case letters in your password?");
    var includeNumbies = confirm("Would you like to use numbers in your password?");
    var includeSpecials = confirm("Would you like to use special characters in your password?");
  
    if (includeLowers) {
      usersChoice = usersChoice.concat(lowers);
    }

    if(includeUppers) {
      usersChoice = usersChoice.concat(uppers);
    }

    if(includeNumbies) {
      usersChoice = usersChoice.concat(numbies);
    }

    if(includeSpecials) {
      usersChoice = usersChoice.concat(specials);
    }

    if(includeLowers == false && includeNumbies == false && includeUppers == false && includeSpecials == false) {
      alert("dont be rude");
    } else {
      for (i = 0; i < parseInt(lengthOfPw); i++) {
        var charOptions = usersChoice[Math.floor(usersChoice.length * Math.random())];
        usersPW = usersPW + charOptions;
      }
      passwordText.value = usersPW; 
      
    }

  }

}


