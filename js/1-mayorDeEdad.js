const edad = parseInt(prompt("Ingrese su edad"));

 if (isNaN(edad) || edad > 100) {
  alert(`No es un numero valido`);
} else if (edad <= 17) {document.write(
  `<p>No puede conducir, tiene ${edad} años, es menor de edad</p>`
  );
} else {
  document.write(`<p>Puede conducir, tiene ${edad} años, es mayor de edad</p>`);
}
