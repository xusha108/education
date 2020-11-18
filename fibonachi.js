// function fib(num) {
//   if (num < 2) {
//     return num;
//   } else {
//     return fib(num-1) + fib(num-2)
//   }
// }
// console.log( fib(6) )

function fib(num) {
  let a=1,
      b=1;
  for(let i=3; i<=num; i++) {
    let c=a+b;
        a=b;
        b=c;
  }
  return b
}
console.log( fib(10) )