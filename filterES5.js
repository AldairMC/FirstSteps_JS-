var array =  [0, 1 ,2,3,4,7,8,20,24,5];
/*
var arrayP = [];

for(var i = array.length; i >= 0; i--){
    var number = array[i];

    if(number % 2 == 0){
        arrayP.push(number);
    }
}
console.log(arrayP);
*/

//Método filter de ES5: RESOLVIENDO EL MISMO CASO

var arrayP_F = array.filter(function(array){
    return array % 2 == 0;
});

console.log(arrayP_F);