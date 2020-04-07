let numberOfVowels = function(data) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  data = data.toLowerCase();
  for (const letter of data) {
    for (const vowel of vowels) {
      if (letter === vowel) {
        count++;
      }
    }
  }
  return count;
};

console.log(numberOfVowels("Orange peel delight"));
console.log(numberOfVowels("Lighthouse Labs"));
console.log(numberOfVowels("aEiOu"));