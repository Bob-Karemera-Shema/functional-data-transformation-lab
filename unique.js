function uniqueElements(arr1, arr2) {
    //check for valid arrays
    if((!Array.isArray(arr1)) || (!Array.isArray(arr2))) return 'invalid or missing inputs';
    
    //combine both arrays and create a Set with unique elements
    const combined = new Set([...arr1, ...arr2]);

    return [...combined];
}

console.log(uniqueElements([1, 2, 3, 3], [3, 4, 5]));
// Expected output: [1, 2, 3, 4, 5]