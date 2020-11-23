
//Listing of every possible variable Characters
//Variables are lowercase letters, uppercase letters, numbers, special characters 
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var characters = {
    numbers: ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'],
    lowercase: alphabet.split(''),
    uppercase: alphabet.toUpperCase().split(''),
    special: ['.','!']
};


//Password Question Prompts
//Length atleast 8 characters and at max 128 characters
//Must contain a special character, number, lowercase and uppercase letters

//Prompt Question for how many characters wanted
function getPassword(){
  console.log('working')
    var length= parseInt (
        prompt('How many characters would you like your password to have?')
    );
    if (isNaN (length)) {
        alert ('A number must be entered');
        return; 
    }
    if (length <8) 
        { alert('Password must be atleast 8 characters');
        return;
    }
    if (length >128)
        { alert (' Password must be less than 128 characters');
        return;
    }
    

  //Question Prompts on included characters needed 
  var hasLowercaseCharacters = shouldIncludeCharacters('lowercase');
  var hasUppercaseCharacters = shouldIncludeCharacters('uppercase');
  var hasSpecialCharacters = shouldIncludeCharacters('special');
  var hasNumberCharacters = shouldIncludeCharacters('number');

  //If statements on characters
  if (
      !hasNumberCharacters &&
      !hasLowercaseCharacters &&
      !hasUppercaseCharacters &&
      !hasSpecialCharacters
    ) 
    { alert('Must have at least one character type');
      return;
    }

  //Storing user password options
    var passwordOptions = {
      length: length,
      hasNumberCharacters: hasNumberCharacters,
      hasLowercaseCharacters: hasLowercaseCharacters,
      hasUppercaseCharacters: hasUppercaseCharacters,
      hasSpecialCharacters: hasSpecialCharacters
    };
    return passwordOptions;
}

  //Confirm Yes to characters
  function shouldIncludeCharacters(type) {
    return confirm ('Click YES to have ' + type + 'characters.');
  }

  //Fetching a Random character from the array
  //random variable is var rand
  fucntion getRandom(array) {
    var item = items[Math.floor(Math.random() * items.length)];
  }


  //Prompts for adding in other user characters
  function generatePassword(){
    var options = getPasswordOptions(); 
    var 
    var guaranteedCharacters = [];
    var results = [];
  function addCharacters(characterType) {
    guaranteedCharacters.push(getRandom(characterType));
  }

  //If statements to include all other characters
  if options.hasNumberCharacters) {
    addCharacters(characters.numeric);
  }
  if (options.hasLowercaseCharacters) {
    addCharacters(characters.lowercase);
  }
  if (options.hasUppercaseCharacters) {
    addCharacters(characters.uppercase);
  }
  if (options.hasSpecialCharacters) {
    addCharacters(characters.special);
  }



//Given Code from Develop
// Assignment Code
var generate= document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generate.addEventListener("click", writePassword);
