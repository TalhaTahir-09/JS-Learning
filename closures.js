message = "Hello Global";
function hello1() {
  //  let message = "Hello Local"
  console.log("This is a : " + message);
}
// hello1()

function init() {
  let Name = "Talha";
  function displayName() {
    return Name;
  }
  return displayName;
}
let c = init();
console.log(c());

// var createCounter = (n) => {
//   return function () {
//     console.log(n++);
//   };
// };
// let counter = createCounter(10);
var createCounter = function (init, operatorValue, orignalvalue) {
  return {
    increment: function increment() {
      if (isNaN(operatorValue)) {
        console.log(operatorValue = init + 1);
      } else {
        console.log(++operatorValue);
      }
    }, decrement: function decrement() {
      if (isNaN(operatorValue)) {
        console.log(operatorValue = init - 1);
      } else {
        console.log(--operatorValue);
      }
    }, reset : function reset(){
      operatorValue = init;
      console.log(operatorValue);
    },
  };
};
const counter = createCounter(10);
counter.increment();
counter.increment();
counter.increment();
counter.reset();
counter.decrement();
counter.decrement();
counter.decrement();
