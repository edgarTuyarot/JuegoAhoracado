var botonStart = document.querySelector("#inicio");
var contadorIntentos = 6;
var palabra = "";
var palabras = ["MARIPOSA", "TELEFONO", "AUTO", "PERRO", "MONTE", "CUADRO"];
var espacio = 630;
var letra = "";
var letrasErradas = [];
var letrasAcertadas = [];
var acierto = false;

botonStart.addEventListener("click", () => {
  //Se resete el contador de espacios con cada click para generar una nueva palabra
  espacio = 330;
  aciertos = 0;
  espacioErrada = 330;
  //inicia el contador de intentos
  contadorIntentos = 0;
  //mustra el canva
  tabla.classList.remove("display");
  //dibuja la orca
  horca();
  //activa el listener
  document.addEventListener("keypress", tecla);
  //define tamaño y tipo de letra
  pincel.font = "30pt Verdana";
  //definimos la palabra
  palabra = palabras[palabraRandom(palabras.length)];
  console.log(palabra);
  for (let index = 0; index < palabra.length; index++) {
    espacio = espacio + 30;
    pincel.fillStyle = "#CAE791";
    pincel.fillText("_", espacio, 530, 650);
  }
});

function tecla(e) {
  letra = e.key;
  letra = letra.toUpperCase();
  espacio = 330;

  if (contadorIntentos < 6) {
    if (palabra.includes(letra)) {
      for (let index = 0; index < palabra.length; index++) {
        espacio = espacio + 30;
        if (letra == palabra[index]) {
          pincel.fillStyle = "#CAE791";
          pincel.fillText(letra, espacio, 530, 650);
          acierto = true;

        }
      }
      if (!letrasAcertadas.includes(letra)) {
        letrasAcertadas.push(letra);
        aciertos = aciertos + 1;
      }
    } else {
      acierto = false;
    }

    if (!acierto) {
      contadorIntentos = contadorIntentos + 1;
      errores(contadorIntentos);
      if (!letrasErradas.includes(letra)) {
        letrasErradas.push(letra);
        espacioErrada = espacioErrada + 30;
        pintarErrada(letra, espacioErrada);
      }
    }

    if (aciertos == palabra.length) {
      alert("Felicitaciones");
      pincel.fillStyle = "#B5B6E8";
      pincel.fillRect(0, 0, 1200, 800);
      contadorIntentos = 6;
      tabla.classList.add("display");
    }
  }
}
