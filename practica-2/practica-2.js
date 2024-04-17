/*
1.2. Mostrar la suma los elementos de un arreglo bidimensional, 
exceptuando los valores que estén alejados más del 60% del promedio de los elementos. 
Además, debe mostrar el promedio de todos los elementos, los valores que aplican y los que no aplican a la suma solicitada.
Salida esperada:
La suma es: 77

Promedio: 20

No aplican para sumar: 3, 7, 36, 57

Sí aplican para sumar: 8, 9, 15, 17, 28
 */

const arr = [
  [17, 9, 36],
  [8, 7, 3],
  [15, 28, 57],
];

let average = 0;
let counter = 0;
let sum = 0;
const notAdded = [];
const added = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    counter++;
    average += arr[i][j];
  }
}

average = average / counter;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (isAdded(average, arr[i][j])) {
      sum += arr[i][j];
      added.push(arr[i][j]);
    } else {
      notAdded.push(arr[i][j]);
    }
  }
}

printResults(sum, average, added, notAdded);

function isAdded(ave, value) {
  let minimum = Math.abs(ave) * 0.6;
  let diference = Math.abs(value - ave);
  return diference <= minimum;
}

function printResults(sumValue, averageValue, arrayAdded, arrayNotAdded) {
  console.log(`La suma es de: ${sumValue}`);
  console.log(`Promedio: ${averageValue}`);
  console.log(`No aplican para sumar: ${arrayNotAdded}`);
  console.log(`Si aplican para sumar: ${arrayAdded}`);
}
