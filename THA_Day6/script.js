// Q1. Write a JavaScript function to check whether an `input` is an array or not?

function is_array(input) {
    return Array.isArray(input);
}

console.log("\nQ1 solution.");
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));


// Q2. Write a JavaScript function to clone an array

function array_Clone (inputArray) {
    return inputArray.slice();
}
console.log("\nQ2 solution.");
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


// Q3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function first(inputArray, n = 1) {
    return inputArray.slice(0,n);
}

console.log("\nQ3 solution.");
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));



// Q4. Write a simple JavaScript program to join all elements of the following array into a string

var myColor = ["Red", "Green", "White", "Black"];

function join_elements(arr, s) {
    return arr.join(s);
}
console.log("\nQ4 solution.");
let s = ",";
console.log(join_elements(myColor, s));
s = ", ";
console.log(join_elements(myColor, s));
s = "+";
console.log(join_elements(myColor, s));


// Q5.  Write a JavaScript program to find the most frequent item of an array

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var arr2 = [];
var freq = [];
arr1.sort();
console.log(arr1.join(" "));

arr2.push(arr1[0]);
let count = 1;
var m = 0;
for (let i = 1; i <= arr1.length; i++) {
    let prev = arr1[i - 1]
    if (prev !== arr1[i]) {
        arr2.push(arr1[i]);
        freq.push(count);
        
        if (m < count) {
            m = count;
        }
        count = 1;
    }
    else {
        count++;
    }
}



console.log("\nQ5 solution.");
console.log(arr2[freq.indexOf(m)] + "( " + m + "times )");