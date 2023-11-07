/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
nombre del mayor. * */

const nombre1 = prompt("Ingresar 1er nombre: ");
const edad1 = parseInt(prompt("Su edad:"));
const nombre2 = prompt("Ingresar 2do nombre: ");
const edad2 = parseInt(prompt("su edad: "));
const nombre3 = prompt("Ingresar 3er nombre: ");
const edad3 = parseInt(prompt("Su edad: "));

const mayor = Math.max(edad1, edad2, edad3);

if (mayor === edad1) {
    document.write("El mayor es: " + nombre1);
}
if (mayor === edad2) {
    document.write("El mayor es: " + nombre2);
}
if (mayor === edad3) {
    document.write("El mayor es: " + nombre3);
}