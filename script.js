// Assignment code here

var generatePassword = function() {
    window.alert("password1");
    
    
    //Ask how many characters between 8 and 128 they would like
    var numCharacters = window.prompt("How many characters would you like your password to be? Enter a number between 8 and 128.");
    //conditional recall

    //Ask if they would like a special character
    var specialCharacter = window.prompt("Would you like to use a special character?");
    //conditional recall
    if(specialCharacter === null || specialCharacter === 0) {
        window.alert("You need to provide a valid answer, please try again!");
    }
    var capitalLetter = window.prompt("Would you like to use a capital letter?");
    //conditional recall
    if(capitalLetter === null || capitalLetter === 0) {
        window.alert("You need to provide a valid answer, please try again!");
    }
    var lowerCaseLetter = window.prompt("Would you like to use a lower case letter?");
    //conditional recall
    if(lowerCaseLetter === null || lowerCaseLetter === 0) {
        window.alert("You need to provide a valid answer, please try again!");
    }


//function to generate a loop
var pickCharacters = function() {
    

    for(var i = 0; i < specialCharacter.length; i++)

return value;
}

var specialCharacter = [
    !, #, $, %, &, (, ), -, +, =, ?
]

var capitalLetter = [
    A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
]

var lowerCaseLetter = [
    a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
]



//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min +1) + min);

    return value;
}





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