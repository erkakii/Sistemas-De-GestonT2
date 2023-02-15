window.onload = inicializarEventos;

function inicializarEventos(){

    
    var btnBorrar = document.getElementById("btnBorrar")

    btnBorrar.addEventListener("click", actualizarPersona2, false)

}





class Persona {
    constructor(id, nombre, apellidos, telefono, direccion, foto, fechaNacimiento, idDepartamento) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.direccion = direccion;
        this.foto = foto;
        this.fechaNacimiento = fechaNacimiento;
        this.idDepartamento = idDepartamento;
    }
}


function eliminarPersonaPorId(){

    var idPersona = document.getElementById("idPersona").value
    var div = document.getElementById("divResultado") //.style.display = "none" "hidden"
    var miLlamada = new XMLHttpRequest();
    miLlamada.open("DELETE", "http://localhost:5257/" + idPersona);

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
    var persona;
    const id = 60;
    const nombre = "alvaro";
    const apellidos = "castro"
    const telefono = "123456789"
    const direccion= "maceta"
    const foto = "xd"
    const fechaNacimiento = "2020-02-02T00:00:00"
    const idDepartamento = 1

    miLlamada.open("POST", "https://apipersonaspaco.azurewebsites.net/api/personas/");
    miLlamada.setRequestHeader('Content-type', 'application/json; charset=utf-8')

    try{
        var json = JSON.stringify({
            id,
            nombre,
            apellidos,
            telefono,
            direccion,
            foto,
            fechaNacimiento,
            idDepartamento

        });
    //Definicion estados

    miLlamada.onreadystatechange = function () {

        if (miLlamada.readyState < 4) {

            

        }

        else if (miLlamada.readyState == 4 && miLlamada.status == 200) {
            alert("OK")
        }

    };

    }catch(e){
        alert(e)
    }
    miLlamada.send(json);
}

function actualizarPersona(){
    var id = document.getElementById("idPersona").value
    var miLlamada = new XMLHttpRequest();
    const nombre = "alvaro";
    const apellidos = "castro"
    const telefono = "123456789"
    const direccion= "calle macetudoooooooo"
    const foto = "xd"
    const fechaNacimiento = "2020-02-02T00:00:00"
    const idDepartamento = 1

    var persona = new Persona(nombre, apellidos, telefono, direccion, foto, fechaNacimiento,idDepartamento);
    //id de la persona que vamos a actualizar
    miLlamada.open("PUT", "https://apipersonaspaco.azurewebsites.net/api/personas/" + id);
    miLlamada.setRequestHeader('Content-type', 'application/json; charset=utf-8')

    var json = JSON.stringify({
        nombre,
        apellidos,
        telefono,
        direccion,
        foto,
        fechaNacimiento,
        idDepartamento

    });
    

    //Definicion estados

    miLlamada.onreadystatechange = function () {

        if (miLlamada.readyState < 4) {

            //cositas

        }

        else if (miLlamada.readyState == 4 && miLlamada.status == 200) {
            alert("persona actualizada con exito")

        }

    };


    miLlamada.send(json);
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

function insertarPersona2() {
    var miLlamada = new XMLHttpRequest();
    var persona = new Persona(100, "David", "Carnajal", "354354", "Micasa", "foto", "1919-06-23T00:00:00", 1);
    var json=JSON.stringify(persona)
    miLlamada.open("POST", "https://apipersonaspaco.azurewebsites.net/api/personas/");
    miLlamada.setRequestHeader('Content-type', 'application/json; charset=utf-8');


    //Definicion estados

    miLlamada.onreadystatechange = function () {

        if (miLlamada.readyState < 4) {

            

        }

        else if (miLlamada.readyState == 4 && miLlamada.status == 200) {
            alert("ok")

        }

    }
    miLlamada.send(json);

}

function actualizarPersona2() {
    var id = document.getElementById("idPersona").value
    var miLlamada = new XMLHttpRequest();
    

    var persona = new Persona(id, "David", "Carnajal", "354354", "Micasa", "foto", "1919-06-23T00:00:00", 1);
    var json=JSON.stringify(persona)
    miLlamada.open("PUT", "https://apipersonaspaco.azurewebsites.net/api/personas/" + id);
    miLlamada.setRequestHeader('Content-type', 'application/json; charset=utf-8');


    //Definicion estados

    miLlamada.onreadystatechange = function () {

        if (miLlamada.readyState < 4) {

            

        }

        else if (miLlamada.readyState == 4 && miLlamada.status == 200) {
            
            alert("ok")
        }

    }
    miLlamada.send(json);

}






//function insertar() {
//        const id = document.getElementById("idPersona").value;
//    const nombre = document.getElementById("nombre").value;
//    const apellidos = document.getElementById("apellido").value;
//    const idDepartamento = document.getElementById("idDepartamento").value;
//    const telefono = "3643";
//    const direccion = "aa";
//    const foto = "a";
//    const fechaNacimiento = "1932-01-04T00:00:00";
//    const mensajeCarga = document.getElementById("mensajeCarga");
//    mensajeCarga.innerHTML = "Se está realizando el agregado";
//    var miLlamada = new XMLHttpRequest();

//    miLlamada.open("POST", "https://crudpersonasaspestrada.azurewebsites.net/API/Persona/");

//    miLlamada.setRequestHeader('Content-type', 'application/json; charset=utf-8');

//    var json = JSON.stringify({
//                id,
//                nombre,
//                apellidos,
//                idDepartamento,
//                telefono,
//                direccion,
//                foto,
//                fechaNacimiento,
//            });

//    // Definicion estados

//    miLlamada.onreadystatechange = function () {
//        if (miLlamada.readyState < 4) {
//            //aquí se puede poner una imagen de un reloj o un texto “Cargando”

//        }
//        else
//            if (miLlamada.readyState == 4 && miLlamada.status == 200) {

//                alert("Persona insertada con exito");

//            }
//    };

//    miLlamada.send(json);