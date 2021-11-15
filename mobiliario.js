var pvl=document.getElementById("pvl");
var dep=document.getElementById("dep");

function tarifas(form){
    var value=dep.options[dep.selectedIndex].text
    console.log(value)
    console.log(dep.value)
    console.log(pvl.value)

    let prkg=2.5
    let prkm=dep.value*0.13;

    if (pvl.value=="1") {
        console.log(dep.value)
        console.log(prkg)
        console.log(prkm)

        peso=prompt("Por favor ingrese el peso en kilogramos del artículo: ");
        console.log(peso)
        let trpeso=(peso*prkg)+prkm.toFixed(2)

        switch (value) {
            case "Guatemala":
                console.log(trpeso)
                alert("Tipo de artículo a transportar: Mobiliario, Destino: "+ value +" " + "con una distancia de : "+ dep.value + " " + "kilometros, la tarifa total a cancelar es de: Q"+ trpeso);
                break;
            case "Izabal":
                console.log(trpeso)
                alert("Tipo de artículo a transportar: Mobiliario, Destino: "+ value +" " + "con una distancia de : "+ dep.value + " " + "kilometros, la tarifa total a cancelar es de: Q"+ trpeso);
                break;
            case "Petén":
                alert("Tipo de artículo a transportar: Mobiliario, Destino: "+ value +" " + "con una distancia de : "+ dep.value + " " + "kilometros, la tarifa total a cancelar es de: Q"+ trpeso);
                break;
            case "Chiquimula":
                alert("Tipo de artículo a transportar: Mobiliario, Destino: "+ value +" " + "con una distancia de : "+ dep.value + " " + "kilometros, la tarifa total a cancelar es de: Q"+ trpeso);
                break;
            case "Retalhuleu":
                alert("Tipo de artículo a transportar: Mobiliario, Destino: "+ value +" " + "con una distancia de : "+ dep.value + " " + "kilometros, la tarifa total a cancelar es de: Q"+ trpeso);    
                break;
            } 
    } else{if (pvl.value=="2") {
        largo=prompt("Ingrese la medida de largo del artículo: ")
        ancho=prompt("Ingrese la medida de ancho del artículo: ")
        alto=prompt("Ingrese la medida de altura del artículo: ")
        
        let pvol=(largo*ancho*alto)/2272
        let tvol=(pvol*prkg)+prkm.toFixed(2)
        
        switch (value) {
            case "Guatemala":
                console.log(tvol)
                alert("Tipo de artículo a transportar: Mobiliario, Destino: "+ value +" " + "con una distancia de : "+ dep.value + " " + "kilometros, la tarifa total a cancelar es de: Q"+ tvol);
                break;
            case "Izabal":
                alert("Tipo de artículo a transportar: Mobiliario, Destino: "+ value +" " + "con una distancia de : "+ dep.value + " " + "kilometros, la tarifa total a cancelar es de: Q"+ tvol);
                break;
            case "Petén":
                alert("Tipo de artículo a transportar: Mobiliario, Destino: "+ value +" " + "con una distancia de : "+ dep.value + " " + "kilometros, la tarifa total a cancelar es de: Q"+ tvol);
                break;
            case "Chiquimula":
                alert("Tipo de artículo a transportar: Mobiliario, Destino: "+ value +" " + "con una distancia de : "+ dep.value + " " + "kilometros, la tarifa total a cancelar es de: Q"+ tvol);
                break;
            case "Retalhuleu":
                alert("Tipo de artículo a transportar: Mobiliario, Destino: "+ value +" " + "con una distancia de : "+ dep.value + " " + "kilometros, la tarifa total a cancelar es de: Q"+ tvol);    
                break;
        }

    } else {
        alert("No se puede realizar esta acción, inténtelo de nuevo")
    }
        alert("No se puede realizar esta acción, inténtelo de nuevo")
    }
}