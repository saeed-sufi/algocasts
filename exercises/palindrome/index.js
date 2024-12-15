// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   const reversed = str.split('').reduce((reversed, char) => char + reversed, '')
  
//    return reversed === str
// }

function palindrome(str) {
  const strArr = str.split('')

  return strArr.every((char, idx, array) => {
    return char === strArr[strArr.length - 1 - idx]    
  })
}

module.exports = palindrome;
