let textoUno = [];
let textoDos = [];
let vocalaa = [];
let vocalee = [];
let vocalii = [];
let vocaloo = [];
let mensajeEncriptado = [];
let mensajeEncriptadoDos = [];

function ocultarImagen() {
    document.getElementById("imagen").style.display = "none";
}

function encriptarMensaje() {
    ocultarImagen();
    textoUno = document.getElementById("menOriginal").value;
    if (typeof textoUno === 'string') {   
        vocalaa = textoUno.replaceAll('a','ai'); 
        vocalee = vocalaa.replaceAll('e','enter');
        vocalii = vocalee.replaceAll('i','imes');
        vocaloo = vocalii.replaceAll('o','ober');
        mensajeEncriptado = vocaloo.replaceAll('u','ufat');
    }
    document.getElementById("input-manEncriptado").value = mensajeEncriptado;
}

function desencriptarMensaje() {
    ocultarImagen();
    textoUno = document.getElementById("menOriginal").value;
    if (typeof textoUno === 'string') {   
        vocalaa = textoUno.replaceAll('imes','i');
        console.log(vocalaa);
        vocalii = vocalaa.replaceAll('ober','o'); 
        console.log(vocalii);
        vocalee = vocalii.replaceAll('ai', 'a');
        console.log(vocalee);
        vocaloo = vocalee.replaceAll('enter','e');
        console.log(vocaloo);
        mensajeEncriptado = vocaloo.replace('ufat','u');
    }  
    document.getElementById("input-manEncriptado").value = mensajeEncriptado;
}

function copiarMensaje() {
    textoDos = document.getElementById("input-manEncriptado").value;
    document.getElementById("menOriginal").value = textoDos;
}

function borrarMensaje() {
    document.getElementById("input-manEncriptado").value = " ";
    document.getElementById("menOriginal").value = " ";
    document.getElementById("imagen").style.display = img;
}
