//Ejercicio 1  (Saludo de bienvenida)
alert("Ejercicio 1: \n¡Hola! ¡Bienvenido/a  a JavaScript!");

//Ejercicio 2 (Palabra o frase a lowerCase)
let fraseLowercase = "";
fraseLowercase = prompt(
  "Ejercicio2: \nIngrese una palabra o frase para convertirla:"
);
fraseLowercase = fraseLowercase.toLowerCase();
alert("Su palabra o frase convertida es: " + fraseLowercase);

//Ejercicio 3 (Calculadora de edad)
let edad = "";
edad = prompt("Ejercicio 3: \nPor favor ingrese su edad:");
if (edad >= 18) {
  alert("Usted es mayor de edad");
} else if (edad < 18) {
  alert("Usted es menor de edad");
} else alert("Valor ingresado no valido");

//Ejercicio 4 (Verificacion de contraseña)
let contrasena = "secreto123";
contrasena = prompt("Ejercicio 4: \nIngrese su contraseña:");
if (contrasena === "secreto123") {
  alert("Acceso concedido");
} else alert("Acceso denegado, intente nuevamente");

//Ejercicio 5 (Mensajes personalizados)
function mostrarMensaje() {
  let userName = "";
  userName = prompt("Ejercicio5: \nIngrese su nombre:");
  return alert(
    "!Hola " + userName + "! Espero que estés disfrutando de JavaScript"
  );
}

//Ejercicio 6 (Decisión de Beca)
function becaIngreso() {
  //Declarando variables
  let userName = "";
  let age = "";
  let pais = "";
  let departamento = "";

  //Solicitando datos (input)
  userName = prompt("Ejercicio 6: \nIngrese su nombre:");
  age = prompt("Ingrese su edad:");
  pais = prompt("Ingrese su pais:");
  departamento = prompt("Ingrese su departamento o ciudad:");

  //Seteando datos
  pais = pais.toLowerCase();
  departamento = departamento.toLowerCase();

  //Sentencia condicional
  if (age >= 18 && pais === "canada" && departamento === "toronto") {
    alert("!Felicitaciones eres apto/a para recibir una beca¡");
  } else alert("Lo sentimos no eres apto/a para recibir una beca");
}
