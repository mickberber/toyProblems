var tests = require('mc-testing');
var write = tests.write;

var anagramPalindrome = require('../problems/anagramPalindrome.js');

module.exports = write.testFile(
  write.description('anagramPalindrome should return true when passed a string that can be a re-aranged to a palindrome')(tests.compareYield(anagramPalindrome('tacocat'), true))
);
