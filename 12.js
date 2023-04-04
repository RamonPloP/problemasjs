let pares = 0;
let impares = 0;

for (let i=0; i<100; i++) {
  console.log(i);
  if (i%2 == 0)
    pares += i;
  else
    impares += i;
}

console.log("Suma par: "+pares);
console.log("Sumar impar: "+impares);
