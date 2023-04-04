const randomNum = Math.random();

let resultado="";
if (randomNum < 0.5) {
  resultado = "cara";
} else {
  resultado = "cruz";
}
console.log(resultado);
