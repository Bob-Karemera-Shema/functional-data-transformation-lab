function double(arr) {
    // if the argument is not an array or an empty array, return it
    if((!Array.isArray(arr)) || arr.length === 0) return arr;

    // use map() to iterate through each array number and multiply it by 2, and return the new array
    // check for non-number types to avoid edge cases
    return arr.map(number => typeof(number) === 'number' ? number * 2 : number);
}

function filterEven(arr) {
    // if the argument is not an array or an empty array, return it
    if((!Array.isArray(arr)) || arr.length === 0) return arr;

    // use filter() to iterate through the array and return an array with even numbers
    // check for non-number types to avoid edge cases
    return arr.filter(number => typeof(number) === 'number' && number % 2 === 0);
}

function sum(arr) {
    // if the argument is not an array or an empty array, return it
    if((!Array.isArray(arr)) || arr.length === 0) return arr;

    // use reduce() to iterate through the array numbers and return a sum
    // check for non-number types to avoid edge cases
    return arr.reduce((acc, number) => typeof(number) === 'number' ? acc += number : acc+= 0, 0);
}

console.log(filterEven([1, 'avd', 3]));