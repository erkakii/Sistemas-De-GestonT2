window.onload = inicializarEventos()

//Inicializa los eventos de la pagina
function inicializarEventos(){
    conseguirTabla()
    var btnGuardar = document.getElementById("btnGuardar");

    btnGuardar.addEventListener("click", actualizarPersona, false)

    actualizarPersona()
}

//Con este metodo conseguiriamos mediante el metodo get una lista con las personas y su nombre de departamento
function conseguirTabla(){
    var miLlamada = new XMLHttpRequest();
    var cargando = document.getElementById("cargando")

    miLlamada.open("GET", "http://localhost:5257/api/examen");

    //Definicion estados

    miLlamada.onreadystatechange = function () {

        if (miLlamada.readyState < 4) {

            cargando.innerHTML = "Cargando...";

        }

        else if (miLlamada.readyState == 4 && miLlamada.status == 200) {
            var arrayPersonas = JSON.parse(miLlamada.responseText);
            cargando.style.display = "none";
            rellenarTablaPersonas(arrayPersonas)

        }

    };

    miLlamada.send();
}

//Con este metodo rellenamos la tabla recorriendo la lista que nos proporciona la api y creando filas segun la longitud que tenga la tabla
//Para añadirle los valores solo cogemos los valores que nos interesan y los asignamos
function rellenarTablaPersonas(arrayPersonas) {

    var tabla = document.getElementById("tabla");
    arrayPersonas.forEach(persona => {
        var fila = document.createElement("tr");
        var colum1 = document.createElement("td");
        var colum2 = document.createElement("td");
        var colum3 = document.createElement("td");
        var select = document.createElement("select")
        var option1 = document.createElement("option")
        var option2 = document.createElement("option")
        var option3 = document.createElement("option")
        var option4 = document.createElement("option")
        
        colum1.innerHTML = persona.persona.nombre;
        colum2.innerHTML = persona.persona.apellidos;
        option1.value = 1;
        option1.innerHTML = persona.departamento.nombre;
        option2.value = 2;
        option2.innerHTML = persona.departamento.nombre
        option3.value = 3;
        option3.innerHTML = persona.departamento.nombre
        option4.value = 4;
        option4.innerHTML = persona.departamento.nombre
        
        fila.appendChild(colum1);
        fila.appendChild(colum2);
        fila.appendChild(colum3); 
        colum3.appendChild(select);
        select.appendChild(option1)
        select.appendChild(option2)
        select.appendChild(option3)
        select.appendChild(option4)
        tabla.appendChild(fila);
    });
}

//Tambien tendría un select con los nombres de los departamentos. Pondria que al usuario se le mostraran los nombres pero en el value del 
//select pondria los id de los departamentos con los que corresponde ese nombre. Cuando el usuario seleccione finanzas que tiene el id 4
//Yo recogería ese valor 4 y se lo asignaria a la persona que ha actualizado. Mediante el método put de la api actualizaria el idDepartamento de esa 
//persona y se vería reflejado en la base de datos

//Actualiza las personas de la base de datos
function actualizarPersona() {
    var arrayIds = recorrerSelects();
    var miLlamada = new XMLHttpRequest();
    var json=JSON.stringify(persona)
    miLlamada.open("PUT", "http://localhost:5257/api/examen/" + id);
    miLlamada.setRequestHeader('Content-type', 'application/json; charset=utf-8');


    //Definicion estados

    miLlamada.onreadystatechange = function () {

        if (miLlamada.readyState < 4) {

            

        }

        else if (miLlamada.readyState == 4 && miLlamada.status == 200) {
            
            alert("persona actualizada con exito")
        }

    }
    miLlamada.send(json);

}

//Ahora realizariamos un método que recorriera los select y recogiera los valores. medinate un array y un bucle 
//Iriamos haciendo varias peticiones de put con el nuevo id del departamento de la persona e iriamos actalizandola