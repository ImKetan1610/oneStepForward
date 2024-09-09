function flattenWithPrefix(obj, prefix = "") {
  let result = {};

  for (let key in obj) {
    // Check if obj[key] is an object (and not null)
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      // Recursively flatten the object, appending the current key to the prefix
      Object.assign(result, flattenWithPrefix(obj[key], `${prefix}${key}.`));
    } else {
      // Assign the value with the full key path
      result[`${prefix}${key}`] = obj[key];
    }
  }

  return result;
}
let input = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

let flattened = flattenWithPrefix(input, "root.");
console.log(flattened);

/* Output:
  {
    'root.a': 1,
    'root.b.c': 2,
    'root.b.d.e': 3
  }
  */
