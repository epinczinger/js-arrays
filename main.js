'use strict';

// const movies = ['ET', 'Batman', 'Love'];

// movies[3] = 'Spiderman';

// movies.push('another movie');

// movies[3] = 'Lion';

// function workWithMovies() {   
//     return movies;
// };

// const resultValue = workWithMovies();

// console.log(resultValue.length);


// let acc = 0;
// for (let i = 1; i < 11; i++) {

//   acc = acc + 2;
//   console.log(acc);
// }



// let lunaDelCazador = 2017;

// for (let i = 0; i < 15; i++){

//     lunaDelCazador += 3; 
//     console.log(lunaDelCazador);
// }

// let array = [5, 7, 56, 23, 1, 5];

// let total = 0;

// for (let i = 0; i < array.length; i++) {

//    total = total + array[i];
// }
// let media = total/array.length;
//     console.log(media);

// Ejercicio 6

const inputElement = document.querySelector('.js-input');
const buttonElement = document.querySelector('.js-button');
const arrayElement = [];

function handleButton() {

    
    const valueElement = inputElement.value;

    arrayElement.push(valueElement);

    console.log(valueElement);
    
    for (const movie of arrayElement) {
        console.log(`${movie} 'favorita'`)
    }
 };

console.log(arrayElement);

buttonElement.addEventListener('click', handleButton);