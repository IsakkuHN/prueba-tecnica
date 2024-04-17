/* 
1.1. Dadas 2 matrices de 3x3, indicar cuantos elementos mayores tiene cada arreglo y cuantos elementos son iguales, comparando las mismas posiciones entre cada arreglo. 
Salida esperada:
El arreglo 1 contiene 3 elementos mayores

El arreglo 2 contiene 4 elementos mayores

Existen 2 elementos iguales en ambos arreglos
*/

let array1 = [
  [17, 9, 36],
  [8, 7, 3],
  [15, 28, 87],
];
let array2 = [
  [9, 21, 36],
  [16, 65, 4],
  [12, 28, 31],
];
let ARRAY_LENGTH = 3;

compareArrays(array1, array2);

function compareArrays(arr1, arr2) {
  let highNumA = 0;
  let highNumB = 0;
  let equalCount = 0;
  if (validatedArray(arr1) || validatedArray(arr2)) {
    console.log("La longitud de las matrices no es valida");
    return;
  }
  for (let i = 0; i < ARRAY_LENGTH; i++) {
    for (let j = 0; j < ARRAY_LENGTH; j++) {
      switch (compareValue(arr1[i][j], arr2[i][j])) {
        case 1:
          highNumA++;
          break;
        case 0:
          equalCount++;
          break;
        case -1:
          highNumB++;
          break;
      }
    }
  }

  printResults(highNumA, highNumB, equalCount);
}

function validatedArray(array) {
  return array.length !== ARRAY_LENGTH;
}

function compareValue(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
}

function printResults(right, left, equal) {
  console.log(`El arreglo 1 contiene ${right} elementos mayores`);
  console.log(`El arreglo 2 contiene ${left} elementos mayores`);
  console.log(`Existen ${equal} elementos iguales en ambos arreglos`);
}
