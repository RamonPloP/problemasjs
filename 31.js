const readline = require('readline-sync');

function primo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero != 1;
}

function factorial(numero) {
  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}

function tabla(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(numero+" x "+ i +" = "+ (numero * i));
  }
}

const numero = parseInt(readline.question('Introduce un número: '));

console.log("===== Menu =====");
console.log('1. Comprobar si es primo');
console.log('2. Calcular su factorial');
console.log('3. Imprimir su tabla de multiplicar');
const opc = parseInt(readline.question('Introduce la opción deseada: '));

switch (opc) {
  case 1:
    if (primo(numero)) {
      console.log("Es primo");
    } else {
      console.log("No es primo");
    }
    break;
  case 2:
    console.log("El factorial es: "+factorial(numero));
    break;
  case 3:
    tabla(numero);
    break;
  default:
    console.log('Opción no válida');
}
