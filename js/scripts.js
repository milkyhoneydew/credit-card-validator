let evenArray = [];
let oddArray = [];
function separateArray() {
  let startArray = "4102080860435620".split("");
  startArray.forEach(function(element, i) {
    if(i % 2 === 0) {
      evenArray.push(element);
    }
    else {
      oddArray.push(element);
    }
  });
};
let doubleEvens = [];
function doubleEvenArray() {
  evenArray.forEach(function(element, i) {
    let doubledElements = element * 2;
    doubleEvens.push(doubledElements);
  });
};

let addUpElements() {
  doubleEvens.forEach(function(element, i) {
    let numberTotal = 0;
    if (element.length === 2) {
      let doubleDigit = element.split("");
      doubleDigit.forEach(function(element) {
        numberTotal = (numberTotal + element);
      })
      console.log("double digit works");
    } 
    else {
      console.log("didn't work")
    }
  });
}

// let startArray = "4102080860435620".split("");
// let arrayMap1 = startArray.map(
//   for(i = 0; i < startArray.length; i++) {
//     if(i % 2 === 0){
      
//     } if ((i + 1) % 2 === 0) {

//     } else {
//       return "broken";
//     }
//   }
// )

// for(i = 1; i < 15; i + 2) {
//   evenArray.push(startArray[i]);
// }
// for(i = 0; i < 15; i + 2) {
//   oddArray.push(startArray[i]);
// }
// return evenArray;

// VAR = "4102080860435620";
// let newArray = [];
// function splitArray(VAR) {
//   newArray = VAR.split("");
// }


// function splitArray(number) {
//   let newArray = number.split("");
  

// let evenArray = [];
// let oddArray = [];

// function separateArray(number) {
//   let array = splitArray(number);
//   for(i = 1; i < 15; i + 2) {
//     evenArray.push(array[i]);
//   }
//   for(i = 0; i < 15; i + 2) {
//     oddArray.push(array[i]);
//   }
// };


