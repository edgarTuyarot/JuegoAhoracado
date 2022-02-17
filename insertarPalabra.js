var btnPalabra = document.querySelector("#btn-agregar");
var txtPalabra = document.querySelector("#palabra-nueva");
btnPalabra.addEventListener("click", () => {
  var palabra = txtPalabra.value;
  if (palabra.length >= 3) {
    palabras.push(palabra.toUpperCase());
    console.log(palabras);
    txtPalabra.value = "";
  } else {
    alert("La palabra debe tener 3 caracteres como minimo");
  }
});
