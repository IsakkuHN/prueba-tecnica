/*
 1.3. Dada la siguiente matriz se requiere ordenar los elementos de forma ascendente y obtener la mediana.
Salida esperada:
Elementos ordenados: 3,7,8,9,15,17,28,36,57

Mediana: 15
*/

const array = [
  [17, 9, 36],
  [8, 7, 3],
  [15, 28, 57],
];

const sortedArray = [];

//Agrego cada elemento del array bidimiensional a un array unidimensional
array.map((element) => element.map((index) => sortedArray.push(index)));

//Ordenar los numeros en orden ascendente
sortedArray.sort((a, b) => a - b);

let medianaIndex = Math.floor(sortedArray.length / 2);
let mediana;

for (let i = 0; i < sortedArray.length; i++) {
  if (i < medianaIndex && sortedArray[i] < sortedArray[medianaIndex]) {
    mediana = sortedArray[medianaIndex];
  }
  if (i > medianaIndex && sortedArray[i] > sortedArray[medianaIndex]) {
    mediana = sortedArray[medianaIndex];
  }
}

console.log(`Elementos ordenados: ${sortedArray}`);
console.log("Mediana: ", mediana);
