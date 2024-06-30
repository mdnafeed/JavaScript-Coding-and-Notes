//Promises are a way to handle asynchronous operations in JavaScript

// https://github.com/mdnafeed/JavaScript-Coding-and-Notes/blob/main/JS-Topics/promise.js

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

// Promise is one of the way to handle asynchronous task in JavaScript

// Promise in JavaScript is an object that reprsent eventual completion or failure of an asynchronous operation and resulting its final value.

// Example 1

// const myPromise = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//        resolve('success');
//     }, 2000);

//     setTimeout(() => {
//         reject('rejected');
//     }, 3000);
// })
// console.log(myPromise);

// ----------------------------------------------------------------

// Example 2

// const myPromise = new Promise((resolve,reject) =>{
//     let randomNumber = Math.floor(Math.random() * 10);
//     if(randomNumber > 5){
//         resolve("Resolve");
//     }
//     else{
//         reject("Reject");
//     }
// });

// myPromise
//     .then((data)=>{
//         console.log("Updated",data)
//     })
//     .catch((error) => {
//         console.log(error)
//     }).
//     .finally(() => {
//     console.log("Finally block");
// });

// console.log(myPromise);

// -------------------------------------------------------------------

// example of promise using fetch

// let fetchPromise = fetch('https://jsonplaceholder.typicode.com/todos/1')
//                     .then((data)=>{
//                         let promise = data.json();
//                         return promise;
//                     })
//                     .then((data) => {
//                         console.log(data);
//                     })                
//                     .catch((error)=>{
//                         console.log(error)
//                     })
//                     .finally(()=>{
//                         console.log('Finally Block Will be execute');
//                     });

// console.log(fetchPromise);

// ----------------------------------------------------------------------

// example 3
/*
new Promise((resolve, reject) => {
    console.log("promise")
    try {
        throw new Error("Something is wrong!");
    }
    catch(e){
        console.log(e.message)
    }
}).catch((error) => console.log(error)); 
*/

// Example 4

// Handle Multiple Promises

// Promise.race, Promise.all, Promise.any, Promise.allSettled, Promise.any

// Promise.any

// CASE 1: This method takes an array of promises as input and returns a single promise that
// CASE 2: It will resolve if any of the promises in an array are resolved with the resolved value
// CASE 3: If all the promises are rejected. promise will be rejected with the error “AggregateError: All promises were rejected”.

var promise1 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
});

var promise2 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve('Promise 2 resolved'), 1000);
});

var promise3 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve('Promise 3 resolved'), 1000);
});

// const mergePromise = Promise.any([promise1,promise2,promise3])
//                     .then((data) =>{
//                         console.log(data)
//                     })
//                     .catch((error) =>{
//                         console.log(error)
//                     })
//                     .finally(() =>{
//                         console.log("Finally Block is be executed")
//                     })

// console.log(mergePromise)

// -------------------------------------------------------------------------------

// 2. Promise.all

// CASE 1. It is a static method 
// CASE 2. This method takes an array of promises as input and returns a single promise that
// CASE 3. resolves when all of the promises in the array have resolved, or rejects when any one of the promises rejects.

const allPromise = Promise.all([promise1,promise2,promise3])
                    .then((data)=>{
                        console.log(data);
                    }).
                    catch((error) =>{
                        console.log(error);
                    })
                    .finally(() =>{
                        console.log("Finally Block will be executed");
                    })