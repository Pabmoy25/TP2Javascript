// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("Ingresa un texto");
texto = texto.toLocaleLowerCase(); //Devuelve el string en mayúsculas.
let contador = 0;

for (let i = 0; i < texto.length; i++) {
  let letra = texto.charAt(i);
  if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    contador++;
  }
}
document.write(`El número de vocales es: ${contador}`);
