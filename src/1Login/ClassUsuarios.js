class Ususarios {
  constructor() {
    this.nombre;
    this.contrasenia;
  }
  registrarNombre(nombre) {
    this.nombre = nombre;
  }
  obtenerNombre() {
    return this.nombre;
  }

  registrarContrasenia(contrasenia) {
    this.contrasenia = contrasenia;
  }
  obtenerContrasenia() {
    return this.contrasenia;
  }
}
export default Ususarios;
