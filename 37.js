const readline = require('readline-sync');

const numCursos = parseInt(readline.question('Ingrese el número de cursos: '));
const numAlumnos = parseInt(readline.question('Ingrese el número de alumnos por curso: '));

const notas = new Array(numCursos);
for (let i = 0; i < numCursos; i++) {
  notas[i] = new Array(numAlumnos);
}

for (let i = 0; i < numCursos; i++) {
  console.log(`Curso ${i+1}`);
  for (let j = 0; j < numAlumnos; j++) {
    notas[i][j] = parseFloat(readline.question(`Ingrese la nota del alumno `+(j+1)));
  }
}

const promediosCursos = new Array(numCursos);
for (let i = 0; i < numCursos; i++) {
  const sumNotas = notas[i].reduce((a, b) => a + b);
  promediosCursos[i] = sumNotas / numAlumnos;
}

const promediosAlumnos = new Array(numAlumnos);
for (let j = 0; j < numAlumnos; j++) {
  let sumNotas = 0;
  for (let i = 0; i < numCursos; i++) {
    sumNotas += notas[i][j];
  }
  promediosAlumnos[j] = sumNotas / numCursos;
}

console.log('Notas:');
for (let i = 0; i < numCursos; i++) {
  console.log(`Curso ${i+1}: ${notas[i].join(', ')}`);
}

console.log('Promedios por curso:');
for (let i = 0; i < numCursos; i++) {
  console.log(`Curso ${i+1}: ${promediosCursos[i]}`);
}

console.log('Promedios por alumno:');
for (let j = 0; j < numAlumnos; j++) {
  console.log(`Alumno ${j+1}: ${promediosAlumnos[j]}`);
}
