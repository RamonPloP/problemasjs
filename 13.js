let contador = 0;

for (let i = 0; i < 100; i++) {
  if (i%2 == 0 || i%3 == 0) {
    console.log(i);
    contador++;
  }
}

console.log("Numeros multiplos de 2 o de 3 entre 1 y 100: "+contador);
