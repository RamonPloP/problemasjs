const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function leer() {
  readline.question("Ingresa la letra S o la N en mayusculas: ", (letra) => {
    if (letra == 'S' || letra == 'N') {
      leer();
    } else {
      readline.close();
    }
  });
}

leer();
