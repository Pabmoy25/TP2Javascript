let texto = prompt("Ingresa un texto");

for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i);
    if (i === texto.length - 1) {
        document.write(letra);
    }
    else {
        document.write(letra + "-");
    }
}
