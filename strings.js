function capitalise(str) {
    // Capitalises the first letter of a string
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise('hello'));