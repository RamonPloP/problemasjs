let numeros = [10,20,30,40,50,60,70,80];
cont=0;
suma=0;


for(i=0;i<numeros.length;i++){
    num = numeros[i];
    if(num%2==0){
        console.log(num);
        cont++
        suma+=num;
    };
};

console.log(suma);
console.log(cont);
