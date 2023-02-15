var arrayPersonas
var arrayDepartamentos
var contador

window.onload = inicializarEventos;

//Función que se ejecuta al cargar la página
//Precondiciones: Ninguna
//Postcondiciones: Ninguna
function inicializarEventos() {
    cargarPersonas();
    var btnGuardar = document.getElementById("btnGuardar");
    btnGuardar.addEventListener("click", guardarPersona, false);
    contador = 0;

}

//Función que rellena la tabla con los datos de las personas las cuales traemos de la API
//Precondiciones: Ninguna
//Postcondiciones: Ninguna
function rellenarTabla(){
    var tabla = document.getElementById("tabla");
    //Recorremos el array de personas
    arrayPersonas.forEach(persona => {
        //Creamos los elementos de la tabla
        var fila = document.createElement("tr");
        var colum1 = document.createElement("td");
        var colum2 = document.createElement("td");
        var colum3 = document.createElement("td");
        var select = document.createElement("select")
        select.id = persona.id;
        colum1.innerHTML = persona.nombre;
        colum2.innerHTML = persona.apellidos;
        //Recorremos el array de departamentos para rellenar el select
        for (var i = 0; i < arrayDepartamentos.length; i++) {
            var opcion = document.createElement("option");
            opcion.value = arrayDepartamentos[i].idDepartamento;
            opcion.innerHTML = arrayDepartamentos[i].nombre;
            if(persona.idDepartamento == arrayDepartamentos[i].idDepartamento){
                opcion.selected = true;
            }
            select.appendChild(opcion);
        }
        //Añadimos los elementos a la tabla
        fila.appendChild(colum1);
        fila.appendChild(colum2);
        fila.appendChild(colum3); 
        colum3.appendChild(select);
        tabla.appendChild(fila);
    });
}

//Funcion que llama a la API para cargar las personas y guardarlas en el array de personas
//Precondiciones: Ninguna
//Postcondiciones: Ninguna
function cargarPersonas(){
    var cargando = document.getElementById("divCargando");
    var miLlamada = new XMLHttpRequest();
    miLlamada.open("GET", "http://localhost:5257/api/personas");
    miLlamada.onreadystatechange = function () {
        if (miLlamada.readyState < 4) {
        }
        else if (miLlamada.readyState == 4 && miLlamada.status == 200) {
            cargando.innerHTML = "";
            arrayPersonas = JSON.parse(miLlamada.responseText);
            cargarDepartamentos();
        }
    };
    miLlamada.send();
}

//Funcion que llama a la API para cargar los departamentos y guardarlos en el array de departamentos
//Precondiciones: Ninguna
//Postcondiciones: Ninguna
function cargarDepartamentos() {
    var miLlamada = new XMLHttpRequest();
    miLlamada.open("GET", "http://localhost:5257/api/departamentos");
    miLlamada.onreadystatechange = function () {
        if (miLlamada.readyState < 4) {
        }
        else if (miLlamada.readyState == 4 && miLlamada.status == 200) {
            arrayDepartamentos = JSON.parse(miLlamada.responseText);
            rellenarTabla();
        }
    };
    miLlamada.send();
}



//Funcion que recorre el array de personas y actualiza las personas a las cuales les hayamos cambiado el departamento
//Precondiciones: Ninguna
//Postcondiciones: Ninguna
function guardarPersona(){
    
    for(var i = 0; i < arrayPersonas.length; i++){
        var select = document.getElementById(arrayPersonas[i].id);
        if(arrayPersonas[i].idDepartamento != select.value){
            arrayPersonas[i].idDepartamento = select.value;
            actualizarPersona(arrayPersonas[i]);
            contador++;
        }
    }
    alert("Se han actualizado " + contador + " personas");
   
}

//Funcion que llama a la API y ejecuta el metodo PUT para actualizar la persona en la base de datos
//Precondiciones: Ninguna
//Postcondiciones: Ninguna
//Persona: Objeto de tipo persona
function actualizarPersona(persona){
    var miLlamada = new XMLHttpRequest();
    var json=JSON.stringify(persona)
    miLlamada.open("PUT", "http://localhost:5257/api/personas");
    miLlamada.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    miLlamada.send(json);
}


