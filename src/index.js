function divides(num1, num2) {
  return num1 % num2 === 0;
}

// Convert the above function to arrow function
const dividers = (num1, num2) => num1 % num2 === 0;
console.log(dividers(10, 5));


// Write a function that converts Fahrenheit to Celsius
const convertFtoC = (fahrenheit) => (fahrenheit-32)/1.8;
console.log(convertFtoC(100));



// Convert the python function below to a javascript function

// def pairs_with_given_sum(numbers, target):
//     total = 0
//     for i in range(len(numbers)-1):
//         for j in range(i+1, len(numbers)):
//             if numbers[i]+numbers[j] == target:
//                 total += 1
//     return total

const pairs_with_given_sum = function(numbers, target){
  let total = 0;
  for(let i = 0; i <numbers.length-1; i++){
    for(let j = i+1; j <numbers.length; j++){
        if (numbers[i]+numbers[j] === target){
          total += 1;
        }
    }
  }
  return total;
}
console.log(pairs_with_given_sum([1, 2, 4], 3));


// Using the setInterval function (described below), register a callback function to be called every second.
// Consider printing some output so that you can see that the callback is running.
// setInterval is very similar to the setTimeout function described in Learn, taking the form
//
// setInterval(callBackFunction, intervalInMs)
//   callBackFunction is a reference to the function to be run periodically
//   intervalInMs is how much time should pass between calls to callBackFunction (in millisecond units)
//
// Check out the MDN documentation for setInterval (and setTimeout) for additional details

// add your call here
setInterval(() => {
  console.log("1 second passed");
}, 1000);
