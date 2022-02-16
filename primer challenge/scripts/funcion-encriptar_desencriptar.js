function encriptar(mensaje) {
  var mensajeOutput = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  return mensajeOutput;
}

function Desencriptar(mensaje) {
  var mensajeOutput = mensaje
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  return mensajeOutput;
}

function copyText() {
  let copyTextT = document.querySelector("#textOutput");
  copyTextT.select();
  copyTextT.setSelectionRange(0, 9999);
  document.execCommand("copy");
}
