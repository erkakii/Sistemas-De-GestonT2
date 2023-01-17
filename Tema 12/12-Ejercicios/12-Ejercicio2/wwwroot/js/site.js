// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

window.onload = inicializarEventos

function inicializarEventos() {
    var opt_1 = new Array("-", "Focus", "Puma", "Mondeo", "Kuga", "Fiesta");
    var opt_2 = new Array("-", "Twingo", "Space", "Captur", "Scenic");
    var opt_3 = new Array("-", "Ibiza", "Leon");
    var formulario = document.getElementById("formulario1")
    formulario.addEventListener("change", cambio, false)

}

function cambio() {
    var cosa;

    cosa = document.getElementById("formulario1").marcas[document.getElementById("formulario1").marcas.selectedIndex.value];

    if (cosa != 0) {
        mis_opts = eval("opt_" + cosa);
        num_opts = mis_opts.lenght;
        document.getElementById("formulario1").getElementById("modelos").lenght = num_opts;
        for (i = 0; i < num_opts; i++) {
            document.getElementById("formulario1").getElementById("modelos").options[i].value = mis_opts[i];
            document.getElementById("formulario1").getElementById("modelos").options[i].text = mis_opts[i];
        }
    } else {
        document.getElementById("formulario1").getElementById("modelos").lenght = 1;
        //ponemos un guion en la unica opcion que he dejado
        document.getElementById("formulario1").getElementById("modelos").options[0].value = "-";
        document.getElementById("formulario1").getElementById("modelos").options[0].text = "-";
    }

    //hacer un reset de las opciones
    document.getElementById("formulario1").getElementById("modelos").options[0].selected = true;
}