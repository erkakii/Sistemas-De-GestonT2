window.onload = iniciarEventos

function iniciarEventos(){
    var btnRecorrer = document.getElementById("btnRecorrer")
    var btnAnadir = document.getElementById("btnAnadir")
    var btnBorrar = document.getElementById("btnBorrar")

    btnRecorrer.addEventListener("click", recorrer, false)
    btnAnadir.onclick = anadir;
    btnBorrar.onclick = borrar;

}


function recorrer(){
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


function anadir() {
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

function borrar(){
    var tabla = document.getElementById("tabla")
    numRows = tabla.rows.length
    tabla.deleteRow(numRows - 1)
    /*document.getElementById("tabla").deleteRow(document.getElementsByTagName("tr").length - 1);*/ 
}


/*function anadir(){
    // Find a <table> element with id="myTable":
    var table = document.getElementById("table");

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(document.getElementsByTagName("tr").length);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    alert("hola")
}*/

