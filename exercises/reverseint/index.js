// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  
  const str = n.toString()
  let strArr = str.split('')

  const newArr = []
  for (let i of strArr) {
    if (i !== "-" & i !== "+") {
      newArr.push(i)      
    }
  }
  
  return newArr.reverse().join('');
}

console.log(reverseInt(-132))

module.exports = reverseInt;
