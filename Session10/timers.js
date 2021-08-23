//setTimeout function
// Its used to delay excution of a function

let fullname = (fname, lname) =>  console.log (fname + lname) 
setTimeout(fullname, 2000,"Abudi", " mutamaba")

//Returns the timer id and clear if you want to delete this scheduled function execution.
// const id = setTimeout(() =>{
//     console.log("hello")
// },2000)

// clearTimeout(id)

//Zero delay
//Here the callback function will be executed as soon as possible, but after the current function execution.
//This is especially useful to avoid blocking the CPU on intensive tasks and let other functions be executed while performing a heavy calculation, by queuing functions in the scheduler
// setTimeout(() =>{
//     console.log("after")
// },0)
// console.log("before")

//setInterval()
//It runs at the specfic time interval you specify(in milliseconds)
// setInterval(() => {
//     console.log("hello")
// }, 1000);

// const ids = setInterval(() => {
//     console.log("hello")
// }, 1000);
// clearInterval(ids);

//code runs something unless App.somethingIWait has the value arrived
// const interval = setInterval(() => {
//     if( App.somethingIWait === 'arrived'){
//         clearInterval(interval)
//         return
//     }
//     console.log('Thank you')
// }, 1000);

//Recursive setTimeout
//schedule a recursive setTimeout to be called when the callback function finishes
// const myFunction = () => {
//     console.log("Abudi")
  
//     setTimeout(myFunction, 1000)
//   }
  
//   setTimeout(myFunction, 1000)
  


setTimeout (() => {
  //runs after 2 seconds
  console.log("Ran after 2 seconds")
},2000)

setTimeout (() => {
  //runs after 50 milliseconds
  console.log("Ran after 2 seconds")
},500)