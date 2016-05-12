//a very slow, yet simple sorting algorythm

//take an array of values and return a new array
//sorted smallest values to largest values

function bubbleSort(arr) {
  //iterate through arr, usiing i to keep count of
  //how many values have been sorted
  for(var i = 0; i < arr.length; i++) {
    //iterate through arr finding the largest value
    //placing it at the end of non sorted portion of
    //the array
    for(var j = 0; j < (arr.length - 1 - i); j++) {
      //compare values and switch them if the greater index is a
      //smaller value
      if(arr[j] > arr[j + 1]) {
        //create temporary variable
        var temp = arr[j];
        //overwrite smaller index
        arr[j] = arr[j + 1];
        //overwrite previously moved index with temp variable
        arr[j + 1] = temp;
      }
    }
  }
  //return sorted array
  return arr;
}
