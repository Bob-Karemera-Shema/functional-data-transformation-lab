function capitalise(str) {
    // Capitalises the first letter of a string
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}

function reverse(str) {
    // Reverses a string
    let result = "";
    for(let i = str.length - 1; i > -1; i--) {
        result += str[i];
    }
    return result;
}

function isPalindrome(str) {
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

console.log(wordFrequency('I love ice cream, pizza, and cookies! I also love cheesecake, and my dream is to go to cheesecake factory on day.'));