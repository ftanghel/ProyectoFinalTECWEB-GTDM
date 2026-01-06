var aciertos = 0;
var totalFotos = 6;

document.addEventListener('DOMContentLoaded', function() {
    var fotos = document.querySelectorAll('.foto');
    var cajas = document.querySelectorAll('.caja-drop');

    for(var i=0; i < fotos.length; i++){
        fotos[i].addEventListener('dragstart',arrastrar);
    }

    for(var i=0; i < cajas.length; i++){
        cajas[i].addEventListener('dragover', permitirsoltar);
        cajas[i].addEventListener('dragleave', salirZona);
        cajas[i].addEventListener('drop', soltar);
    }
})


function permitirsoltar(e){
    e.preventDefault();
    this.style.backgroundColor = "#e0e0e0"; 
    this.style.borderColor = "#333";
}
  
function arrastrar(e){
    e.dataTransfer.setData("text", e.target.id);
}
  
function soltar(e){
    e.preventDefault();
    var idFoto = e.dataTransfer.getData("text");
    var foto = document.getElementById(idFoto);

    var epocaFoto = foto.getAttribute("data-epoca");
    var epocaCaja = this.getAttribute("data-target");

    //comprobacion si coincide la foto con la caja
    if(epocaFoto == epocaCaja){
        this.appendChild(foto);
        foto.style.border = "5px solid #4CAF50"; 
        foto.style.transform = "rotate(0deg)";
        foto.style.margin = "10px";
        foto.setAttribute("draggable", "false"); 
        foto.style.cursor = "default";
        aciertos++;

        if(aciertos == totalFotos){
            document.getElementById("mensaje-victoria").style.display = "block";
            document.getElementById("mensaje-victoria").scrollIntoView({behavior: "smooth"});
        }
    }
    else{
        foto.style.borderColor = "red";
        alert("Vuelvelo a intentar");
    }
}

function salirZona(e){ //cuando sale la foto de la caja sin soltarla vueleve al color original
    this.style.backgroundColor = "";
    this.style.borderColor = "";
}
