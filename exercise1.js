let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

let myAlphabetLength = () => {
  console.log(myAlphabet.length);
};

myAlphabetLength();

//Console.log each item in the array. Also console.log the index for each planet.
let planets = ["san-ti", "earth", "mars"];

planets.forEach((planet, index) => {
  console.log(`Planet ${index}: ${planet}`);
});

//Console.log each item in this array:
let myArr = [1, 2, "One", true];

myArr.forEach((item) => {
  console.log(item);
});
