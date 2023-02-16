window.onload = inicio

function inicio(){
    var miLlamada = new XMLHttpRequest();
    var cargando = document.getElementById("barra")

    miLlamada.open("GET", "https://apipersonaspaco.azurewebsites.net/api/personascondepartamento/");

    //Definicion estados

    miLlamada.onreadystatechange = function () {

        if (miLlamada.readyState < 4) {

            cargando.src = "../img/ZWdx.gif";

        }

        else if (miLlamada.readyState == 4 && miLlamada.status == 200) {
            var arrayPersonas = JSON.parse(miLlamada.responseText);
            cargando.src="";
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
        colum1.innerHTML = persona.nombre;
        colum2.innerHTML = persona.apellidos;
        colum3.innerHTML = persona.nombreDpto;
        fila.appendChild(colum1);
        fila.appendChild(colum2);
        fila.appendChild(colum3); 
        tabla.appendChild(fila);
    });

}

function ordenarArrayPersonas(arrayPersonas) {

    arrayPersonas.sort(function (a, b) {
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (a.nombre < b.nombre) {
            return -1;
        }
        return 0;
    });

}

function filtrarArrayPersonas(arrayPersonas) {

    var arrayFiltrado = arrayPersonas.filter(persona => persona.nombreDpto == "Informatica");

    return arrayFiltrado;


}

function buscarPersona(arrayPersonas, nombre) {

    var personaEncontrada = arrayPersonas.find(persona => persona.nombre == nombre);

    return personaEncontrada;

}