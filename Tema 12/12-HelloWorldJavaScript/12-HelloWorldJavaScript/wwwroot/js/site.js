// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

window.onload = inicializarEventos;


function inicializarEventos() {
    var miBoton = document.getElementById("btnSaludar");
    var imagen = document.getElementById("imgGalleta");

    imagen.addEventListener("click", sumarContador, false)
    miBoton.addEventListener("click", saludar, false);

}


function saludar() {
    document.getElementById("btnSaludar").value = "Despedir";
}

function sumarContador() {
    var contador = document.getElementById("lblPulsaciones");
    contador.textContent++;

}