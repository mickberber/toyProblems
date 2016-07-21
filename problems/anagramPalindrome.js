/*
An anagram is a word that can be rearragnged to make another word
ex: 'cato' is an angram of 'taco'
A palindrome is a word that is the same forward and backwards
ex: 'tacocat', 'eevee'
*/

module.exports = anagramPalindrome;

function anagramPalindrome(word) {
  var letterCounts = {};
  for(var i = 0; i < word.length; i++) {
    letterCounts[word[i]] = letterCounts[word[i]] || 0;
    letterCounts[word[i]]++;
  }

  var oddAmounts = 0;
  for(var letter in letterCounts) {
    if(letterCounts[letter] % 2 !== 0) {
      oddAmounts++;
      if(oddAmounts > 1) {
        console.log(letterCounts)
        console.log(oddAmounts)
        return false;
      }
    }
  }
  return true;
}
