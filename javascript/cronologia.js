
const datosHistoria = {
    '1917': {
        titulo: "1917: Mandato Británico",
        texto: "Antes de la partición. La población judía representaba menos del 6% del total y poseía menos del 2% de la tierra.",
        img: "imagenes/img_cronologia/palestina-01.jpg",
        leyenda: "imagenes/img_cronologia/leyenda-06.png" 
    },
    '1947': {
        titulo: "1947: Plan de Partición ONU",
        texto: "La ONU propuso dividir el mandato en dos Estados. Se asignó el 56% de la tierra al Estado judío, a pesar de ser minoría demográfica.",
        img: "imagenes/img_cronologia/palestina-02.jpg",
        leyenda: "imagenes/img_cronologia/leyenda-07.png"
    },
    '1948': {
        titulo: "1948: La Nakba",
        texto: "Tras la guerra de 1948, Israel ocupó el 78% del territorio histórico de Palestina, expulsando a 700.000 palestinos.",
        img: "imagenes/img_cronologia/palestina-03.jpg",
        leyenda: "imagenes/img_cronologia/leyenda-08.png"
    },
    '1967': {
        titulo: "1967: La Ocupación",
        texto: "En la Guerra de los Seis Días, Israel ocupó Cisjordania, Gaza y Jerusalén Este. Comienza la política de asentamientos.",
        img: "imagenes/img_cronologia/palestina-04.jpg",
        leyenda: "imagenes/img_cronologia/leyenda-09.png" 
    },
    'Presente': {
        titulo: "Actualidad: Fragmentación",
        texto: "El territorio palestino es hoy un archipiélago de zonas aisladas por muros y controles militares.",
        img: "imagenes/img_cronologia/palestina-05.jpg",
        leyenda: "imagenes/img_cronologia/leyenda-09.png"
    }
};

function cambiarEra(anio, botonClickeado) {
    const info = datosHistoria[anio];
    
    if (info) {
        
        document.getElementById('titulo-era').innerText = info.titulo;
        document.getElementById('texto-era').innerText = info.texto;
        
        
        const imagenMapa = document.getElementById('mapa-img');
        const imagenLeyenda = document.getElementById('leyenda-img');

      
        imagenMapa.style.opacity = 0;
        imagenLeyenda.style.opacity = 0;

    
        setTimeout(() => {
            imagenMapa.src = info.img;
            if(info.leyenda) imagenLeyenda.src = info.leyenda;
            
            imagenMapa.style.opacity = 1; 
            imagenLeyenda.style.opacity = 1;
        }, 200);
    }


    let botones = document.querySelectorAll('.bolita-anio');
    botones.forEach(btn => btn.classList.remove('activa'));
    botonClickeado.classList.add('activa');
}