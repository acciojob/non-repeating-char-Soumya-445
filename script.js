function firstNonRepeatedChar(str) {
 // Write your code here
	function firstNonRepeatedChar(str) {
  if (!str) return null;

  const freq = {};

  // Count frequency of each character
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Find first non-repeated character
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
