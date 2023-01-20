window.onload = inicializarEventos



function inicializarEventos(){
    inicio()
setInterval("inicio()", 1000)
    

    

}

function inicio(){
    var imgh1 = document.getElementById("digito1Hora")
    var imgh2 = document.getElementById("digito2Hora")
    var imgm1 = document.getElementById("digito1Minutos")
    var imgm2 = document.getElementById("digito2Minutos")
    var imgs1 = document.getElementById("digito1Segundos")
    var imgs2 = document.getElementById("digito2Segundos")
    var today = new Date();
    var now = today.toLocaleTimeString('es-ES', { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    

    var valores = now.split(":");
    var h1 = valores[0].charAt(0);
    var h2 = valores[0].charAt(1);
    var m1 = valores[1].charAt(0);
    var m2 = valores[1].charAt(1);
    var s1 = valores[2].charAt(0);
    var s2 = valores[2].charAt(1);

    

    imgh1.src = "../img/" + h1 + ".gif"
    imgh2.src = "../img/" + h2 + ".gif"
    imgm1.src = "../img/" + m1 + ".gif"
    imgm2.src = "../img/" + m2 + ".gif"
    imgs1.src = "../img/" + s1 + ".gif"
    imgs2.src = "../img/" + s2 + ".gif"
}