/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
“cancelar” deberá indicarse la suma total de los números introducidos.
 */
let suma = 0;

do {
  const numero = parseFloat(prompt("Ingrese un número para la suma"));
  if (!isNaN(numero)) {
    suma = suma + numero;
  } else {
    alert(`Ingrese un número valido`);
  }
} while (confirm("Si desea finalizar la suma presione Cancelar"));
document.write(`<p>El resultado de la suma es ${suma}</p>`);
