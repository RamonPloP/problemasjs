function shell(matriz, x) {
  let n = Math.floor(x/2);
  while (n > 0) {
    for (let i = n; i < n; i++) {
      let temp = matriz[i];
      let j = i;
      while (j >= n && matriz[j-n][0] > temp[0]) {
        matriz[j] = matriz[j-n];
        j -= n;
      }
      matriz[j] = temp;
    }
    n = Math.floor(n / 2);
  }
}

let matriz = [
  [4, 4, 7],
  [78, 2, 9],
  [1, 6, 1],
  [8, 7, 3]
];

shell(matriz, matriz.length);
console.log(matriz);
