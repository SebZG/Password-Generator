import { options, getPasswordOptions, getSelectedOptions } from "./getOptions.js";

// Get random element from an array
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generate password based on users options
const generatePassword = (length, selectedOptions) =>
  Array.from({ length }, () => getRandomElement(selectedOptions)).join('');
                                                                                                                      
// Write password to the #password input
const writePassword = () => {
  const passwordOptions = getPasswordOptions();
  const selectedOptions = getSelectedOptions(passwordOptions, options);
  const password = generatePassword(passwordOptions.length, selectedOptions);
  const passwordText = document.querySelector('#password');

  console.log("Password length: " + passwordOptions.length);
  console.log("Password: " + password);

  passwordText.value = password;
  passwordText.focus();
  passwordText.select();
  navigator.clipboard.writeText(passwordText.value);
  
  alert("Password generated successfully and copied to the clipboard!");
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');
// Add event listener to #generate button
generateBtn.addEventListener('click', writePassword);