var tpq= document.getElementById("tpq");

function paquetes(form) {
    var value=tpq.options[tpq.selectedIndex].text
    
    switch (value) {
        case "Documentos":
            location="documentos.html"
            break
        case "Paquetería":
            location="paqueteria.html" 
            break 
        case "Mobiliario":
            location="mobiliario.html"
            break
        case "Repuestos":
            location="repuestos.html"
            break
        case "Artículos Electrónicos":
            location="articulos.html"
            break;
    }  
}

    

