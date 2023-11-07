/* 8- Crea script para generar pirámide siguiente con los números del 1 al número
que indique el usuario (no mayor de 50) */

let numero = parseInt(prompt("Ingrese un número"));

if (!isNaN(numero) && numero <= 50) {

for (let i = 0; i <= numero; i++) {
    for (let repetir = 1; repetir <= i; repetir++) {
        document.write(repetir);
    }
        document.write("<br>");
    }
} else {
    alert(`El numero ingresado supera los 50 o es erroneo`);
}