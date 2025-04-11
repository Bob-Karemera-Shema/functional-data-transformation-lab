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