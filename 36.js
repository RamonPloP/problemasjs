let matrix = [];

for(let i=0; i<4; i++){
  matrix[i] = [];
  for(let j=0; j<5; j++){
    matrix[i][j] = Math.floor(Math.random() * 100) + 1;
  }
}
console.log(matrix);


let trans = [];
for (let i = 0; i < 5; i++) {
  trans[i] = [];
  for (let j = 0; j < 4; j++) {
    trans[i][j] = matrix[j][i];
  }
}

console.log(trans)
