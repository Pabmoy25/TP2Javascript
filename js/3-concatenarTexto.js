do {
  let texto = prompt("Ingrese un palabra");
  texto = texto.concat("-");
  document.write(texto);
} while (
  confirm(
    "Seleccionar cancelar para ver el texto o aceptar para continuar escribiendo"
  )
);
