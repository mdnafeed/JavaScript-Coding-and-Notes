//Promises are a way to handle asynchronous operations in JavaScript

// Advantages of Promises

// 1. Improved Readability
// 2. Avoid Callback Hell
// 3. Error Handling
// 4. Chaining
// 5. Composability
// 6. Standardization

// Disadvantages of Promises

// 1. Complexity in Simple Use Cases
// 2. Error Handling Can Be Tricky
// 3. Learning Curve
// 4. Potential for Silent Failures
// 5. Backwards Compatibility
// 6. Performance Overhead

let promise = new Promise((resolve,reject)=>{
    resolve('Resolve');
});

console.log(promise);