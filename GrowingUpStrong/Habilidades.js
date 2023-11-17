const habilidades = [
    "Aprende inglés, esto puede tener un impacto significativo en tus oportunidades laborales y personales. Puedes familiarizarte con el inglés dedicando tiempo regular para estudiar, estableciendo objetivos claros, utilizando aplicaciones interactivas como Duolingo, consumiendo música, podcasts y películas en inglés, configurando tus dispositivos en inglés, buscando oportunidades de conversación en el idioma, trabajando en tu pronunciación/entonación. (NO HAY CAMINO FACIL)<br>" +
    "Fuente: <a href='https://es.wikihow.com/aprender-ingl%C3%A9s-b%C3%A1sico' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/r-J3rRyQf44' target='_blank'>Enlace 2 (Video)</a><br>" +
    "Aprender inglés no es solo una habilidad, es una necesidad para sobrevivir en el mundo moderno en constante evolución. - Dr. Apj Abdul Kalam",

    "Vuélvete autodidacta, consiste en expandir tus conocimientos más allá de lo que aprendes en la escuela. Puedes conseguir esto al encontrar un tema de tu interés que te motive a conocer a fondo ese tema (carreras, títulos, profesiones, otros). Puedes intentar: establecer metas de aprendizaje, explorar temas que te interesen, abordar el estudio mediante cursos o videos y libros, buscar compañeros de estudio o comunidades de aprendizaje, consumir contenido del tema y crear un espacio de estudio.<br>" +
    "Fuente: <a href='https://concepto.de/autodidacta/' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/cwTe8Dgiigo' target='_blank'>Enlace 2 (Video)</a><br>" +
    "El aprendizaje es un viaje eterno. - Albert Einstein",

    "Vuelve la lectura un hábito, ya que es una habilidad valiosa que debe ser cultivada y desarrollada que trae consigo muchos beneficios. Para iniciarte en la lectura, puedes seguir estos pasos: seleccionar libros que te atraigan, crear un entorno cómodo para la lectura, establecer un horario regular, llevar un registro de tus lecturas, unirte a un club de lectura o encontrar un compañero de lectura, comenzar con lecturas de menor longitud y explorar diferentes formatos de lectura.<br>" +
    "Fuente: <a href='https://verne.elpais.com/verne/2015/05/05/articulo/1430838359_183888.html' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/bnmKC86p4Dw' target='_blank'>Enlace 2 (Video)</a><br>" +
    "La lectura es para la mente lo que el ejercicio es para el cuerpo. - Joseph Addison",

    "Maneja tus emociones, es esencial para tomar decisiones adecuadas sin dejar que las emociones nublen tu juicio. Puedes mejorar el control emocional reconociendo tus emociones y sus causas, permitiéndote sentir y aceptarlas sin juzgarte, practicando técnicas de calma como la respiración profunda, examinando situaciones desde diferentes perspectivas, expresando tus emociones de manera honesta y respetuosa, cuidando tu bienestar físico/emocional.<br>" +
    "Fuentes: <a href='https://psicologiaymente.com/psicologia/como-controlar-emociones' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/S2B_qxIvMXk?si=EBOcC-VfjLaKJ14u' target='_blank'>Enlace 2 (Video)</a><br>" +
    "Aquel que se conoce a sí mismo es sabio. Aquel que se domina a sí mismo es poderoso. - Lao Tzu"
];

const botonHabilidades = document.getElementById("habilidadesBtn");
const displayHabilidades = document.getElementById("habilidadesDisplay");

botonHabilidades.addEventListener("click", () => {
    const indiceAleatorio = Math.floor(Math.random() * habilidades.length);
    displayHabilidades.innerHTML = habilidades[indiceAleatorio];

    // Calcular el desplazamiento para centrar el elemento en la parte media
    const windowHeight = window.innerHeight;
    const elementHeight = displayHabilidades.clientHeight;
    const middleOffset = (windowHeight - elementHeight) / 2;

    displayHabilidades.scrollIntoView({ behavior: "smooth", block: "start" });

    // Desplazar hacia arriba para centrar el elemento en la parte media
    window.scrollBy(0, -middleOffset);
});
