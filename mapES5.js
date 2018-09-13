var numero = [2,4,5,6];

/*
//manera clasica 
for(var i = numero.length-1; i>=0; i--){
    var num = numero[i];
    cuadrado.push(Math.pow(num, 2));
}

*/



//Metodo map de ES5
var cuadrado = numero.map(function(x){
    return Math.pow(x, 2);
})

console.log(cuadrado);
