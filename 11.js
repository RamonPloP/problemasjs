const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Ingresa un numero: ", (n) => {
  for(let i=0;i<n;i++){
    if(i%3 == 0)
      console.log(i);
  }
  if(n%3 == 0)
    console.log(n);
  readline.close();
});
