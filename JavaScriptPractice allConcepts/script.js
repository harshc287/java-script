//reverse words Assigment-1
str = "Hello World From Wisdom Sprouts IT Training Hub" 

function reverseString(sentance){
 const string= sentance.split(" ")
    
    reverseWords = string.map(word => word.split("").reverse().join(""))

    return reverseWords.join(" ")
}

console.log(reverseString(str))

console.log("============================================================")

//Assigment-2
//Write a function that takes a paragraph of text, normalizes it to lowercase, strips out all punctuation,
//splits it into words, and returns an object where each distinct word maps to the number of times it appears

str ="Learning JavaScript is fun! Fun and easy to learn JavaScript."

function wordCount(paragraph){
   
    const normalizes = paragraph.toLowerCase().replace(/[.,!?;:]/g, '')
    const words = normalizes.split(/\s+/); 

const count = {}
    words.forEach(w => {
        if(w){
            count[w] = (count[w] || 0) + 1
        }
    });
    return count
}
console.log(wordCount(str))

console.log("============================================================")

//Assigment-3
//Create a function that receives an array of user objects, each having a name and age property
//The function should return only those users whose age is strictly greater than 18.

users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 }
]

function checkAge(users){
    return users.filter( user => user.age > 18)
}
console.log(checkAge(users))

console.log("============================================================")

//Assigment-4
// Create a function that takes an array of product objects where each 
// product has a name and price. Sort the products in ascending order based on price.

products = 
[
  { name: "Keyboard", price: 499 },
  { name: "Monitor", price: 8999 },
  { name: "Mouse", price: 299 }
]

function sortProductByPrice(productArr){
    return productArr.sort((a , b) => a.price - b.price)
}
console.log(sortProductByPrice(products))

console.log("============================================================")

//Assigment-5
// Create a function that takes a string (e.g., a blog title) and converts
//  it into a URL-friendly slug by:


blogTitle = "Learn JavaScript in 30 Days!"

function generateSlug(title){
    return title 
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}
console.log(generateSlug(blogTitle));

console.log("============================================================")
//Assigment-6
// Given an array of words, return an object that groups them by their 
// length. The keys should be numbers (word lengths), and the values 
// should be arrays of words that have that length.


words = ["dog", "apple", "sun", "table", "cat", "pie"]

function groupByLength(words){
    return words.reduce((acc,word)=> {
        const length = word.length;
        (acc[length] = acc[length] || []).push(word)
        return acc
        
    }, {})
    
}
console.log(groupByLength(words))

console.log("============================================================")

//Assigment-7
// Create a debounce utility function that takes another function and a delay time (in ms). 
// It should delay the execution until the function stops being called for a specified amount of time.
// Common use case: waiting for the user to stop typing before searching.

function debounce(func, delay){
    let timeoutId;
    return function (...args){
        if(timeoutId){
            clearTimeout(timeoutId)
        }
            timeoutId = setTimeout(() => {
                func.apply(this, args)
            }),delay
    }

}
// const searchInput = document.getElementById("search");
// searchInput.addEventListener("input", debounce(() => {
//   console.log("Search triggered!");
// }, 300));


console.log("============================================================")
//Assignment 8
// Write a function that takes a JavaScript object and returns a deep copy, 
// meaning all nested objects or arrays are also cloned, not just copied by reference.

function deepCopy(value){
      if (value === null || typeof value !== "object") {
            return value; // primitive value direct return
      }
      if (Array.isArray(value)) {
            return value.map(item => deepCopy(item)); // array ke liye
      }
        let copy = {};
        for (let key in value) {
                if (value.hasOwnProperty(key)) {
                     copy[key] = deepCopy(value[key]); // object ke liye

                }
        }
        return copy;
}
// Example use
let original = { name: "Alice", scores: [10, 20], address: { city: "NY" } };
let clone = deepCopy(original);

clone.scores.push(30);
clone.address.city = "LA";

console.log(original); // unchanged
console.log(clone);    // independent copy

// Assignment 9
// Simulate three asynchronous tasks (A, B, C), each with a random delay between 0.5 to 2 seconds. 
// Use async/await to ensure they run one after another, not in parallel. After all tasks complete, log "All tasks completed".


function randomDelay() {
    return Math.floor(Math.random() * 1500) + 500; // Random delay between 500ms to 2000ms
}
function task(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Task ${name} completed`);
            resolve();
        }, randomDelay());
    });
}
async function runTasksSequentially() {
    await task('A');
    await task('B');
    await task('C');
    console.log("All tasks completed");
}
runTasksSequentially();


// Assignment 10
// Create a simple calculator function that evaluates basic math expressions given as strings. It should support +, -, *, and /, and handle operator precedence correctly (i.e., * and / before + and -).


expression = "3 + 5 * 2 - 4 / 2"
function evaluateExpression(expr) {
    try {
        // Use Function constructor to evaluate the expression safely
        const func = new Function(`return ${expr}`);
        return func();
    } catch (error) {
        console.error("Invalid expression:", error);
        return null;
    } 
}
console.log(evaluateExpression(expression)); 