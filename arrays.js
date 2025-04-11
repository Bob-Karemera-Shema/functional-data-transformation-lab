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

function sum(arr) {
    // if input is not valid, return it
    if(isNotValid(arr)) return arr;

    // use reduce() to iterate through the array numbers and return a sum
    // check for non-number types to avoid edge cases
    return arr.reduce((acc, number) => acc += number, 0);
}

function average(arr) {
    // if input is not valid, return it
    if(isNotValid(arr)) return arr;

    // get the sum of all elements
    const arraySum = sum(arr);

    return arraySum/arr.length;
}

function deleteNth(arr, n) {
    // if input is not valid, return it
    if(isNotValid(arr)) return arr;

    let filtered = [];
    let counts = {}; //counts object to store number frequency

    for(const number of arr) {
        counts[number] = counts[number] ? counts[number] + 1 : 1;

        // if the number has appeared n or less times in the input
        if(counts[number] <= n) filtered.push(number);
    }

    return filtered;
}

console.log(deleteNth([20,37,20,21], 1));
console.log(deleteNth([1,2,3,1,2,1,2,3], 2));
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));
console.log(deleteNth([12,39,19,39,39,19,12], 1));