console.log('Hola desde el archivo externo de js');
//Variables
//var
var numero = 3;
console.log(numero);
numero = 8;
console.log(numero);
//let
let nombre = 'Pepe';
console.log(nombre);
nombre = 'Juan';
console.log(nombre);

//const
const codigo = '28008';
console.log(codigo);

//Tipos de datos
//numeros
let numero1 = 6;
let numero2 = 9;
//cadenas de texto
let usuario = 'Manuel';
// boolean true | false
let primeraVez = true;
//Arrays
let frutas = ['Manzanas', 'Pera', 'Platano'];
//console.log(frutas);
console.log(frutas[0]);
console.log(frutas.length);
//operadores matematicos
//suma +
console.log(numero1 + numero2);
//resta -
console.log(numero1 - numero2);
//multiplicacion*
console.log(numero1 * numero2);
//division /
console.log(numero1 / numero2);
//modulo de division %
//exponencial **
console.log(numero1 ** numero2);

//Operadores relacionales:
//mayor >
console.log(numero1 > numero2);
//menor <
console.log(numero1 < numero2);
//mayor o igual >=
console.log(numero1 >= numero2);
//menor o igual <=
console.log(numero1 <= numero2);
//igual ==
console.log(numero1 == numero2);
//no igual !=
console.log(numero1 != numero2);

//Operadores logicos
//AND &&
//OR ||

//Condicionales
//if
/*if(condicion1){
    //si se cumple la condicion...
    console.log("bienvenido!!!");
}
else if(condicion2){
    //si se cumple la condicion2...
}
else if(condicion3){
    //si se cumple la condicion3...
}
else{
    //si no se cumple a conicion...
    console.log ("no puedes entrar lo siento")
}*/
//Ejemplo mayor de Edad
/*let edad = prompt('Escribe tu edad');
console.log(edad);
if (edad >= 18) {
  console.log('Bienvenido eres mayor de edad');
} else {
  console.log('No puedes pasar, eres menor de edad');
}*/
//Incremento
let contador = 0;
console.log(contador);
contador = contador + 1;
console.log(contador);
contador = contador + 1;
console.log(contador);
contador++;
console.log(contador);
//Decremento
contador--;
console.log(contador);
contador--;
console.log(contador);

//Bucles
//for
for (let i = 0; i < frutas.length; i++) {
  //console.log('Hola' + i);
  console.log(frutas[i]);
}
//tabla multiplicar
for (let i = 0; i <= 10; i++) {
  console.log('2 x ' + i + ':' + i * 2);
}
