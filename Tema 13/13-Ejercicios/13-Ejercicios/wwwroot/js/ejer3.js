window.onload = inicializaEventos;

function inicializaEventos(){

    obtenerListado()
    

}

function obtenerListado(){
    var miLlamada = new XMLHttpRequest();
    var imgCargar = document.getElementById("imgCargar");
    var listadoPersonas;

    miLlamada.open("GET", "https://elcruddefresco.azurewebsites.net/api/personaNombreDepto/");

    miLlamada.onreadystatechange = function() {

        if(miLlamada.readyState == 4 && miLlamada.status == 200){

            listadoPersonas = JSON.parse(miLlamada.responseText)
            crearTablaConDatos(listadoPersonas)

        }



    }
}

function listadoPersonas(listadoPersonas){


    var tabla = document.getElementById("tabla")
    var numeroFilas = listadoPersonas.lenght

    tabla.insertRow(numeroFilas)



}