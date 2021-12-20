//function to generate a password
var generatePassword = function() {

    
    var numCharacters;
    //Ask how many characters between 8 and 128 they would like
    while(true) {
        numCharacters = window.prompt("How many characters would you like your password to be? Enter a number between 8 and 128.");
        numCharacters = parseInt(numCharacters)
        if (numCharacters >= 8 && numCharacters <= 128) {
            break;
        }
    }
    //Ask if they would like a special character
    var specialCharacter;
    while(true) {
        specialCharacter = window.prompt("Would you like to use a special character?");
        if(specialCharacter === "yes" || specialCharacter === "no") {
            break;
        }
    }
    //ask if they would like a capital letter
    var capitalLetter;
    while(true) {
        capitalLetter = window.prompt("Would you like to use a capital letter?");
        if(capitalLetter === "yes" || capitalLetter === "no") {
            break;
        }
    }  
    //ask if they want to use a number
    var numSet;
    while(true) {
        numSet = window.prompt("Would you like to use a number?");
        if(numSet === "yes" || numSet === "no") {
            break;
        }
    }

    console.log("password length " + numCharacters);
    console.log("used special character " + specialCharacter);
    console.log("used capital letters " + capitalLetter);
    console.log("used a number " + numSet);

    //arrays for the characters for the password
    var specialCharacterList = [
        "!", "#", "$", "%", "&", "(", ")", "-", "+", "=", "?"
    ];

    var capitalLetterList = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];

    var lowerCaseLetterList = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    var numSetList = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
    ];

    //concatenate the arrays
    var possibleChars = [].concat(lowerCaseLetterList);

    if(specialCharacter === "yes") {
        possibleChars = possibleChars.concat(specialCharacterList);
        console.log(possibleChars);
    }
    if(capitalLetter === "yes") {
        possibleChars = possibleChars.concat(capitalLetterList);
        console.log(possibleChars);
    }
    if(numSet === "yes") {
        possibleChars = possibleChars.concat(numSetList);
        console.log(possibleChars);
    }
    //loop to choose the characters
    var passwordCharacters = "";
    for(var i = 0; i < numCharacters; i++) {
        console.log("loop number " + i);
        passwordCharacters = passwordCharacters.concat(possibleChars[i]);
    }
    return passwordCharacters;
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