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

function filterByAge(people, minAge) {
    // check for edge cases
    if((!Array.isArray(people)) || minAge === undefined || typeof(minAge) !== 'number') return 'invalid inputs or missing arguments';

    return people.filter(person => person.age >= minAge);
}