const options = [
  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
]

passwordLength = getPassWordLength
lowerCase = getLowerCase
upperCase = getUpperCase
numeric = getNumeric
special = getSpecial

// Function to prompt user for password options
function getPasswordOptions() {
  const getPassWordLength = prompt("Password length? (8-12)")
  const getLowerCase = prompt("Lowercase? (Y/N)")
  const getUpperCase = prompt("Uppercase? (Y/N")
  const getNumeric = prompt("Numeric? (Y/N)")
  const getSpecial = prompt("Special Characters ($@%&*. etc) (Y/N)?")

  console.log(passwordLength)
}

getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.innerText = "test";
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword());