
window.onload = inicializaEventos;

function inicializaEventos() {
    document.getElementById("btnLlamada").addEventListener("click", pedirNombre,false)
}

function pedirNombre() {
    //Punto 1 
    var miLlamada = new XMLHttpRequest();
    var divNombre = document.getElementById("divNombre");
    //Punto 2
    miLlamada.open("GET", "https://swapi.dev/api/people/");

    //Definicion estados
    miLlamada.onreadystatechange = function () {

        if (miLlamada.readyState < 4) {

            divNombre.innerHTML = "Cargando..."

        }
        else
            if (miLlamada.readyState == 4 && miLlamada.status == 200) {


                var datosRecdibidos = JSON.parse(miLlamada.responseText);
                divNombre.innerHTML = datosRecdibidos.results[7].name;

            }

    };

    miLlamada.send();
}