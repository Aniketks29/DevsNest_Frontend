// Q1. Write a JavaScript program to list the properties of a JavaScript object. 
// Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};

Object.keys(student).forEach((item) => {console.log(item);} );

// Write a JavaScript program to delete the rollno property from the following object. 
// Also print the object before or after deleting the property. 
// Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

console.log("\nBefore deleting the property: ", student);

delete student.rollno;
console.log("After deleting the property: ", student);

// Write a JavaScript program to get the length of a JavaScript object.  
// Sample object : 
var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log();
console.log(Object.keys(student).length);


// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. 
var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
]; 
console.log();
library.forEach( (obj) => {
    console.log("Book Name: "+ obj.title);
    console.log("Author Name: " + obj.author);
    console.log("Reading Status: " + obj.readingStatus);
    console.log();
});


// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. 
// Try To Attempt : Difficult Level Increased 

const Cylinder = class {
    constructor(r, h) {
        this.radius = r;
        this.height = h;
        this.Volume =  (Math.PI*this.height*(this.radius ** 2)).toFixed(4);
        
    }
    
    
}

let newCylinder = new Cylinder(3, 4);
console.log();
console.log(newCylinder.Volume);


// Write a JavaScript program to sort an array of JavaScript objects. 
// Sample Object :
var library = [
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
]; 

// Expected Output: 
// [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, 
// [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, 
// [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

let LibID = [];
library.forEach(
    (obj) => {
        LibID.push(obj.libraryID);
    }
)

LibID.sort((a, b) => b - a);
// console.log(LibID);
var sortedLib = [];
for (ID of LibID) {
    // console.log(ID);
    library.forEach((obj) => {
        if (ID === obj.libraryID) {
            sortedLib.push(obj);
        }
    });
}
console.log();
console.log(sortedLib);