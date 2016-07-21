// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function LongestWord(sen) { 
  var isAlphaSpace = '';
  for(var i = 0; i < sen.length; i++){
    if(sen[i].charCodeAt() >= 65 && sen[i].charCodeAt() <= 90){
      isAlphaSpace += sen[i];
    }
    if(sen[i].charCodeAt() >= 97 && sen[i].charCodeAt() <= 122){
      isAlphaSpace += sen[i];
    }
    if(sen[i].charCodeAt() === 32) {
      isAlphaSpace += sen[i];
    }
  }
  var words = isAlphaSpace.split(' ');
  var longest = words[0];
  for(var i = 1; i < words.length; i++) {
    if(words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest; 
         
}

LongestWord('Argument goes here')