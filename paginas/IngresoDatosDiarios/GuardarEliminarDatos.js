const NombreClave='datoUsuario'

function convertirArrayAEnteros(array)
{
    for(let i=0;i<array.length;i++)
    {
        array[i]=Number(array[i])
    }
    return array;
}

document.getElementById('form-datos').addEventListener('submit',function(e){
    e.preventDefault();
    if(localStorage.getItem(NombreClave)===null)
    {
        localStorage.setItem(NombreClave,['']);
    }
    
    let dato =localStorage.getItem(NombreClave)
    dato=dato.split(',')
    if(dato[0]==='')
    {
        dato.shift();
    }
    console.log(dato)
    dato.push(document.getElementById('dato').value);
    console.log(dato)
    localStorage.setItem(NombreClave,dato);
    
})
document.getElementById('form-eliminar').addEventListener('submit',function(e){
    e.preventDefault();
    let Numero_a_eliminar=Number(document.getElementById('dato-a-eliminar').value)
    let dato=localStorage.getItem(NombreClave)
    dato=dato.split(',')
    dato=convertirArrayAEnteros(dato);
    let posNumeroAEliminar=dato.indexOf(Numero_a_eliminar);
    if(posNumeroAEliminar>=0)
    {
        dato.splice(posNumeroAEliminar,1)
    }
    else
    {
        alert("No existe el numero que quiere eliminar")
    }
    localStorage.setItem(NombreClave,dato)
})
