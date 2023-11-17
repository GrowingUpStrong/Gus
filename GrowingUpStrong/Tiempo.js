const Tiempo = [
    "Cuida tus horas de sueño, ya que afectan directamente tu rendimiento diario. Para evitar ser un zombi, evita el uso de dispositivos antes de dormir, establece una rutina de sueño, crea un ambiente relajante, evita energizantes antes de dormir, practica actividades relajantes, reduce la exposición a la luz azul, gestiona el estrés y asegúrate de armar un lugar propicio para dormir con pocas luces y poco ruido. <br>" +
    "Fuentes: <a href='https://www.gq.com.mx/cuidado-personal/articulo/beneficios-de-dormir-mas-temprano-segun-ciencia' target='_blank'>Fuente 1</a> - <a href='https://youtu.be/wpxcpe0dplq' target='_blank'>Video 1</a><br>" +
    "\"El sueño es el bálsamo que alivia las fatigas del día y prepara el espíritu para las batallas del mañana.\" Puedes obtener más información en el enlace proporcionado. - George Washington",

    "Crea una rutina flexible, una serie de tareas a realizar en el día para optimizar tu productividad y bienestar. Prioriza las responsabilidades y pospone las actividades satisfactorias. Diseña un horario, elabora una lista de tareas diarias, elimina distracciones, delega actividades cuando sea necesario, realiza evaluaciones periódicas para ajustar tu rutina según tus necesidades cambiantes. <br>" +
    "Fuentes: <a href='https://fundacionsyncronia.org/beneficios-de-tener-una-rutina/' target='_blank'>Fuente 2</a> - <a href='https://youtu.be/-bfoot18fhc' target='_blank'>Video 2</a><br>" +
    "\"La rutina es la piedra angular de la disciplina y el motor que impulsa nuestro crecimiento y éxito diario.\" - John C. Maxwell",

    "Recréate después de un día de trabajo es esencial para reducir el estrés y revitalizarse. La recreación implica dedicar tiempo a actividades que brinden satisfacción y renovación, con efectos positivos en el bienestar mental. Se sugiere realizar estas actividades al final del día como una recompensa. Puedes recrearte de diversas maneras, como explorar pasatiempos, conectarte con la naturaleza, liberar tu creatividad, pasar tiempo con seres queridos, cuidar tu bienestar y aprender por diversión. <br>" +
    "Fuentes: Para obtener ideas, visita <a href='https://experienciajoven.com/ejemplos-de-hobbies/' target='_blank'>Fuente 3</a> - <a href='https://actualidadplus.com/psicologia/la-recreacion-y-su-gran-importancia/' target='_blank'>Fuente 4</a> - <a href='https://youtu.be/4ib-QWJjq9A?si=zrEpBF72VYpr1RPo' target='_blank'>Video 3</a><br>" +
    "\"La recreación es una pausa que nos damos en el camino de la vida, para tomar aliento y contemplar el paisaje interior y exterior.\" - José Ingenieros",

    "Evita el contenido basura, ya que solo brinda entretenimiento superficial sin aportar beneficios reales. Para consumir mejor contenido, analiza detenidamente el contenido antes de consumirlo, controla el tiempo que pasas en redes sociales y emplea herramientas de bloqueo si es necesario. Realiza investigaciones previas, como leer reseñas y opiniones, establece límites de tiempo para tu consumo de contenido. Analiza sobre qué tanto de ese contenido se guarda en tu cabeza. <br>" +
    "Fuente: <a href='https://lamenteesmaravillosa.com/tik-tok-efectos-psicologicos-de-la-red-social-mas-influyente/' target='_blank'>Fuente 5</a> - <a href='https://www.youtube.com/watch?v=xfxuxvmk4vy' target='_blank'>Video 4</a><br>" +
    "\"Dejen de ver esa caja idiota.\" – Nuestros abuelos"
];

const botonTiempo = document.getElementById("tiempoBtn");
const displayTiempo = document.getElementById("tiempoDisplay");

botonTiempo.addEventListener("click", () => {
    const indiceAleatorio = Math.floor(Math.random() * Tiempo.length);
    displayTiempo.innerHTML = Tiempo[indiceAleatorio];

    // Calcular el desplazamiento para centrar el elemento en la parte media
    const windowHeight = window.innerHeight;
    const elementHeight = displayTiempo.clientHeight;
    const middleOffset = (windowHeight - elementHeight) / 2;

    displayTiempo.scrollIntoView({ behavior: "smooth", block: "start" });

    // Desplazar hacia arriba para centrar el elemento en la parte media
    window.scrollBy(0, -middleOffset);
});
