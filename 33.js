const readlineSync = require('readline-sync');

const calificaciones = [];

for (let i=1; i<11; i++) {
  let cal = readlineSync.questionFloat("Ingresa la calificacion "+i+" ");
  calificaciones.push(cal);
}

let sum = calificaciones.reduce((suma, cal) => suma + cal, 0);
let media = sum/calificaciones.length;

console.log("Media: "+ media);
