Describe: function splitArray();

Test: "It will take a string of numbers and split them into an array."
Code: ("4102080860435620");
Expected Output: [4, 1, 0, 2, 0, 8, 0, 8, 6, 0, 4, 3, 5, 6, 2, 0]

Describe: function separateArray();

Test: "It will make two new arrays with every other digit from an array. "
Code: ([4, 1, 0, 2, 0, 8, 0, 8, 6, 0, 4, 3, 5, 6, 2, 0]);
Expected Output: [1, 2, 8, 8, 0, 3, 6, 0] and [4, 0, 0, 0, 6, 4, 5, 2]

Describe: function doubleEvenArray();

Test: "Double the values of the evenArray()."
Code: ("");
Expected Output: [2, 4, 16, 16, 0, 6, 12, 0]

Describe: function addUpArray();

Test: "If a two digit number in an array, add the digits and separate the values."
Code: [2, 4, 16, 16, 0, 6, 12, 0] [4, 0, 0, 0, 6, 4, 5, 2];
Expected Output: 50

Describe: function validCardNumber();

Test: "Checks if the added up values of the card make it a valid card number."
Code: 50;
Expected Output: Valid card number;

Describe: function checkAmericanExpress();

Test: "Checks if the card number is 15 digits instead of 16 and refactors the card number count."
Code: "423467769090125";
Expected Output: Unknown;



