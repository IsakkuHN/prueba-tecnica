/*
1.5. Solicita ingresar una cadena de texto y luego muéstrela invertida.

Si se ingresa “texto” la salida espera es: “otxet” 
 */

const word = "texto";

const reversedWord = reverseWord(word);

console.log(reversedWord);

console.log(simpleReverse(word));

// Primera Solucion
function reverseWord(text) {
  // Convertir el texto en Array
  let empty = text.split("");

  // Dar vuelta a los elementos del array
  const reversed = empty.reverse();
  let template = "";

  //Se concatenan los elementos del array a un string y se retornan
  reversed.map((element) => (template += element));
  return template;
}

//Segunda Solucion
function simpleReverse(text) {
  let result = "";
  text
    .split("")
    .reverse()
    .map((char) => (result += char));
  return result;
}
