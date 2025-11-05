const elementoNumero1 = document.getElementById("Numero1");
const elementoNumero2 = document.getElementById("Numero2");
const elementoContenido = document.getElementById("Contenido");

function suma(){
 const resultado = parseInt(elementoNumero1.value) + parseInt(elementoNumero2.value)
    elementoContenido.textContent = resultado
}


function resta(){
 const resultado = parseInt(elementoNumero1.value) - parseInt(elementoNumero2.value)
    elementoContenido.textContent = resultado
}


function multiplicacion(){
 const resultado = parseInt(elementoNumero1.value) * parseInt(elementoNumero2.value)
    elementoContenido.textContent = resultado
}


function division(){
 const resultado = parseInt(elementoNumero1.value) / parseInt(elementoNumero2.value)
    elementoContenido.textContent = resultado
}
