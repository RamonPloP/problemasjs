const readline = require('readline-sync');

let num1 = readline.questionInt('Primer número: ');
let num2 = readline.questionInt('Segundo número: ');

console.log('====== Menu ======');
console.log('1. Suma');
console.log('2. Resta');
console.log('3. Multiplicación');
console.log('4. División');
let opc = readline.questionInt('Elige una opcion: ');

switch(opc) {
  case 1:
    console.log("La suma es: "+(num1+num2));
    break;
  case 2:
    console.log("La resta es: "+(num1-num2));
    break;
  case 3:
    console.log("La multiplicacion es: "+(num1*num2));
    break;
  case 4:
    console.log("La division es: "+(num1/num2));
    break;
  default:
    console.log('Opción inválida');
    break;
}
