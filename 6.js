const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Ingresa un número: ", numero => {
  for (let i = 1; i <= numero; i++) {
    console.log(i);
  }
  readline.close();
});
