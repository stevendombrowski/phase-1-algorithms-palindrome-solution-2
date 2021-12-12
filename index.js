function isPalindrome(word) {
  for(let i = 0; i <word.length / 2; i++){
    const j = word.length - 1 -i;
    if (word[i] !== word[j]) {
      return false;
    }
  }
  return true;
  // Write your algorithm here
}
// Need to make a function for isPalindrome that will return if a word is a palindrome through true or false 
// When the string the same forwards or backwards come back as true but false if it is not same forwards or backwards
// Test through the first letter being the same as the last letter and so on

/* 
  Add your pseudocode here
*/
// if the first letter is the same as the last and second letter is the same as the second to last. The function should return true.
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

  console.log("Expecting: true");
  console.log('=>', isPalindrome('mom'))
module.exports = isPalindrome;
