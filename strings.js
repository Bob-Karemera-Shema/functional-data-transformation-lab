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

    let left = 0;
    let right = str.length - 1;

    while(left <= right) {
        if(str[left] !== str[right]) return false;
        left += 1;
        right -= 1;
    }

    return true;
}