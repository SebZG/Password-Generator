const options = {
  numeric: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  special: ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'],
  lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};

// Get options
const getPasswordOptions = () => {
  const MIN_LENGTH = 8;
  const MAX_LENGTH = 128;

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

// Create users option array
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

export { options, getPasswordOptions, getSelectedOptions };