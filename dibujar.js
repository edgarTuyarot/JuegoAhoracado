var tabla = document.querySelector("#horca");
var pincel = tabla.getContext("2d");

function horca() {
  pincel.fillStyle = "#B5B6E8";
  pincel.fillRect(0, 0, 1200, 800);
  pincel.fillStyle = "#CAE791";
  pincel.fillRect(835, 100, 15, 450);
  pincel.fillRect(650, 100, 185, 15);
  pincel.fillRect(650, 115, 15, 65);
}

function cabeza() {
  pincel.fillStyle = "#3A4720";
  pincel.beginPath();
  pincel.arc(657, 200, 35, 0, 2 * 3.14);
  pincel.fill();
}

function torso() {
  pincel.fillStyle = "#3A4720";
  pincel.fillRect(652, 235, 10, 110);
}

function brazoDer() {
  pincel.beginPath();
  pincel.lineWidth = 10;
  pincel.strokeStyle = "#3A4720";
  pincel.moveTo(650, 240);
  pincel.lineTo(620, 300);
  pincel.stroke();
}

function brazoIzq() {
  pincel.beginPath();
  pincel.lineWidth = 10;
  pincel.strokeStyle = "#3A4720";
  pincel.moveTo(664, 240);
  pincel.lineTo(695, 300);
  pincel.stroke();
}

function piernaDer() {
  pincel.beginPath();
  pincel.lineWidth = 10;
  pincel.strokeStyle = "#3A4720";
  pincel.moveTo(650, 335);
  pincel.lineTo(620, 420);
  pincel.stroke();
}

function piernaIzq() {
  pincel.beginPath();
  pincel.lineWidth = 10;
  pincel.strokeStyle = "#3A4720";
  pincel.moveTo(664, 335);
  pincel.lineTo(695, 420);
  pincel.stroke();
}

function pintarErrada(letra, espacio) {
  pincel.fillStyle = "#CAE791";
  pincel.fillText(letra, espacio, 290, 100);
}
