function fullName(person) {
    // check if the input is not null and check if the properties exist
    // if not, return the input
    if(!person || !person.firstName || ! person.lastName) return 'invalid input or missing object properties';

    return `${person.firstName} ${person.lastName}`;
}

console.log(fullName({firstName: 'Bob', lastName: 'Karemera'}));