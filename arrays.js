function isNotValid(arr) {
    // This functions checks the following:
    // 1. if the argument is not an array
    // 2. if the argument is an empty array
    // 3. if the argument is an array that contains elements which are not numbers
    return (!Array.isArray(arr) || arr.length === 0 || arr.some(el => typeof el !== 'number'));
}

function double(arr) {
    // if argument is not valid, return it
    if(isNotValid(arr)) return arr;

    // use map() to iterate through each array number and multiply it by 2, and return the new array
    // check for non-number types to avoid edge cases
    return arr.map(number => number * 2);
}

function filterEven(arr) {
    // if argument is not valid, return it
    if(isNotValid(arr)) return arr;

    // use filter() to iterate through the array and return an array with even numbers
    // check for non-number types to avoid edge cases
    return arr.filter(number => number % 2 === 0);
}

function sum(arr) {
    // if argument is not valid, return it
    if(isNotValid(arr)) return arr;

    // use reduce() to iterate through the array numbers and return a sum
    // check for non-number types to avoid edge cases
    return arr.reduce((acc, number) => acc += number, 0);
}

function average(arr) {
    // if argument is not valid, return it
    if(isNotValid(arr)) return arr;

    // get the sum of all elements
    const arraySum = sum(arr);

    return arraySum/arr.length;
}

console.log(average([1, 2, 3]));