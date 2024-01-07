const options = {
  numeric: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  special: ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'],
  lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};

// Function to get options
const getPasswordOptions = () => {
  const MIN_LENGTH = 8;
  const MAX_LENGTH = 50;

  // Get length and handle "cancel"
  let length;
  do {
    const lengthInput = window.prompt(`Password length? (${MIN_LENGTH}-${MAX_LENGTH})`);
    if (lengthInput === null) {
      alert("Password generation canceled.");
      console.log("Password generation canceled.");
      return;
    }

    length = parseInt(lengthInput, 10);

    // Handle length validation
    if (isNaN(length) || length < MIN_LENGTH || length > MAX_LENGTH) {
      alert(`Length must be a valid number between ${MIN_LENGTH} and ${MAX_LENGTH}`);
      console.log(`Length must be a valid number between ${MIN_LENGTH} and ${MAX_LENGTH}.`);
    }
  } while (isNaN(length) || length < MIN_LENGTH || length > MAX_LENGTH);

  // Get rest of options
  const lowercase = confirm("Include lowercase characters?");
  const uppercase = confirm("Include uppercase characters?");
  const numeric = confirm("Include numeric characters?");
  const special = confirm("Include special characters?");

  // Check if at least one character type is selected
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("At least one character type must be selected.");
    console.log("At least one character type must be selected.");
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

//! DARK-MODE LOGIC

// Get references to the elements
var darkBtn = document.getElementById("dark-btn");
var sun = document.getElementById("sun");
var moon = document.getElementById("moon");

// Toggle function for button
darkBtn.onclick = () => {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
    sun.classList.add("d-none");
    moon.classList.remove("d-none");

  } else {
    localStorage.setItem("theme", "light");
    moon.classList.add("d-none");
    sun.classList.remove("d-none");
  }
};

// Logic for adding/removing classes on load
if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
  moon.classList.add("d-none");
  sun.classList.remove("d-none");
}
else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
  sun.classList.add("d-none");
  moon.classList.remove("d-none");
}
else {
  localStorage.setItem("theme", "dark");
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
  sun.classList.add("d-none");
  moon.classList.remove("d-none");
}

// Get theme from local storage
localStorage.getItem("theme");