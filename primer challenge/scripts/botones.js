let textInput = document.querySelector("#textInput");
let textOutput = document.querySelector("#textOutput");

let btnEncriptar = document.querySelector("#btn-encriptar");
btnEncriptar.addEventListener("click", function (event) {
  event.preventDefault();
  textOutput.value = encriptar(textInput.value);
});

let btnDesencriptar = document.querySelector("#btn-desencriptar");
btnDesencriptar.addEventListener("click", function (event) {
  event.preventDefault();
  textOutput.value = Desencriptar(textInput.value);
});

let btn_copy = document.querySelector("#btn-copy");
btn_copy.addEventListener("click", function (event) {
let cop = copyText();
event.preventDefault();
});
