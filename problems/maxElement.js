// Input Format
// The first line of input contains an integer, NN. The next NN lines each contain an above mentioned query. (It is guaranteed that each query is valid.)
// Sample Input
// 10
// 1 97
// 2
// 1 20
// 2
// 1 26
// 1 20
// 2
// 3
// 1 91
// 3
// Output Format
// For each type 3 query, print the maximum element in the stack on a new line.
// Sample Output
// 26
// 91

//each element in the passed in array is a string
function printMaxElement(arr) {
    var stack = [];
    for(var i = 0; i < arr.length; i++){
        var current = arr[i].split(' ');
        if(current[0] === '1') {
            stack.push(current[1]);
        }
        if(current[0] === '2') {
            stack.pop();
        }
        if(current[0] === '3') {
            console.log(stack[stack.length - 1]);
        }
    }
    
} 
