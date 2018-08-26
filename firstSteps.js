/*
  var notaUno, notaDos, prom;
  notaUno = 10;
  notaDos = "5";
  prom = notaUno + Number(notaDos);

  alert(prom)
  */

  // las variables inician con var

  //Number convierte string a integer

  var nombre = prompt("Ingrese su nombre");
  var apellido = prompt("Ingrese su apellido");

  document.write("<h1>");

  document.write(nombre + " " + apellido);

  document.write("</h1>");

  //prompt abre una ventana para ingresar datos


  var articulos = ["hola", "bienvenido"];

  var articulos = new Array("hola", "bienvenido");

  //dos manera de hacer un Array

  document.write("<p> Para agregar elementos al inicio utilizamos </p>");
  articulos.unshift("hey"); //agregar elementos al inicio del array

  document.write("<p> Para agregar elementos al final utilizamos </p>");
  articulos.push("aqui"); //agregaelementos al final del arrat

  document.write(articulos[1]); //muestra el primer elemento del array

  document.write("<p>" + articulos[articulos.length - 1] + "</p>"); // muestra el ultimo elemento del array

  document.write("<p> Para borrar un elemento al final utilizamos </p>");
  articulos.pop("aqui"); //Elimina elemento de un array al final

  document.write("<p> Para eliminar elementos al inicio utilizamos </p>");
  articulos.shift("hola"); //elimina elementos al inicio de un array

  document.write(articulos[articulos.length - 1]);
