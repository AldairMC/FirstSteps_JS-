//forEach

var num = [2,5,8,5,6,9];
//Itera elemento a elemento
num.forEach(function(elemento, index, arreglo){
    arreglo[index] = Math.pow(elemento,2); //Eleva al cuadrado cado elemento del array
});

console.log(num);
