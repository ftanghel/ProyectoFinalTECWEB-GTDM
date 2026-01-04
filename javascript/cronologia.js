
const datosHistoria = {
    '1917': {
        titulo: "1917: Palestina antes de la creación de Israel",
        texto: "La transición de 1897 a 1917 representa el viaje del sionismo desde la periferia de la política europea hasta el centro de la diplomacia imperial. El Programa de Basilea proporcionó el objetivo (un hogar garantizado por el derecho público), y la Declaración Balfour proporcionó el medio (el patrocinio británico). Sin embargo, al insertar el proyecto nacional judío en la compleja demografía de Palestina bajo el paraguas imperial, la Declaración Balfour también institucionalizó las contradicciones —prometiendo patria a unos y derechos civiles a otros— que marcarían el destino de la región durante el siglo siguiente. La 'simpatía' de Balfour fue, en última instancia, el cumplimiento pragmático de la 'garantía pública' exigida en Basilea, pero a un costo geopolítico que ni Herzl ni Balfour pudieron prever completamente en sus respectivos tiempos.",
        img: "imagenes/img_cronologia/palestina-01.png",
        leyenda: "imagenes/img_cronologia/leyenda-06.png" 
    },
    '1947': {
        titulo: "1947: Plan de Partición ONU",
        texto: "El año 1947 marca la metamorfosis del sionismo: de cliente imperial a proyecto con mandato internacional. La Resolución 181 otorgó la licencia jurídica para el Estado, superando la ambigüedad de Balfour. Sin embargo, al imponer una partición cartográfica sobre dos nacionalismos irreconciliables sin una fuerza que la garantizase, la ONU no trajo la paz, sino que formalizó el campo de batalla. La aceptación pragmática judía y el rechazo principista árabe transformaron inmediatamente la resolución diplomática en una guerra civil existencial, demostrando que, en el vacío de poder post-británico, las fronteras definitivas no se trazarían con votos en Nueva York, sino con armas en Palestina.",
        img: "imagenes/img_cronologia/palestina-02.png",
        leyenda: "imagenes/img_cronologia/leyenda-07.png"
    },
    '1948': {
        titulo: "1948: Se forma Israel",
        texto: "Tras la guerra de 1948, Israel ocupó el 78% del territorio histórico de Palestina, expulsando a 700.000 palestinos.",
        img: "imagenes/img_cronologia/palestina-03.png",
        leyenda: "imagenes/img_cronologia/leyenda-08.png"
    },
    '1967': {
        titulo: "1967: La Ocupación",
        texto: "En la Guerra de los Seis Días, Israel ocupó Cisjordania, Gaza y Jerusalén Este. Comienza la política de asentamientos.",
        img: "imagenes/img_cronologia/palestina-04.png",
        leyenda: "imagenes/img_cronologia/leyenda-09.png" 
    },
    'Presente': {
        titulo: "Actualidad: Fragmentación",
        texto: "El territorio palestino es hoy un archipiélago de zonas aisladas por muros y controles militares.",
        img: "imagenes/img_cronologia/palestina-05.png",
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