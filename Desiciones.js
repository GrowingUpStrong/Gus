const Decisiones = [
    "Sé cauteloso con la confianza, ya que no todos tienen buenas intenciones para contigo. Antes de confiar plenamente en alguien, analiza la situación y sus motivaciones, escucha tus instintos y establece límites saludables en tus relaciones. Construye la confianza gradualmente y utiliza lecciones del pasado sin generalizar en exceso. Comunicar tus expectativas y necesidades en tus relaciones es crucial para protegerte.<br>" +
    "Fuentes: <a href='https://lamenteesmaravillosa.com/la-prudencia-es-la-inteligencia-de-los-valientes/' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/Sij8mitjouU' target='_blank'>Enlace 2 (Video)</a><br>" +
    "Aquel que es precavido en la anticipación de los peligros, sufrirá menos infortunios. - Séneca",

    "Ser franco con tus intenciones de manera clara y honesta es esencial para establecer tus objetivos en tus relaciones. Define tus objetivos de forma directa cuando vayas a formar relaciones con otras personas para evitar malentendidos. Aborda tus intenciones con sinceridad, evita rodeos y presta atención a tus gestos y expresiones al hablar. Escucha a los demás y no dudes en preguntar sobre sus objetivos contigo. Asegúrate de que tus acciones coincidan con tus palabras.<br>" +
    "Fuente: <a href='https://es.wikihow.com/ser-franco' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/2d-2xfam5kg' target='_blank'>Enlace 2 (Video)</a><br>" +
    "La sinceridad es el camino más corto hacia la verdad. – Charles Dickens",

    "Vence la procrastinación consiste en evitar posponer tareas o actividades importantes para luego no retornarlas. Para evitar esto, prioriza tus tareas, divídelas en pasos más pequeños y enfócate en una tarea a la vez. Supera la resistencia inicial, celebra tus logros, cuida tu bienestar físico y mental. Aprende a establecer límites y di 'no' cuando sea necesario. Aprovecha tus momentos más productivos y aborda primero las tareas menos agradables.<br>" +
    "Fuente: <a href='https://psicologosysalud.cl/procrastinacion-la-verdadera-razon-de-por-que-lo-haces-y-como-evitarlo/' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/hvdbei-nspk' target='_blank'>Enlace 2 (Video)</a><br>" +
    "No dejes para mañana lo que puedes hacer hoy. - Benjamín Franklin",

    "Construye relaciones saludables basadas en la reciprocidad, el respeto, la comunicación abierta y el apoyo mutuo, ya sea en amistades o relaciones sentimentales. Los rasgos clave incluyen una comunicación clara y efectiva, empatía, respeto constante, apoyo incondicional, límites saludables y la resolución constructiva de conflictos.<br>" +
    "Fuente: <a href='https://www.psychologytoday.com/es/blog/como-es-una-relacion-sana' target='_blank'>Enlace 1</a><br>" +
    "Eres el promedio de las cinco personas con las que te relacionas– Jim Rohn"
];

const botonDecisiones = document.getElementById("decisionesBtn");
const displayDecisiones = document.getElementById("decisionesDisplay");

botonDecisiones.addEventListener("click", () => {
    const indiceAleatorio = Math.floor(Math.random() * Decisiones.length);
    displayDecisiones.innerHTML = Decisiones[indiceAleatorio];

    // Calcular el desplazamiento para centrar el elemento en la parte media
    const windowHeight = window.innerHeight;
    const elementHeight = displayDecisiones.clientHeight;
    const middleOffset = (windowHeight - elementHeight) / 2;

    displayDecisiones.scrollIntoView({ behavior: "smooth", block: "start" });

    // Desplazar hacia arriba para centrar el elemento en la parte media
    window.scrollBy(0, -middleOffset);
});
