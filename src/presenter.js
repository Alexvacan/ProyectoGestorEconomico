import Ususarios from "./1Login/ClassUsuarios";

const nombre = document.querySelector("#nombre-usuario");
const contrasenia = document.querySelector("#contraseña");

const form = document.querySelector("#gastos-form");
const gastosdiv = document.querySelector("#gastos-div");
const usuario = new Ususarios();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombreValue = nombre.value;
  const contraseniaValue = contrasenia.value;

  usuario.registrarNombre(nombreValue);
  usuario.registrarContrasenia(contraseniaValue);

  const nombreRegistrados = usuario.obtenerNombre();
  const contraseniaRegistrado = usuario.obtenerContrasenia();
  console.log("nombre registrado: " + gastosRegistrados);
  console.log("contrasenia registrada: " + gastosRegistrados);
});