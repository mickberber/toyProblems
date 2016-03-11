/*
  (Soltuion to a problem on Codeeval)
  given a string with numbers spelled out, return a number 
  .ex 'one;two;three;four;' would return 1234 
  only strings will be passed in, in the above format
*/

//create helper object to check numbers against words
var helperObject = {
  zero: 0, 
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

var numToString = function(str) {
  var arr = str.split(';');
  //remove empty value from arr
  arr.pop();
  //interate over the array, changing the values to numbers
  for(var i = 0; i < arr.length; i++){
    arr[i] = helperObject[arr[i]];
  }
  //rejoin the numbers to a string
  var numStr = arr2.join('');
  //return string, parsing it to an integerfirstReverse
  return parseInt(numStr);
}