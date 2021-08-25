/**
 * Promises are alternatives to callback 
 * Because callbacks can make code look complicated hence had to maintain
 * There are 2 parts to them.
 * 1. Definition of the promise
 * 2. Usage of the promise/consuming
 */

/**
 * How to use Promises
 * @constructor
 * @param{string} Done
 * @param{sring} IS_IT_DONE
 */

 const DONE = false
//const DONE = true
// Definitation of the promise
const IS_IT_DONE =  new Promise((resolve, reject) => {
    const SUCCESS = 'Promise resolved'
    if (DONE) {
        resolve(SUCCESS) //Was passed as an argument to the constructor
    }
    else{
        const FAILURE = "Promise failed";
        reject(FAILURE); //Was passed as an argument to the constructor
    }
})

//Usage
const CHECK_IF_DONE = () => {
    IS_IT_DONE
    .then(result => console.log(result))
    .catch(error => console.log(error))
}
//Invoke the checker
CHECK_IF_DONE()