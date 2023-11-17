const pensamiento = [
    "Mantén la humildad, esto implica reconocer tus debilidades y logros, aprender de los demás, admitir errores, ser empático, rodearte de personas humildes, establecer metas para tu crecimiento, evitar comparaciones excesivas, mantener una mentalidad de aprendizaje constante, expresar gratitud y reflexionar sobre tus acciones.<br>" +
    "Fuente: <a href='https://psicologiaymente.com/personalidad/como-ser-mas-humilde' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/hUgqOTNRNpQ' target='_blank'>Enlace 2 (Video)</a><br>" +
    "La humildad es el pasaporte a la sabiduría. - Sean Brady",

    "Aprender a amar el fracaso, esto implica verlo como una oportunidad para crecer. Para aprovechar los fracasos, es importante cambiar la perspectiva, reflexionar sobre lo sucedido, asumir la responsabilidad, ajustar estrategias, mantener la perseverancia y la resiliencia, compartir experiencias, asumir riesgos, escuchar las críticas/sugerencias de otros.<br>" +
    "Fuentes: <a href='https://lamenteesmaravillosa.com/aprender-fracasos/' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/-eYqh58Fe_Y?si=kK9-NluUsdbHoICX' target='_blank'>Enlace 2 (Video)</a><br>" +
    "El fracaso es solo la oportunidad para comenzar de nuevo de manera más inteligente. - Henry Ford",

    "Embárcate en el desarrollo personal, un viaje desafiante hacia la superación. Cultiva cualidades positivas como disciplina y constancia, y rechaza cualidades negativas como la procrastinación. Para comenzar, acepta retos, conócete a ti mismo, cuida tu salud física y mental, trabaja en tus habilidades y busca la excelencia. Este viaje es un proceso constante de crecimiento y evolución.<br>" +
    "Fuente: <a href='https://www.gestion.org/que-es-el-desarrollo-personal/' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/vdkp-lt4tj4' target='_blank'>Enlace 2 (Video)</a><br>" +
    "La excelencia es un arte que se logra a través de la práctica constante. No somos lo que hacemos de vez en cuando, sino lo que hacemos de manera constante. - Shaquille O'Neal",

    "Piensa en tus metas, siempre que vayas por un objetivo en mente debes mentalizarte y analizar cuál es esa meta y el que te motiva a llegar a esa meta. Verifica que tus metas sean progresivas o alcanzables, crea un mapa sobre tus métodos o estrategias, investiga sobre tus objetivos, busca compañía o asesoramiento sobre tus objetivos con otras personas, sé paciente y toma acción para lograr tus objetivos, ya sean a corto o largo plazo.<br>" +
    "Fuente: <a href='https://rockcontent.com/es/blog/como-establecer-metas/' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/Vz00W7ZXoO0' target='_blank'>Enlace 2 (Video)</a><br>" +
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día. - Robert Collier"
];

const botonPensamiento = document.getElementById("pensamientoBtn");
const displayPensamiento = document.getElementById("pensamientoDisplay");

botonPensamiento.addEventListener("click", () => {
    const indiceAleatorio = Math.floor(Math.random() * pensamiento.length);
    displayPensamiento.innerHTML = pensamiento[indiceAleatorio];

    // Calcular el desplazamiento para centrar el elemento en la parte media
    const windowHeight = window.innerHeight;
    const elementHeight = displayPensamiento.clientHeight;
    const middleOffset = (windowHeight - elementHeight) / 2;

    displayPensamiento.scrollIntoView({ behavior: "smooth", block: "start" });

    // Desplazar hacia arriba para centrar el elemento en la parte media
    window.scrollBy(0, -middleOffset);
});
