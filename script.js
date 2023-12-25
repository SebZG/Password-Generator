const options = {
  numeric: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  special: ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'],
  lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};

// Declaring min/max lengths outside of getPasswordOptions() for dynamic use
const MIN_LENGTH = 8;
const MAX_LENGTH = 12;

// Function to get options
const getPasswordOptions = () => {
  // Get length and validation
  const length = parseInt(prompt(`Password length? (${MIN_LENGTH}-${MAX_LENGTH})`), 10);
  if (length < MIN_LENGTH || length > MAX_LENGTH) {
    alert(`Length must be between ${MIN_LENGTH}-${MAX_LENGTH}`);
    return getPasswordOptions();
  }
  // Get rest of options
  const lowercase = confirm("Include lowercase characters?");
  const uppercase = confirm("Include uppercase characters?");
  const numeric = confirm("Include numeric characters?");
  const special = confirm("Include special characters?");

  // Check if at least one character type is selected
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("At least one character type must be selected.");
    return getPasswordOptions();
  }

  // Return an object containing the password options
  return { length, lowercase, uppercase, numeric, special };
}

// Function for getting a random element from an array
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];


// Function to create users option array
const getSelectedOptions = (passwordOptions, options) => {
  const { lowercase, uppercase, numeric, special } = passwordOptions;
  const { numeric: num, special: spec, lowercase: lower, uppercase: upper } = options;
  const selectedOptions = [];

  if (lowercase) selectedOptions.push(...lower);
  if (uppercase) selectedOptions.push(...upper);
  if (numeric) selectedOptions.push(...num);
  if (special) selectedOptions.push(...spec);

  return selectedOptions;
}

// function to generate password based on users options
const generatePassword = (length, selectedOptions) =>
  Array.from({ length }, () => getRandomElement(selectedOptions)).join('');

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
const writePassword = () => {
  const passwordOptions = getPasswordOptions();
  const selectedOptions = getSelectedOptions(passwordOptions, options);
  const password = generatePassword(passwordOptions.length, selectedOptions);
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
  passwordText.focus();
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

