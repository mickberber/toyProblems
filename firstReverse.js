/* given a string, return a new string
   with the characters in reverse order  */

function FirstReverse(str) { 
	//create new string
  var reversed = '';
  //iterate from the end of the original string
  for(var i = str.length - 1; i >= 0; i--) {
  	//add characters
    reversed += str[i];
  }
  //return reversed string 
  return reversed; 
         
}