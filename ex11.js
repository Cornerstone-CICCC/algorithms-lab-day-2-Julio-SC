// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.

const countWordOccurrences = (str, word) => {
    const words = str.split(" ");
    const matchingWords = words.filter(product => product === word);
    return matchingWords.length;
  };


console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2