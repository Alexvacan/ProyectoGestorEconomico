class Ususarios {
  constructor() {
    this.nombre = [];
    this.contrasenia = [];
  }
  registrarNombre(nombre) {
    this.nombre.push(nombre);
  }
  obtenerNombre() {
    return this.nombre;
  }

  registrarContrasenia(contrasenia) {
    this.contrasenia.push(contrasenia);
  }
  obtenerContrasenia() {
    return this.contrasenia;
  }
}
export default Ususarios;
