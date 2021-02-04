const item1 = document.querySelector('.item--1');
console.log(item1); // Devuelve una representación del elemento como HTML
console.dir(item1); // Devuelve una representación del elemento como objeto

const mother = item1.parentElement;

console.log(`La madre de nuestro elemento es un <${mother.nodeName.toLowerCase()}> y tiene la clase .${mother.className}`);
// Devuelve "La madre de nuestro elemento es un <ul> y tiene la clase .items"