function sqlJoin (arr1, arr2) {    
    //check for valid arrays
    if((!Array.isArray(arr1)) || (!Array.isArray(arr2))) return 'invalid or missing inputs';

    let result = [];

    for(const obj1 of arr1) {
        for(const obj2 of arr2) {
            //get the common property between the two objects
            const sharedProperty = Object.keys(obj1).find(property => property in obj2)

            //if the shared property exists and has the same value in both objects, then add the objects to the result array
            if(sharedProperty !== undefined && obj1[sharedProperty] === obj2[sharedProperty]) {
                result.push({...obj1, ...obj2});
            }
        }
    }

    return result;
}

const employees = [
    { id: 1, name: 'John', department: 'IT' },
    { id: 2, name: 'Jane', department: 'HR' },
    { id: 3, name: 'Doe', department: 'IT' }
];
const salaries = [
    { id: 1, salary: 50000 },
    { id: 2, salary: 60000 },
    { id: 4, salary: 55000 }
];

const result = sqlJoin(employees, salaries);
console.log(result);
// Expected output: [
//   { id: 1, name: 'John', department: 'IT', salary: 50000 },
//   { id: 2, name: 'Jane', department: 'HR', salary: 60000 }
// ]