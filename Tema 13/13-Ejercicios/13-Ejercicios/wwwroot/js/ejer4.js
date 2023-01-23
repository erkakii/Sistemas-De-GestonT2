window.onload = inicializaEventos;
function inicializaEventos(){
    pedirDatos();
    document.getElementById("btnBorrar").onclick = borrarPersona;
}
function borrarPersona() {
    var miLlamada = new XMLHttpRequest();
    var listaPersonas = document.getElementById("listaPersonas");
    var divResultadoBorrar = document.getElementById("divResultadoBorrar");

    miLlamada.open("DELETE", "https://crudjesusgarcia.azurewebsites.net/api/personaapi%22");

    //Definicion estados

    miLlamada.onreadystatechange = function () {

        if (miLlamada.readyState < 4) {

            divResultadoBorrar.innerHTML = "Cargando...";

        }

        else if (miLlamada.readyState == 4) {
            if (miLlamada.status == 200) {
                divResultadoBorrar.innerHTML = "Persona borrada satisfactoriamente"
            } else {
                divResultadoBorrar.innerHTML = "Error"
            }


        }


    }

    miLlamada.send(listaPersonas.value);

}


function pedirDatos() {

    var miLlamada = new XMLHttpRequest();
    var divResultadoBorrar = document.getElementById("divResultadoBorrar");
    var listaPersonas = document.getElementById("listaPersonas")

    miLlamada.open("GET", "https://crudjesusgarcia.azurewebsites.net/api/personaapi%22");

    //Definicion estados

    miLlamada.onreadystatechange = function () {

        if (miLlamada.readyState < 4) {

            divResultadoBorrar.innerHTML = "Cargando...";

        }

        else if (miLlamada.readyState == 4 && miLlamada.status == 200) {
            divResultadoBorrar.innerHTML = "";
                var arrayPersonas = JSON.parse(miLlamada.responseText);

            arrayPersonas.forEach(element => {
                var option = document.createElement("option");
                option.innerHTML = element.nombre;
                option.value = element.id;
                listaPersonas.appendChild(option);
            });

            }

    };
    miLlamada.send();
}
