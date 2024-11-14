const NombreClave='datos-De-Gastos-diarios'

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
    
    let DatosGastos =localStorage.getItem(NombreClave)
    DatosGastos=DatosGastos.split(',')
    if(DatosGastos[0]==='')
    {
        DatosGastos.shift();
    }
    console.log(DatosGastos)
    DatosGastos.push(document.getElementById('dato').value);
    console.log(DatosGastos)
    localStorage.setItem(NombreClave,DatosGastos);
    
})


document.getElementById('form-eliminar').addEventListener('submit',function(e){
    e.preventDefault();
    let Numero_a_eliminar=Number(document.getElementById('dato-a-eliminar').value)
    let DatosGastos=localStorage.getItem(NombreClave)
    DatosGastos=DatosGastos.split(',')
    DatosGastos=convertirArrayAEnteros(DatosGastos);
    let posNumeroAEliminar=DatosGastos.indexOf(Numero_a_eliminar);
    if(posNumeroAEliminar>=0)
    {
        DatosGastos.splice(posNumeroAEliminar,1)
    }
    else
    {
        alert("No existe el numero que quiere eliminar")
    }
    localStorage.setItem(NombreClave,DatosGastos)
})
