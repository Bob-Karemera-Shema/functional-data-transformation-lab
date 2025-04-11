function isNotValid(arr) {
    // This functions checks the following:
    // 1. if the input is not an array
    // 2. if the input is an empty array
    // 3. if the input is an array that contains elements which are not numbers
    return (!Array.isArray(arr) || arr.length === 0 || arr.some(el => typeof el !== 'number'));
}

function double(arr) {
    // if input is not valid, return it
    if(isNotValid(arr)) return arr;

    // use map() to iterate through each array number and multiply it by 2, and return the new array
    // check for non-number types to avoid edge cases
    return arr.map(number => number * 2);
}

function filterEven(arr) {
    // if input is not valid, return it
    if(isNotValid(arr)) return arr;

    // use filter() to iterate through the array and return an array with even numbers
    // check for non-number types to avoid edge cases
    return arr.filter(number => number % 2 === 0);
}

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

function compose (...functions) {
    return function(input) {
        return functions.reduceRight((acc,fun) => fun(acc), input);
    }
}

// function to snakecase, reverse and capitalise a string
const capitaliseReverseSnakecase = compose(capitalise, reverse, snakeCase);

// function to double all the even numbers in an array
const doubleEven = compose(double, filterEven);

console.log(capitaliseReverseSnakecase('TestController'));
console.log(doubleEven([1,2,3,4]));