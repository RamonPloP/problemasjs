const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Ingresa un numero: ", (n) => {
  if(n>0){
    console.log("Numero positivo");
    readline.close();
  }
  else{
    console.log("Numero negativo");
    readline.close();
  }
});
