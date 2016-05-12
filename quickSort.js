//Quick Sort.
//A recursive sorting algorithm with the time complexity of
//O(log n)
//This algorithm sorts collections by value
//The quick sort picks a pivot point, a random index on which it sorts larger and smaller values around it
//With the knowledge that the pivot point has sorted the sets of larger and smaller values into seperate groups
//It allows us to sort those groups without the need to iterate through the entire collection again
//Resulting in a much faster sort
//The performance of this sort compared to others can be seen
//here: https://www.youtube.com/watch?v=vxENKlcs2Tw

function quickSort(arr) {
  //base case
  //if the array quickSort is examining is empty
  //return an empty array for concatenation later
  if(arr.length === 0) {
    return [];
  }
  //init less and greater arrays for sorting
  var less = [];
  var greater = [];
  //since the pivot is random, we can start at index 0
  //without any ill effect
  var pivot = arr[0];
  //iterate through array starting at index 1, as to not
  //accidentally push arr[0] twice
  for(var i = 1; i < arr.length; i++){
    //compare values and push accordingly
    if(arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  //this return statement will start our recursion
  //sorting values on the new semi-sorted arrays we created
  //recursing until the base case above is reached
  //in the end, all the smaller arrays that will result from
  //this call will be concatenated, resulting in a sorted
  //version of our original array
  return quickSort(less).concat(pivot, quickSort(greater));
};
