/* Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. */

function FirstFactorial(num) { 
  var total = num;
  // code goes here
  while(num > 0) {
    if(num === 1) {
      return total;
    }
    var tempNum = num - 1;
    total = total * tempNum;
    num = tempNum;
  }
         
}
   