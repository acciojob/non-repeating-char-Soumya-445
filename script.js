function firstNonRepeatedChar(str) {
  if (!str || str.length === 0) return null;

  const freq = {};

  // Count frequency of characters
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Find first non-repeated character
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) {
      return str[i];
    }
  }

  return null;
}

// Input & Output
const input = prompt("Enter a string:");
const result = firstNonRepeatedChar(input);
alert(result);
