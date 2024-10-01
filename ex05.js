// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

const countConsonants = (str) => {
    const vowels = ["a","e", "i", "o", "u"];
    let consonantCount = 0;

    for(let x = 0; x < str.length; x++) {
        const letter = str[x].toLowerCase();
        if(!vowels.includes(letter) && letter !== " " ) {
        consonantCount++;

        }

        
    }

return consonantCount;
}


console.log(countConsonants("hello world")); // Expected output: 7