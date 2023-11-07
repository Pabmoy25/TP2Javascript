/*  16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,
si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
 */

let texto = prompt("Ingresa un texto");

let palabraAlReves = "";

for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i);
    palabraAlReves = letra + palabraAlReves;
}
document.write(`<h2>${palabraAlReves}</h2>`);