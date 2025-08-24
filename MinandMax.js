// Given an array arr. Your task is to find the minimum and maximum elements in the array.

// Note: Return a Pair that contains two elements the first one will be a minimum element and the second will be a maximum.

// Examples:

// Input: arr[] = [3, 2, 1, 56, 10000, 167]
// Output: 1 10000
// Explanation: minimum and maximum elements of array are 1 and 10000.
// Input: arr[] = [1, 345, 234, 21, 56789]
// Output: 1 56789
// Explanation: minimum and maximum element of array are 1 and 56789.
// Input: arr[] = [56789]
// Output: 56789 56789
// Explanation: Since the array contains only one element so both min & max are same.

function find(arr)
{
    if(arr.length === 1) return [arr[0], arr[0]];

    let min = arr[0], max = arr[0];

    for(let i=1; i<arr.length; i++)
    {
        if(arr[i] > max ) max = arr[i];
        
        else if(arr[i] > min) min = arr[i];
    }
    return [min, max];
}

console.log(find([1,2,3,4,5,6,7]));
