// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

const findMissingNumber = (arr) => {
    const num = arr.length + 1; 
    const expectedSum = (num * (num + 1)) / 2;
    let currentSum = 0;
    
    for(let x = 0; x < arr.length; x++ ) {
        currentSum += arr[x]
    }

const missingNumber = expectedSum - currentSum;
return missingNumber

}


console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3


