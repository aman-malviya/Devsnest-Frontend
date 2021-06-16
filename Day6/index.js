// Problem1

function is_array(input) {
    return Array.isArray(input);
}
console.log(is_array("Aman"));
console.log(is_array([1, 2, 3,4]));
console.log(is_array({ a: "Aman" }));

//   Problem2

function array_Clone(array) {
    // arrayCopy = array.slice();
    // arrayCopy = array.filter(() => true);
    // arrayCopy = array.map((x) => x);
    // arrayCopy = [...array];
    arrayCopy = array.concat();
    return arrayCopy;
}
console.log(array_Clone([1, 2, 3, 4]));
console.log(array_Clone([1, 2, [3, 4]]));
  

// Problem3
function first(arr, n) {
    if (!n) {
        return arr[0];
    }
    if (n < 0) {
        return [];
    }
    if (n > arr.length) {
        return arr;
    } else {
        return arr.slice(0, n);
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
  
// Problem4

function change(arr, symbol) {
return arr.join(symbol);
}
console.log(change(["Red", "Green", "White", "Black"], ","));
console.log(change(["Red", "Green", "White", "Black"], "+"));

// Problem5

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length - arr.filter(v => v===b).length
    ).pop();
}

console.log(mode([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));