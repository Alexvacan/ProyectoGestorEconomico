import Ususarios from "./1Login/ClassUsuarios";

const nombre = document.querySelector("#nombre-usuario");
const contrasenia = document.querySelector("#contraseña");
const button=document.querySelector("#button-inicio-con-datos").addEventListener('click',function (){
  if(nombre.value==='')
    {
      alert("Debe poner un nombre para iniciar la sesion")
    }
    else if(contrasenia.value==='')
    {
      alert("Debe poner una contrasenia para inciar la sesion")
    }
    else
    {
<<<<<<< HEAD
      window.location.href='./src/Pagina-Gestor.hmtl'
=======
      window.location.href='./paginas/IngresoDatosDiarios/IngresoDeDatos.html'
>>>>>>> origin/IngresoDeDatosGastosDiarios
    }
})
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