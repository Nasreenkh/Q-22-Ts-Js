// Define an array
var numbers = [1, 2, 3, 4, 5];
// Try to access an element at an index that doesn't exist
console.log(numbers[10]); // This will produce an array index error
// To fix the error, we can either change the index or handle it gracefully with conditional logic
if (numbers.length > 10) {
    console.log(numbers[10]);
}
else {
    console.log("The index is out of bounds.");
}
