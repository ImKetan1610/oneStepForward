function flatten (input) {
    // create a new object for answer
    let result = {};
    
    // Iterate over each keys of the 'object'
    for(let key in input){
        // typeof input[key] = null is an object;
        if(typeof(input[key])=='object' && input[key]!=null){
            // merge the flattened the properties into result
            result = {...result, ...flatten(input[key])}
        } else {
            result[key] = input[key];
        }
    }
    // return the answer
    return result;
}

const nestedObject = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "Anytown",
        location: {
            lat: 40.7128,
            lng: -74.0060
        }
    },
    contact: {
        phone: "555-5555",
        email: "john@example.com"
    }
};

console.log(flatten(nestedObject));