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
    
    for (const movie of arrayElement) {
        console.log(`Mi peli favorita es: ${movie}`)
    };
 };

// console.log(arrayElement);

buttonElement.addEventListener('click', handleButton);


// Ejercicio 7

const adalabers = [
    {
        name: 'Raquel',
        age: 40,
        job: 'painter',
    },
    {
        name: 'Paula',
        age: 38,
        job: 'painter',
    },
    {
        name: 'Rosa',
        age: 20,
        job: 'teacher',
    }
]

function countAdalabers() {
    return adalabers.length
    
};

const nroAdalabers = countAdalabers();
// console.log(nroAdalabers);

//---------------------

function averageAge() {
    let total = 0;

for (let i = 0; i < adalabers.length; i++) {

   total = total + adalabers[i].age;
}
let media = total/adalabers.length;
    return media;
}

const average = averageAge();
// console.log(average);

//---------------------

// theYoungest

let youngest = adalabers[0].age;
let youngestName = adalabers[0].name

for (let i = 0; i < adalabers.length; i++) {


        if (youngest > adalabers[i].age){
          youngest = adalabers[i].age
          youngestName = adalabers[i].name
        }
     
}
//    console.log(youngestName);


// cuantas pintoras hay?
function countPainters() {

let counter = 0;
for (const iqualJobs of adalabers) {
    if (iqualJobs.job === "painter") {
        counter++;
    };
};
return counter;
};

let numberPainters = countPainters();

console.log(numberPainters);