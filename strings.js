function capitalise(str) {
    //return the argument if it's not a string
    if(typeof(str) !== 'string') return str;

    // Capitalises the first letter of a string
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}

function reverse(str) {
    //return the argument if it's not a string
    if(typeof(str) !== 'string') return str;

    // Reverses a string
    let result = "";
    for(let i = str.length - 1; i > -1; i--) {
        result += str[i];
    }
    return result;
}

function isPalindrome(str) {
    //return the argument if it's not a string
    if(typeof(str) !== 'string') return str;

    // change string to lowercase and remove whitespaces to avoid edge cases
    str = str.toLowerCase().replaceAll(" ", "");

    // use two pointers left and right to compare characters from both ends
    let left = 0;
    let right = str.length - 1;

    while(left <= right) {
        if(str[left] !== str[right]) return false; // return false if a left character is not equal to a right character
        left += 1;
        right -= 1;
    }

    return true;
}

function wordFrequency(str) {    
    //return the argument if it's not a string
    if(typeof(str) !== 'string') return str;

    // remove punctuations from the string using replace() and regular expressions
    str = str.replace(/[\.,?!]/g, '');

    // array of all words in the string
    const words = str.split(" ");

    // frequency object to return
    const frequency = {};

    for(const word of words) {
        // check if the word already exists in the object
        // if yes, increment it
        // otherwise set it to 1
        frequency[word] = frequency[word] ? (frequency[word] + 1) : 1;
    }

    return frequency;
}

function snakeCase(str) {
    // if the argument is a number return the string version
    if(typeof(str) === "number") return str.toString();

    let result = "";
    for(const char of str) {
        // iterate through the string and change a character to lowercase if it is an uppercase character
        if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            // add an underscore before the character if it is not the first character in the result string
            result += result.length === 0 ? char.toLowerCase() : `_${char.toLowerCase()}`;
        } else {
            result += char;
        }
    }

    return result;
}

console.log(capitalise({}));