/* 17- Realiza un script que muestre la posición de la primera vocal de un texto
introducido por teclado. */

let frase = prompt("Ingrese una frase");

frase = frase.toLocaleLowerCase();

for (let i = 0; i < frase.length-1; i++) {
  if (
    frase.charAt(i) === "a" ||
    frase.charAt(i) === "e" ||
    frase.charAt(i) === "i" ||
    frase.charAt(i) === "o" ||
    frase.charAt(i) === "u"
  ) {
    document.write(`<h2>La primer vocal es la ${frase.charAt(i)}</h2>`);
  }
}
