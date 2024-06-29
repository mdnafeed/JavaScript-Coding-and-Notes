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