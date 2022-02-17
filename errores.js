function errores(contadorIntentos) {
  if (contadorIntentos == 1) {
    cabeza();
  }
  if (contadorIntentos == 2) {
    torso();
  }
  if (contadorIntentos == 3) {
    piernaIzq();
  }
  if (contadorIntentos == 4) {
    piernaDer();
  }
  if (contadorIntentos == 5) {
    brazoIzq();
  }
  if (contadorIntentos == 6) {
    brazoDer();
    tabla.classList.add("display");
    return alert("Fin del juego! La palabra era: " + palabra);
  }
}
