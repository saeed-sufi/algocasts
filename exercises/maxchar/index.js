// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {}
  const strArr = str.split('')

  for (const key of strArr) {
    /* if (key in obj) {
      obj[key]++
    } else {
      obj[key] = 1
    } */
    // obj[key] = obj[key] + 1 || 1;
    obj[key] = obj[key] ? obj[key] + 1 : 1
  }
  let max; 
  for (const prop in obj) {
    max = obj[prop]
    break
  }

  let key;
  for (const prop in obj) {
    if (obj[prop] >= max) {
      max = obj[prop]
      key = prop
    }
  }
  return key; 
}
console.log(maxChar('apple 121111111 aaaaaaaaa'))
console.log(maxChar('abcdefghijklmnaaaaa'))

module.exports = maxChar;
