window.onload = inicializarEventos;

function inicializarEventos(){

    
    var btnBorrar = document.getElementById("btnBorrar")

    btnBorrar.addEventListener("click", insertarPersona, false)

}





class Persona {
    constructor(id, nombre, apellido, telefono, direccion, foto, fechaNacimiento, idDepartamento) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.direccion = direccion;
        this.foto = foto;
        this.fechaNacimiento = fechaNacimiento;
        this.idDepartamento = idDepartamento;
    }
}


function eliminarPersonaPorId(){

    var idPersona = document.getElementById("idPersona")
    var div = document.getElementById("divResultado")
    var miLlamada = new XMLHttpRequest();
    miLlamada.open("DELETE", "https://elcruddefresco.azurewebsites.net/api/persona/" + idPersona.textContent);

    //Definicion estados

    miLlamada.onreadystatechange = function () {

        if (miLlamada.readyState < 4) {
            
            div.innerHTML = "Cargando lambe bicho"            
        }

        else if (miLlamada.readyState == 4 && miLlamada.status == 200) {
            div.innerHTML = "Persona eliminada con exito :D"

        }

    }

    miLlamada.send();
}

function conseguirListadoPersonas(){
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

function insertarPersona(){
    var miLlamada = new XMLHttpRequest();
    var fecha = Date.now();
    var persona = new Persona(60, "alvaro", "castro", "123456666", "calle mi nabo nº1 3 izq", "xd", "2020-01-01T00:00:00Z", 1);
    miLlamada.open("POST", "https://elcruddefresco.azurewebsites.net/api/persona/");

    var json = JSON.stringify(persona);
    //Definicion estados

    miLlamada.onreadystatechange = function () {

        if (miLlamada.readyState < 4) {

            

        }

        else if (miLlamada.readyState == 4 && miLlamada.status == 200) {
            alert("OK")
        }

    };


    miLlamada.send(json);
}

function actualizarPersona(id){
    var miLlamada = new XMLHttpRequest();
    var persona = new Persona("alvaro", "castro");
    //id de la persona que vamos a actualizar
    miLlamada.open("PUT", "https://apipersonaspaco.azurewebsites.net/api/personascondepartamento/" + id);


    //Definicion estados

    miLlamada.onreadystatechange = function () {

        if (miLlamada.readyState < 4) {

            cargando.src = "../img/ZWdx.gif";

        }

        else if (miLlamada.readyState == 4 && miLlamada.status == 200) {
            //Aqui pondriamos errores y esas cosas

        }

    };


    miLlamada.send(persona);
}

function recorrerTabla(){
    var cadena = "";

    for(let step = 0; step < document.getElementsByTagName("td").length; step++){

        if(step == document.getElementsByTagName("td").length - 1){
            cadena += document.getElementsByTagName("td")[step].textContent.trim();
        }else{
            cadena += document.getElementsByTagName("td")[step].textContent.trim() + ","
        }
        
    }

    alert(cadena)

}


function anadirFila() {
    var tableRef = document.getElementById("tabla");
    numRows = tableRef.rows.length;
    var newRow = tableRef.insertRow(numRows);
    var x = tableRef.rows[numRows].cells;
    for(var i = 0; i < 2; i++) {
        newRow.appendChild(newRow.insertCell(i));
        if (i == 0){
            x[i].innerHTML = "celda " + (numRows + 1) + ".1";
        }
            
        else{
            x[i].innerHTML = "celda " + (numRows + 1) + ".2";
        }
            
    }
}

function borrarFila(){
    /*var tabla = document.getElementById("tabla")
    numRows = tabla.rows.length
    tabla.deleteRow(numRows - 1)*/
    document.getElementById("tabla").deleteRow(document.getElementsByTagName("tr").length - 1);
}
