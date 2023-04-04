const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Ingresa un numero: ", (n) => {
  if(n%2 == 0){
    console.log("Numero par");
    readline.close();
  }
  else{
    console.log("Numero impar");
    readline.close();
  }
});
