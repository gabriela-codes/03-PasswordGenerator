// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //Listing of every possible variable Characters
  //Variables are lowercase letters, uppercase letters, numbers, special characters 
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var characters = {
      numbers: ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'],
      lowercase: alphabet.split(''),
      uppercase: alphabet.toUpperCase().split(''),
      special: ['.','!']
  };

  var parameters = passwordParameters();
  console.log(parameters);
  var passwordCharacters = [];
  if (parameters.numbers) {
    passwordCharacters = passwordCharacters.concat(characters.numbers);
  }
  if (parameters.special) {
    passwordCharacters = passwordCharacters.concat(characters.special);
  }
  if (parameters.lower) {
    passwordCharacters = passwordCharacters.concat(characters.lowercase);
  }
  if (parameters.upper) {
    passwordCharacters = passwordCharacters.concat(characters.uppercase);
  }

  console.log(passwordCharacters);
  chosen = []
  for (var i = 0; i < parameters.passwordLength; i++) {
    chosen[i] = getRandom(passwordCharacters);
  }
  console.log(chosen);
  return chosen.join('');
}

function passwordParameters() {
  var passwordLength = parseInt(prompt("Enter number of characters for password"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }

  var numbers = confirm("OK for password to contain numbers");
  var special = confirm("OK for password to contain special characters");
  var lower = confirm("OK for password to contain lowercase characters");
  var upper = confirm("OK for password to contain uppercase characters"); 

  if (!numbers && !special && !lower && !upper) {
    alert("Password must have at least one character type");
    return;
  } else {
    return {
      passwordLength: passwordLength,
      numbers: numbers,
      special: special,
      lower: lower,
      upper: upper
    };
  }
}

function getRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
