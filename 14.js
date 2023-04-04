const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];

function leerNumero() {
  readline.question("Ingresa un número: ", (numero) => {
    numeros.push(Number(numero));
    if (numeros.length < 5) {
      leerNumero();
    } else {
      let mayor = Math.max(...numeros);
      let menor = Math.min(...numeros);

      console.log("Mayor: "+mayor);
      console.log("Menor: "+menor);
      readline.close();
    }
  });
}

leerNumero();
