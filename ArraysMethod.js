//forEach
/*
let num = [2,5,8,5,6,9];
//Itera elemento a elemento
num.forEach(function(elemento, index, arreglo){
   arreglo[index] = Math.pow(elemento,2); //Eleva al cuadrado cado elemento del array
});

console.log(num);
*/


//reduce

//var letras = ["H", "o", "l","a"];


//para unir las letras podemos
//var y = letras.join(""); // se puede hacer de esta manera 

//O asi
/*
var x = letras.reduce(function(valor_anterior_retornado, valor_actual, index, arreglo){
    return valor_anterior_retornado + valor_actual;
});


console.log(x);
*/
//Si queremos sumar los elementos de un arreglo podemos 

var num = [2,1,4,5,8,6];

var suma = 0;
for(var i = num.length-1;i>=0;i--){
    suma += num[i];
}
console.log(suma);
//console.log(typeof suma);  //typeof mustra el tipo de variable

//O asi 

var x = num.reduce(function(valor_anterior_retornado, valor_actual, index, elemento){
    return valor_anterior_retornado + valor_actual;
});


console.log(x);

