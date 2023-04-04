function tirarDado() {
  return Math.floor(Math.random() * 6) + 1;
}
let contador = 0;
for (let i = 0; i < 100; i++) {
  let dado1 = tirarDado();
  let dado2 = tirarDado();
  let suma = dado1 + dado2;
  if (suma == 10) {
    contador++;
  }
}

console.log(contador+" veces que sumaron 10 los dados");
