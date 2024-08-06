function flatten (arr, depth = 1) {
    // The depth parameter in the flatten function controls how many levels of nested arrays should be flattened
    if(depth == 0){
        return arr;
    }
    
    // initiate the answer array
    const res = [];
    for(let i=0; i<arr.length; i++){
        
        //  check whether the array element is array or not, if not then add the element in the result array 
        if(!Array.isArray(arr[i])){
            res.push(arr[i]);
        } else {
            // need to call the recursive function with depth less than 1 amd then spread the array and add it to the result array
            let flattenedArray = flatten (arr[i], depth-1);
            res.push(...flattenedArray);
        }
    }
    // return the result array
    return res;
}

let ans = flatten([1, [2, [3, 4], 5], [6, 7], 8])
console.log(ans);
//  Output: [ 1, 2, [ 3, 4 ], 5, 6, 7, 8 ]
//  flattened the arr partially