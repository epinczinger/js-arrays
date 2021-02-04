'use strict';

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22
      }
    ]
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25
      }
    ]
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28
      }
    ]
  }
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

// TÚ CÓDIGO AQUÍ

const resultElement = document.querySelector('.js-result');

let lis = '';

for (const promo of promos) {
  lis += "<li>";
  lis += `<p> Nombre ${promo.name} </p>`;
  lis += "<ul>";

  for (let index = 0; index < promo.students.length; index++) {
    

    lis += "<li>";
    lis += `${promo.students[index].name}`;
    lis += "</li>";
  };
    lis += "</ul>";
    lis += `<p> Promo ${promo.promo}</p>`;
    lis += `<p> Nro de Alumnas ${promo.students.length}</p>`;
    lis += "</li>";
  };
  resultElement.innerHTML = `<ul>${lis} </ul>`;
