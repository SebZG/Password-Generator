import { options, getPasswordOptions, getSelectedOptions } from "./getOptions.js";

// Get random element from an array
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generate password based on users options
const generatePassword = (length, selectedOptions) =>
  Array.from({ length }, () => getRandomElement(selectedOptions)).join('');

// Write password to the #password input
const writePassword = () => {
  const passwordOptions = getPasswordOptions();
  if (!passwordOptions) return; // Check if password generation was canceled
  const selectedOptions = getSelectedOptions(passwordOptions, options);
  console.log("Password length: " + passwordOptions.length);
  const password = generatePassword(passwordOptions.length, selectedOptions);
  console.log("Password: " + password);
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
  passwordText.focus();
  passwordText.select();
  alert("Password generated successfully!");
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');
// Add event listener to #generate button
generateBtn.addEventListener('click', writePassword);