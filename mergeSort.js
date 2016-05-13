//Merge sort
//Take two sorted lists and return a sorted list,
//containing all the elements of the original two arrays

function mergeSort(arr1, arr2) {
  //sorted array that will be returned
  var sorted = [];
  //while our two input arrays have length, we still have values
  //to push to sorted
  while(arr1.length !== 0 || arr2.length !== 0) {
    //compare the two values at the beginnig of each array
    //since they are already sorted
    //we know the smallest values in each array are at index 0
    if(arr1[0] < arr2[0]) {
      //push to sorted
      sorted.push(arr1[0]);
      //remove value to aviod duplication
      arr1.shift();
    } else {
      sorted.push(arr2[0]);
      arr2.shift();
    }
  }
  //return sorted array
  return sorted;
}
