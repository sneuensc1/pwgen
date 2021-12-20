// Assignment code here





var generatePassword = function() {
    var numCharacters
    //Ask how many characters between 8 and 128 they would like
    while(true) {
        var numCharacters = window.prompt("How many characters would you like your password to be? Enter a number between 8 and 128.");
        numCharacters = parseInt(numCharacters)
        if (numCharacters >= 8 && numCharacters <= 128) {
            break;
        }
    }
    //Ask if they would like a special character
    var specialCharacter
    while(true) {
        var specialCharacter = window.prompt("Would you like to use a special character?");
        if(specialCharacter === "yes" || specialCharacter === "no") {
            break;
        }
    }
    //ask if they would like a capital letter
    var capitalLetter
    while(true) {
        var capitalLetter = window.prompt("Would you like to use a capital letter?");
        if(capitalLetter === "yes" || capitalLetter === "no") {
            break;
        }
    }  
    //ask if they would like a lower case letter
    var lowerCaseLetter
    while(true) {
        var lowerCaseLetter = window.prompt("Would you like to use a lower case letter?");
        if(lowerCaseLetter === "yes" || lowerCaseLetter === "no") {
            break;
        }
    }

}
//function to generate a loop




//arrays for the characters for the password
var specialCharacter = [
    "!", "#", "$", "%", "&", "(", ")", "-", "+", "=", "?"
];

var capitalLetter = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

var lowerCaseLetter = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];






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