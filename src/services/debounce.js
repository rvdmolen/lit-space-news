export const debounce = (mainFunction, delay) => {
  // Declare a variable called 'timer' to store the timer ID
  let timer;

  console.log(mainFunction);

  // Return an anonymous function that takes in any number of arguments
  return function (...args) {
    // Clear the previous timer to prevent the execution of 'mainFunction'
    clearTimeout(timer);

    // Set a new timer that will execute 'mainFunction' after the specified delay
    timer = setTimeout(() => {
      debounce(...args, delay);
      mainFunction(...args);
    }, delay);
  };
};

//
// export function debounce(func, delay) {
//   let timeoutId;
//
//   console.log(func);
//   console.log(delay);
//
//   return function (...args) {
//     clearTimeout(timeoutId);
//
//     timeoutId = setTimeout(() => {
//       debugger
//       func.apply(this, args);
//     }, delay);
//   };
// }
