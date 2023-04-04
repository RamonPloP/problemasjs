const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa un número del 0 al 10: ', (num) => {
  if (num >= 0 && num <= 10) {
    for (let i = 0; i <= 10; i++) {
      console.log(num+" x "+" = "+num*i);
    }
  } else {
    console.log("Debe ser un numero del 1 al 10");
  }
  readline.close();
});
