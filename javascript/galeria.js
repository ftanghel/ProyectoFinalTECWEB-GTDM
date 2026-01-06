       
const contenedorFotos = document.getElementById('galeria');

function moverDerecha() {
    contenedorFotos.scrollLeft += 300;
}

function moverIzquierda() {
    contenedorFotos.scrollLeft -= 300;
}

function flecha_hover(elemento) {
    elemento.src = "imagenes/img_galeria/boton-de-flecha2.png"; 
}

function flecha_normal(elemento) {
    elemento.src = "imagenes/img_galeria/boton-de-flecha.png";
}
