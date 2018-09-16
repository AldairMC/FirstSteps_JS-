/*var btn = document.getElementById("inicio");

btn.style.width="200px";
btn.style.height="300px";
*/
// condicional

/*
var precioCoche = 60000;
var dineroAhorrado = 15000;

if (dineroAhorrado >= precioCoche){
  alert("Puedes comprar el coche!! Enorabuena");
}
  alert("Lo siento no tienes fondos suficientes");
*/
/*
var notaUno = 3.0;
var notaDos = 5.0;
var notaTres = 4.5;
var suma = (notaUno+notaDos+notaTres)/3

if (suma >= 3.0){
  alert("Felicidades");
}else if (suma >= 2.0 && suma <= 2.9){
  alert("debes esforzarte");
}
  alert("Lo siento");

*/

var arregloUno = [1, 2, 3, 4];
var arregloDos = [2, 3, 4, 6];

var contador;

for (var i = 0;i <= arregloUno.length;i++){
  if (arregloUno[i] % 2 == 0) {
    contador += arregloUno[i];
  }
}
document.write("<p>"+contador+"</p>");
