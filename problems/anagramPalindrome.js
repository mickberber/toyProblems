/*
An anagram is a word that can be rearragnged to make another word
ex: 'cato' is an angram of 'taco'
A palindrome is a word that is the same forward and backwards
ex: 'tacocat', 'eevee'


This algorithm relys on the fact that a palindrome cannot be created if more than one letter occurs an odd number of times

We will count the letters
and check for this

If there are 0 || 1 instances of odd occuring letters
return true because a palindrome can be created

Otherwise we will return false

*/

module.exports = anagramPalindrome;

function anagramPalindrome(word) {
  //keep count of all letters in word in an object
  var letterCounts = {};
  //iterate over input word
  for(var i = 0; i < word.length; i++) {
    //set key to itself if defined OR create new key in letterCounts object
    letterCounts[word[i]] = letterCounts[word[i]] || 0;
    //increment count
    letterCounts[word[i]]++;
  }
  //create variable to count letterCounts that are Odd
  var oddAmounts = 0;
  //iterate over letterCounts
  for(var letter in letterCounts) {
    //if count of specific letter isnt divisble by 2
    if(letterCounts[letter] % 2 !== 0) {
      //increment oddAmounts and check if it has been incremented more than once
      oddAmounts++;
      if(oddAmounts > 1) {
        return false;
      }
    }
  }
  return true;
}
