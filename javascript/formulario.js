/* JAVASCRIPT DEL FORMULARIO */
function gestionar(elem){
    var dinero=document.getElementById("dinero");
    if (dinero){
        dinero.remove();
    }
    var botones = document.querySelectorAll('.botones button');
    for (var i=0;i<botones.length;i++){
        botones[i].style.backgroundColor = "";
        botones[i].style.color = "";
    }
    elem.style.backgroundColor = "#fe5929";
    elem.style.color = "white";
}
function mostrar(){
    var div=document.getElementById("otra");
    var input=document.createElement("input");
    input.type="number";
    input.id="dinero";
    input.min=1;
    input.step=1;
    div.appendChild(input);
}
function validar(event){
    event.preventDefault();

    var c_nombre=document.getElementById("nombreCompleto");
    var c_correo=document.getElementById("correo");
    var c_mensajes=document.getElementById("mensajes");
    var caja1=document.getElementById("bot1");

    c_mensajes.innerHTML="";
    c_nombre.style.border="";
    c_correo.style.border="";

    var boton = document.querySelector(".botones button[style*='background-color']");
    var errores = [];

    if (c_nombre.value===""){
        errores.push("Debes escribir tu nombre completo.");
        c_nombre.style.border="2px solid #fe5929";
    }
    if (c_correo.value===""){
        errores.push("Debes escribir tu correo electrónico.");
        c_correo.style.border="2px solid #fe5929";
    }
    if (!boton){
        errores.push("Debes seleccionar una cantidad de dinero.");
    } else {
        if (boton.textContent==="OTRA") {
            var c_dinero = document.getElementById("dinero");
            if (c_dinero.value===""){
                errores.push("Debes introducir una cantidad de dinero.");
                c_dinero.style.border="2px solid #fe5929";
            }else{
                c_dinero.style.border="";
            }
        }
    }
    if (!caja1.checked){
        errores.push("Debes aceptar la política de privacidad.");
    }
    if (errores.length>0){
        for (var i=0;i<errores.length;i++){
            c_mensajes.innerHTML+=errores[i]+"<br>";
        }
        c_mensajes.style.color="#fe5929";
        c_mensajes.style.fontWeight="bold";
        return false;
    }else{
        alert("Donación realizada correctamente. ¡Gracias por ayudar!");
        document.getElementById("formulario").reset();
        if (c_dinero){
            c_dinero.remove();
        }
        boton.style.backgroundColor="";
        boton.style.color="";

        return true;                
    }

}