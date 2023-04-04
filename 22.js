const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let frase;

readline.question('Ingresa una frase: ', (texto) => {
  for (let i = 0; i < 5; i++) {
    let espacios = " ";
    for (let j = 0; j < 4; j++) {
      espacios += " ";
    }
    console.log(espacios + texto);
  }
  readline.close();
});
