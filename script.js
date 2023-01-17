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
var haveUppercase = "";
var haveLowercase = "";
var haveNumbers = "";
var haveSpecialChar = "";
var passwordLength = 0;
let characterSet = []; // array to hold possible password characters


function getPasswordOptions() {

  var passwordLength = prompt("How long would you like your password to be?");
  
  while (passwordLength < 10 || passwordLength > 64) {
    alert("It should be at least 10 characters and less than 64 characters.");
    var passwordLength = prompt("How long would you like your password to be?");
  } 
  alert("Your password will be " + passwordLength + " characters long.");

  var haveUppercase = confirm("Do you want uppercase letters?");

  var haveLowercase = confirm("Do you want lowercase letters?");

  var haveNumbers = confirm("Do you want to include numbers?"); 

  var haveSpecialChar = confirm("Do you want to include special characters?");

  }

  if (haveUppercase + haveLowercase + haveNumbers + haveSpecialChar === 0) {
    alert('Please select at least one');
  }

  // if NaN code



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

  if (haveLowercase === true) {
    characterSet = characterSet.concat[lowerCasedCharacters];
  }

  if (haveUppercase === true) {
    characterSet = characterSet.concat[upperCasedCharacters];
  }

  if (haveSpecialChar === true) {
    characterSet = characterSet.concat[specialCharacters];
  }

  if (haveNumbers === true) {
    characterSet = characterSet.concat[numericCharacters];
  }

  let passwordChar = "";
// for (var i = 0; i < passwordLength; i++) {
    // passwordChar += characterSet[Math.floor(Math.random() * characterSet.length)];
    
  // }

  for (var i = 0; i < passwordLength; i++) {
    getRandom(characterSet);
  }
 return passwordChar; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


