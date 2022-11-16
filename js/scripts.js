const startArray = "4102080860435620".split("");

let evenArray = [];
let oddArray = [];

function splitArray(array) {
  for(i = 1; i < 15; i + 2) {
    evenArray.push(array[i]);
  }
  for(i = 0; i < 15; i + 2) {
    oddArray.push(array[i]);
  }
};


