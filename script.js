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

const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 12;

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = parseInt(prompt("Password length? (8-12)"), 10);

  // Validate password length
  if (passwordLength < PASSWORD_MIN_LENGTH || passwordLength > PASSWORD_MAX_LENGTH) {
    alert(`Password length must be between ${PASSWORD_MIN_LENGTH} and ${PASSWORD_MAX_LENGTH} characters.`);
    return getPasswordOptions();
  }

  let lowercase = confirm("Include lowercase characters?");
  let uppercase = confirm("Include uppercase characters?");
  let numeric = confirm("Include numeric characters?");
  let special = confirm("Include special characters ($@%&*. etc)?");

  // Check if at least one character type is selected
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("At least one character type must be selected.");
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

  passwordText.value = password;
  passwordText.focus();
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);