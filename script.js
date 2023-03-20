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
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// Function to prompt user for password options

var haveUppercase;
var haveLowercase;
var haveNumbers;
var haveSpecialChar;
var passwordLength = ""; //variable for password length

let characterSet = []; // array to hold possible password characters

function generatePassword() {

  var passwordLength = (prompt("How long would you like your password to be?"));
  
  while (passwordLength < 10 || passwordLength > 64) {
    alert("It should be at least 10 characters and less than 64 characters.");
    var passwordLength = (prompt("How long would you like your password to be?"));
  } 
  alert("Your password will be " + passwordLength + " characters long.");

  var haveUppercase = confirm("Do you want uppercase letters?");

  var haveLowercase = confirm("Do you want lowercase letters?");

  var haveNumbers = confirm("Do you want to include numbers?"); 

  var haveSpecialChar = confirm("Do you want to include special characters?");


  if (haveUppercase + haveLowercase + haveNumbers + haveSpecialChar === 0) {
    alert('Please select at least one');
    var haveUppercase = confirm("Do you want uppercase letters?");

    var haveLowercase = confirm("Do you want lowercase letters?");
  
    var haveNumbers = confirm("Do you want to include numbers?"); 
  
    var haveSpecialChar = confirm("Do you want to include special characters?");
  }

  

  if (haveLowercase) {
    characterSet = characterSet.concat(lowerCasedCharacters); // if user has selected lowercase this adds the lowercase characters to characterSet array.
  }

  if (haveUppercase) {
    characterSet = characterSet.concat(upperCasedCharacters); // if user has selected uppercase this adds the uppercase characters to characterSet array.
  }

  if (haveSpecialChar) {
    characterSet = characterSet.concat(specialCharacters); // if user has selected special characters this adds the special characters to characterSet array.
  }

  if (haveNumbers) {
    characterSet = characterSet.concat(numericCharacters); // if user has selected numbers this adds the numerical characters to characterSet array.
  }

  console.log(characterSet);

  //return characterSet;

   let passwordChar = ""

     for (var i = 0; i < passwordLength; i++) {
     passwordChar = passwordChar + characterSet[Math.floor(Math.random() * characterSet.length)];
  
     console.log(passwordChar);
 }
 return passwordChar;
  
};

// Write password to the #password input
function writePassword() {
     var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
};
