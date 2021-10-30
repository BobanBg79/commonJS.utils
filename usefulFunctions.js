function triangleAreaCalc(a,b,c){
      var p = (a + b + c) / 2;
      var calc = p * (p - a) * (p - b) * (p - c);
      var area = Math.pow(calc, 0.5);
      return area;
}


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
