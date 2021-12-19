const valorticket=200;

function dibujarvalor(valor){
    document.getElementById ('totalapagar').innerHTML=valor;  
}

function traducircategoria(categoriaid){
    if (categoriaid==="1"){
        return 0.8;
    }
    else if (categoriaid==="2"){
        return 0.5;
    }
    else if (categoriaid==="3"){
        return 0.15;
    }

    return 0;
}

function resumen(){
 let cantidad=document.getElementById('text_cantidad').value;
 let valortotal=cantidad*valorticket;
 let categoriaid=document.getElementById('select_categoria').value;
 let descuento=traducircategoria(categoriaid);

 if (parseInt(cantidad)<=0){
     alert("La Cantidad no puede ser menor a 1");
     return
 }
  
 valortotal=valortotal-(valortotal*descuento);

 dibujarvalor(valortotal);
}

function borrar(){
    location.reload();    
}

