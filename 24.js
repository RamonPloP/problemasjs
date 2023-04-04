function esPrimo(numero) {
  if (numero < 2) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}


const numero = 17;
if (esPrimo(numero)) {
  console.log("Es primo");
} else {
  console.log("No es primo");
}
