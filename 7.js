const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador = 0;

function leer() {
  readline.question('Ingresa lo que quieras, usa "0" para salir del programa ', (frase) => {
    if (frase == 0) {
      console.log("Frases ingresadas: "+contador);
      readline.close();
    } else {
      contador++;
      leer();
    }
  });
}

leer();
