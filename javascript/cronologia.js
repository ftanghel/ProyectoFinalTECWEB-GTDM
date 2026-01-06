
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
        texto: "La proclamación del Estado de Israel en 1948 convirtió la resolución de partición en un hecho consumado, pero también desencadenó una guerra regional inmediata. La intervención de los Estados árabes vecinos transformó el conflicto civil en una guerra interestatal, en la que el resultado no lo determinaron los acuerdos internacionales, sino la capacidad militar sobre el terreno. Los armisticios de 1949 consolidaron una nueva realidad territorial: Israel amplió su control hasta cerca del 77–78 % de la Palestina histórica, superando ampliamente el reparto aprobado por la ONU. Al mismo tiempo, la expulsión y huida de más de 700 000 palestinos —la Nakba— fragmentó definitivamente a la sociedad palestina y convirtió el conflicto en un problema de refugiados sin Estado, sentando las bases de una confrontación prolongada.",
        img: "imagenes/img_cronologia/palestina-03.png",
        leyenda: "imagenes/img_cronologia/leyenda-08.png"
    },
    '1967': {
        titulo: "1967: La Ocupación",
        texto: "La Guerra de los Seis Días marcó un punto de inflexión decisivo en el conflicto árabe-israelí al transformar una disputa entre Estados en un régimen de ocupación prolongada. La victoria militar israelí permitió la captura del Sinaí, los Altos del Golán, Gaza y Cisjordania, incluida Jerusalén Este, alterando radicalmente el equilibrio territorial y estratégico de la región. Aunque Israel no anexó formalmente Cisjordania en ese momento, el inicio de su ocupación redefinió la cuestión palestina: el conflicto dejó de centrarse en las fronteras de 1948 y pasó a girar en torno a la ocupación, los asentamientos y la autodeterminación. La Resolución 242 de la ONU intentó traducir el resultado militar en un marco diplomático, pero, una vez más, la realidad creada por la guerra se impuso sobre las ambigüedades del derecho internacional.",
        img: "imagenes/img_cronologia/palestina-04.png",
        leyenda: "imagenes/img_cronologia/leyenda-09.png" 
    },
    'Presente': {
        titulo: "2012–Actualidad: Fragmentación y consolidación",
        texto: "Desde 2012, la cuestión palestina entra en una fase de estancamiento territorial en la que no se producen ni retiradas ni redefiniciones formales de fronteras, sino la consolidación de una ocupación fragmentada. Cisjordania permanece dividida en un mosaico de enclaves palestinos separados por asentamientos, carreteras y controles israelíes, mientras Gaza queda aislada física y políticamente del resto del territorio. La ausencia de un proceso político efectivo ha transformado la ocupación en una condición estructural y normalizada, fijando un mapa de facto en el que el control territorial se impone sin resolución final, y donde la posibilidad de un Estado palestino continuo se diluye progresivamente.",
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