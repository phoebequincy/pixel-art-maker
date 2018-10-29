for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log('value of i after "let" loop', i);


for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log('value of i after "var" loop', i);


// let x = 1
// function foo() {
//   let y = 2
//   console.log('in foo(), x is', x);
//   console.log('in foo(), y is', y);
//   return function bar() {
//     let z = 3
//     console.log('in bar(), x is', x);
//     console.log('in bar(), y is', y);
//     console.log('in bar(), z is', z);
//   }
// }
//
// let innerFunc = foo()
//
// // then we call that inner func
// innerFunc()
