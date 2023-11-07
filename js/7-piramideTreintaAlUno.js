/*  7- Haz un script que escriba una pirámide inversa de los números del 1 al número
que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/

let numero = parseInt(prompt("Ingrese un número"));

if (!isNaN(numero) && numero <= 50) {

for (i = numero; i >= 1; i--) {
    for (let repetir = i; repetir >= 1; repetir--) {
        document.write(i);
    }
        document.write("<br>");
    }
} else {
    alert(`El numero ingresado supera los 50 o es erroneo`);
}