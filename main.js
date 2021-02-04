"use strict";

const buttonElement = document.querySelectorAll("button");
const bodyElement = document.querySelector(".js-body");

function handleButton() {
  bodyElement.classList.toggle("body-aqua");
}

for (const button of buttonElement) {
  button.addEventListener("click", handleButton);
}

// console.log(buttonElement);

//-----------------

const items = [
  "Ada",
  1815,
  ["Informática", "Matemática", "Escritora"],
  {
    mother: "Anna Isabella",
    father: "Lord Byron",
  },
];

for (let index = 0; index < items.length; index++) {
  console.log(
    `El dato ${
      items[index]
    } está en la posición ${index} y es de tipo ${typeof items[index]}`
  );
}

//---Ejercicio 1 leccion 9

function get100Numbers() {
  const array = [];

  for (let index = 1; index < 101; index++) {
    array.push(index);
  }

  return array;
}
get100Numbers();

//-------Ejercicio 2

const Numbers = get100Numbers();

function getReversed100Numbers() {
  const ReverseNumber = Numbers.reverse();

  console.log(ReverseNumber);
}

getReversed100Numbers();

//---Ejercicio 3

const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNomber() {
  const NewArray = [];
  const Array3 = [];

  for (const number of lostNumbers) {
    if (number % 2 == 0 && number % 3 == 0) {
      NewArray.push(number);
      Array3.push(number);
    } else if (number % 2 == 0) {
      NewArray.push(number);
    } else if (number % 3 == 0) {
      Array3.push(number);
    }
  };

  const resultConcat = NewArray.concat(Array3);
  console.log(resultConcat);
}
bestLostNomber();
