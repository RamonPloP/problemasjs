const filas = 10;
const columnas = 10;

for (let i = 0; i < filas; i++) {
  let fila = "";
  for (let j = 0; j < columnas; j++) {
    const numero = i * columnas + j;
    fila += numero.toString().padStart(3, " ") + " ";
  }
  console.log(fila);
}
