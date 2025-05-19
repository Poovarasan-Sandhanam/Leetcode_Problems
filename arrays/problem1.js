function map(arr, fn) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }

    return result;
}

// Example usage
const arr = [1, 2, 3];
const fn = (val, idx) => val + idx;

const output = map(arr, fn);
console.log(output); // <-- This prints the result to the terminal
