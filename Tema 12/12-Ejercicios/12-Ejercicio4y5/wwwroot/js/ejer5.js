window.onload = inicializarEventos

function inicializarEventos(){
    var today = new Date();
 
    // obtener la hora en la configuración regional de EE. UU.
    var now = today.toLocaleTimeString('es');
    console.log(now);
}