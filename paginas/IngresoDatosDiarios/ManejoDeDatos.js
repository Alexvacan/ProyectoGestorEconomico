class ManejoDeDatos{

  OptenerDatosLocalStoreCorrectamente(nombreClave)
  {
    this.ControlarQueLocaStoreNoEsteVacio(nombreClave);
    let datosOptenidos=localStorage.getItem(nombreClave)
    datosOptenidos=datosOptenidos.split(",")
  
    datosOptenidos=this.EliminarDatoInicialSiEstaVacio(datosOptenidos);
  
    return datosOptenidos;
  }

  EliminarDatoInicialSiEstaVacio(array) {
    if (array[0] === "") {
      array.shift();
    }
    return array;
  }

  ControlarQueLocaStoreNoEsteVacio(nombreClave)
  {
    if (localStorage.getItem(nombreClave) === null) {
      localStorage.setItem(nombreClave, [""]);
    }
  }
  
  convertirArrayAEnteros(array){
    for (let i = 0; i < array.length; i++) {
      array[i] = Number(array[i]);
    }
    return array;
  }
}

export default ManejoDeDatos