const creatividad = [
    "Diseña un espacio de estudio personalizado que te permita concentrarte y mejorar tu rendimiento académico. Crea un horario regular y ajusta el ambiente según tus preferencias, incluyendo iluminación, música de fondo, postura. Utiliza listas de organización para priorizar tareas, toma breves descansos para mantener la concentración y programa repasos regulares. (Evita repetir y memorizar).<br>" +
    "Fuente: <a href='https://www.usanmarcos.ac.cr/blogs/como-crear-un-ambiente-ideal-de-estudio' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/wyDmpHWD7Is' target='_blank'>Enlace 2 (Video)</a><br>" +
    "El estudio es la llave que abre las puertas del conocimiento. – Desconocido",

    "Intenta emprender un negocio, inténtalo desde una edad temprana para ganar libertad financiera y experiencia en la gestión del dinero. Encuentra un producto o servicio rentable, crea un plan de negocios detallado, obtén financiamiento si es necesario y utiliza estrategias de marketing en tus redes sociales. Mantén un equilibrio entre tu negocio y tus responsabilidades académicas y busca orientación de mentores o recursos útiles.<br>" +
    "Fuente: <a href='https://www.oberlo.es/blog/como-empezar-negocio' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/JRsT2DNFexU' target='_blank'>Enlace 2 (Video)</a><br>" +
    "Consejo personal: Considera la opción de un kiosco que venda bebidas o alimentos.<br>" +
    "El dinero no lo es todo, pero cuando se trata de conseguirlo, su importancia es innegable. - Woody Allen",

    "Busca constantemente la mejora. Al final de cada día, cuando te prepares para descansar, hazte estas preguntas: ¿Qué aprendí hoy? ¿En qué mejoro? Aprende de tus errores, busca retroalimentación, amplía tu conocimiento y establece metas claras. Supérate a ti mismo, mantén una mente abierta y rodéate de personas motivadoras. Celebra tus logros y busca el consejo de personas sabias.<br>" +
    "Fuente: <a href='https://expansion.mx/opinion/2021/06/16/importancia-aspirar-ser-mejores' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/WSsVx2qh4sQ?si=s2z-FbuDYkUaWjs' target='_blank'>Enlace 2 (Video)</a><br>" +
    "El mayor enemigo del mañana es el hoy satisfecho. – Proverbio Hindú",

    "Sé curioso. Cada vez que surja una pregunta o aparezca ante ti un tema de interés, pregúntalo, invéstigalo, estúdialo, analízalo y llénate de ese conocimiento que anhelas. Con el paso del tiempo, volverás la curiosidad y el conocimiento parte de ti.<br>" +
    "Fuente: <a href='https://facilethings.com/blog/es/curiosity-and-productivity' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/RI7Vr-BEAng' target='_blank'>Enlace 2 (Video)</a><br>" +
    "La curiosidad es la chispa que enciende la llama del conocimiento. - Francis Bacon"
];

const botonCreatividad = document.getElementById("creatividadBtn");
const displayCreatividad = document.getElementById("creatividadDisplay");

botonCreatividad.addEventListener("click", () => {
    const indiceAleatorio = Math.floor(Math.random() * creatividad.length);
    displayCreatividad.innerHTML = creatividad[indiceAleatorio];

    // Calcular el desplazamiento para centrar el elemento en la parte media
    const windowHeight = window.innerHeight;
    const elementHeight = displayCreatividad.clientHeight;
    const middleOffset = (windowHeight - elementHeight) / 2;

    displayCreatividad.scrollIntoView({ behavior: "smooth", block: "start" });

    // Desplazar hacia arriba para centrar el elemento en la parte media
    window.scrollBy(0, -middleOffset);
});
