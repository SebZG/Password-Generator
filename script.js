const options = [
  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
];

// Declare variables outside of getPasswordOptions function
let passwordLength;
let lowercase;
let uppercase;
let numeric;
let special;

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt("Password length? (8-12)");
  lowercase = prompt("Lowercase? (Y/N)").toLowerCase() === 'y';
  uppercase = prompt("Uppercase? (Y/N)").toLowerCase() === 'y';
  numeric = prompt("Numeric? (Y/N)").toLowerCase() === 'y';
  special = prompt("Special Characters ($@%&*. etc) (Y/N)?").toLowerCase() === 'y';

  // Validate password length
  if (passwordLength < 8 || passwordLength > 12) {
    alert("Password length must be between 8 and 12 characters.");
    return getPasswordOptions();
  }

  // Return an object containing the password options
  return {
    length: passwordLength,
    lowercase,
    uppercase,
    numeric,
    special
  };
}

// Function for getting a random element from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  const passwordOptions = getPasswordOptions();
  const selectedOptions = [];

  let password = '';

  if (passwordOptions.lowercase) {
    selectedOptions.push(...options[2]);
  }

  if (passwordOptions.uppercase) {
    selectedOptions.push(...options[3]);
  }

  if (passwordOptions.numeric) {
    selectedOptions.push(...options[0]);
  }

  if (passwordOptions.special) {
    selectedOptions.push(...options[1]);
  }

  // Generate the password using the selected options
  for (let i = 0; i < passwordOptions.length; i++) {
    password += getRandomElement(selectedOptions);
  }

  return password;
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);