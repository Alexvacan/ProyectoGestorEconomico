const NombreClave='datoUsuario'
document.getElementById('form-datos').addEventListener('submit',function(e){
    e.preventDefault();
    if(localStorage.getItem(NombreClave)===null)
    {
        localStorage.setItem(NombreClave,['']);
    }
    
    
    //console.log('==============INGRESAR==============')
    
    
    let dato =localStorage.getItem(NombreClave)
    dato=dato.split(',')
    if(dato[0]==='')
    {
        dato.shift();
    }
    console.log(dato)
    dato.push(document.getElementById('dato').value);
    console.log(dato)
    //Guarda el dato en el local Storage
    //la sentencia es: localStorage.setItem('calve',valor)
    localStorage.setItem(NombreClave,dato);
    //Corfirmacion al usuario
    //alert('Dato guardado exitosamente')
    console.log("datos:",dato)
})
document.getElementById('form-eliminar').addEventListener('submit',function(e){
    e.preventDefault();
    console.log('-----------------ELIMINAR--------------')
    let Numero_a_eliminar=document.getElementById('dato-a-eliminar').value
    let dato=localStorage.getItem(NombreClave)
    let posNumeroAEliminar=dato.indexOf(Numero_a_eliminar.toString());
    posNumeroAEliminar=posNumeroAEliminar/2
    dato=dato.split(',')

/*  console.log("dato a eliminar:",Numero_a_eliminar)
    console.log('Datos: ',dato)
    console.log('tipo:',typeof(dato[0]))
    console.log('pocicion dato a eliminar:',posNumeroAEliminar)*/
    if(posNumeroAEliminar>=0)
    {
        dato.splice(posNumeroAEliminar,1)
    }
    else
    {
        alert("No existe el numero que quiere eliminar")
    }
    //console.log('Datos Despues de eliminar: ',dato)
    
    localStorage.setItem(NombreClave,dato)
})