/*question no 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to
make one happen. Change an index in one of your programs to produce an index error. Make
sure you correct the error before closing the program. */




// Define an array
let numbers: number[] = [1, 2, 3, 4, 5];

// Try to access an element at an index that doesn't exist
console.log(numbers[10]); // This will produce an array index error

// To fix the error, we can either change the index or handle it gracefully with conditional logic
if (numbers.length > 10) {
    console.log(numbers[10]); 
} else {
    console.log("The index is out of bounds.");
}