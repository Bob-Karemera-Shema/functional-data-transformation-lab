function fullName(person) {
    // check if the input is not null and check if the properties exist
    // if not, return error message
    if(!person || !person.firstName || ! person.lastName) return 'invalid input or missing object properties';

    // return the full name string
    return `${person.firstName} ${person.lastName}`;
}

function isAdult(person) {
    // check if the input is not null and check if the age property exist
    // if not, return error message
    if(!person || !person.age) return 'invalid input or missing object properties';

    return person.age >= 18;
}

console.log(isAdult());