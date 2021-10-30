// *** TASK: find all occurances of selected item inside an array; ***
// var arr = [1,2,5,7,8,1,6,9,8,7,5,1,6,5,8,9,7,8];

// var func = (arr, item) => {
//   const positions = [];
//   function runSearch(arr, item, fromIndex = 0){
//     const index = arr.indexOf(item, fromIndex);
//     if (index >= 0){
//       positions.push(index);
//       if(index < arr.length - 1) runSearch(arr, item, index + 1);
//     }
//   }
//   runSearch(arr, item);
//   console.log('positions: ', positions);
//   return positions;
// }

// func(arr, 1);

// *** --- ***

// *** Debounce function Regular Version ***
// const myDebounce = (callback, delay) => {
//     let timerId;
//     function x(args){
//         clearTimeout(timerId);
//         timerId = setTimeout(() => callback(args), delay)
//     }
//     return x;
// };

// const y = myDebounce((args) => console.log(args), 2000);
