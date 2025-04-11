function double(arr) {
    // use map() to iterate through each array number and multiply it by 2
    // return the new array
    return arr.map(number => number * 2);
}

function filterEven(arr) {
    // use filter() to iterate through the array and return an array with even numbers
    return arr.filter(number => number % 2 === 0);
}

console.log(filterEven([1, 2, 3, 4, 5, 22, 13, 15]));