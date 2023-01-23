window.onload = inicio

function inicio(){
    var miLlamada = new XMLHttpRequest();
    var cargando = document.getElementById("barra")

    miLlamada.open("GET", "https://crudjesusgarcia.azurewebsites.net/API/PersonaAPI/");

    //Definicion estados

    miLlamada.onreadystatechange = function () {

        if (miLlamada.readyState < 4) {

            cargando.src = "../img/ZWdx.gif";

        }

        else if (miLlamada.readyState == 4 && miLlamada.status == 200) {
            cargando.innerHTML = "";
            var arrayPersonas = JSON.parse(miLlamada.responseText);

            rellenarTablaPersonas(arrayPersonas)

        }

    };

    miLlamada.send();
}

function rellenarTablaPersonas(arrayPersonas) {

    var tabla = document.getElementById("tabla");
    arrayPersonas.forEach(persona => {
        var fila = document.createElement("tr");
        var colum1 = document.createElement("td");
        var colum2 = document.createElement("td");
        var colum3 = document.createElement("td");
        colum1.innerHTML = persona.persona.nombre;
        colum2.innerHTML = persona.persona.apellidos;
        colum3.innerHTML = persona.idDepartamento;
        fila.appendChild(colum1);
        fila.appendChild(colum2);
        fila.appendChild(colum3); 
        tabla.appendChild(fila);
    });

}