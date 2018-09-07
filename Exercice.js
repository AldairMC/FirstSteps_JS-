//Practical Exercice
//número maximo
var nMaximo = 3;

//número nMinimo
var nMinimo = 1;

//numeor secreto
var numeroSecreto = Math.randon()*(nMaximo-nMinimo)+nMinimo;
numeroSecreto = ParseInt(numeroSecreto); //convertir numeroa entero

var msj = "Por favor ingresa el posibole número secreto"

while (true) {
  var numeroUsuario = prompt(msj, "0");

  numeroUsuario = ParseInt(numeroUsuario);

  if (numeroSecreto === numeroUsuario) {
    alert("Hey loco ganaste!!!");
    break;
  }else if (numeroUsuario > numeroSecreto) {
    msj = ("Hey loco el número secreto es más bajo");
  }else if (numeroUsuario < numeroSecreto) {
    msj = ("Hey loco el número secreto es más alto");
  }else if (numeroUsuario === 0) {
    break;
  }

}
