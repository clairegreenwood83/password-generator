// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
/* Questions to ask user:
  length of password (10 - 64 characters)? prompt box
  uppercase letters? confirm box
  lowercase letters? confirm box
  numbers? confirm box
  special characters? confirm box
*/

function getPasswordOptions() {
  var passwordLength = 0;
  var passwordLength = prompt("How long would you like your password to be?");
  
  if (passwordLength < 10) {
    alert("It should be at least 10 characters.");
    return
  } 
  if (passwordLength > 64) {
    alert("It should be less than 64 characters.");
    return
  }

  var haveUppercase = confirm("Do you want uppercase letters?");

  var haveLowercase = confirm("Do you want lowercase letters?");
  
  var haveNumbers = confirm("Do you want to include numbers?"); 
  
  var haveSpecialChar = confirm("Do you want to include special characters?");

  if (haveUppercase + haveLowercase + haveNumbers + haveSpecialChar === 0) {
    alert('Please select at least one');
    return
  }
}


// Function for getting a random element from an array
function getRandom(arr) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions(); 

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);   

    if (haveUppercase = true) {
      const getUppercase = getRandom(upperCasedCharacters);
      console.log(getUppercase);
    }
    
    if (haveLowercase = true) {
      const getLowercase = getRandom(lowerCasedCharacters);
      console.log(getLowercase);
    }
    
    if (haveNumbers = true) {
      const getNumbers = getRandom(numericCharacters);
      console.log(getNumbers);
    }
    
    if (haveSpecialChar = true) {
      const getSpecialChar = getRandom(specialCharacters);
      console.log(getSpecialChar);
    }
  
  }
}
generatePassword();


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
