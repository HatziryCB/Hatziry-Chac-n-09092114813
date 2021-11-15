function cantdoc(form) {
    var cant=document.getElementById("cant").value;
    var doc= 40;
    var tdoc= cant*doc;
    console.log(cant);
    console.log(doc);
    console.log(tdoc); 
    alert("Gracias por preferirnos, la tarifa total a pagar es de: Q" + tdoc);
}