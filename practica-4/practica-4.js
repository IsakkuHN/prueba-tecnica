/*
1.4. Suma los elementos de la diagonal de una matriz cuadrada de 4x4.
Salida esperada:
La suma es: 62
 
 */

const array = [
  [17, 9, 36, 21],
  [8, 28, 3, 1],
  [15, 7, 5, 30],
  [10, 17, 4, 12],
];

const ARRAY_LENGTH = 4;

let sum = 0;

if (!validatedArray(array)) {
  console.log("Arreglo no valido");
}

for (let i = 0; i < ARRAY_LENGTH; i++) {
  if (validatedArray(array[i])) {
    sum += array[i][i];
  } else {
    console.log("Fila no valida");
  }
}

console.log("La suma es: " + sum);

function validatedArray(arr) {
  return arr.length === ARRAY_LENGTH;
}
