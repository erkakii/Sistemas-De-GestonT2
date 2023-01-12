// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


window.onload = inicializarEventos;

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}


function inicializarEventos() {
    var miBoton = document.getElementById("btnSaludar");
    miBoton.addEventListener("click", saludar, false)
    

}

function saludar() {
    var nombre = document.getElementById("Nombre").value
    var apellido = document.getElementById("Apellido").value
    var persona = new Persona(nombre, apellido);
    var saludo = "Hola: " + persona.nombre + " " + persona.apellido
    alert(saludo)
}
