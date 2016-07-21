var tests = require('mc-testing');
var write = tests.write;

var anagramPalindrome = require('./test/anagramPalindrome.js');

var test = [
  anagramPalindrome
];

write.masterTestFile(test);
