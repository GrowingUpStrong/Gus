const ambiente = [
    "Selecciona tu círculo, ya sea en el contenido que consumes o las personas con las que te relacionas. Esto es esencial para tu desarrollo personal. Debes elegir amistades o contenido basándote en tus objetivos, valores, mentalidad, habilidades, aspiraciones, honestidad, tiempo de calidad y experiencias. Todos estos rasgos de tu ambiente afectarán tu desempeño en todos los aspectos de tu vida.<br>" +
    "Fuente: <a href='https://www.generacioneve.com/post/consejos-para-un-mejor-c%C3%ADrculo-social' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/yhyqnyqzb5i?Si=flzcekqc7c5a3mvg' target='_blank'>Enlace 2 (Video)</a><br>" +
    "La calidad de tu vida está determinada por la calidad de tus relaciones. – Anthony Robbins",

    "Cuida tu salud mental, esencial para mantener un equilibrio en tu vida. Puedes hacerlo asegurándote de descansar, alimentarte bien, hacer ejercicio, aprender a decir 'no', establecer límites saludables, integrar técnicas de relajación como la meditación, fomentar relaciones positivas, desarrollar la habilidad de reconocer y gestionar tus emociones de manera saludable, definir metas inspiradoras y buscar apoyos profesionales, familiares o amigos si es necesario.<br>" +
    "Fuente: <a href='https://www.isep.es/actualidad/10-consejos-cuidar-salud-mental/' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/DW-Wj62NOjY?si=1jRpngu9Zd1VlDUa' target='_blank'>Enlace 2 (Video)</a><br>" +
    "La mente es como un jardín: si no se cuida, crecerán las malas hierbas. Pero si se cultiva con amor y atención, florecerá en su máximo esplendor. - Buda",

    "Apoya a tus compañeros, vital para superar los desafíos de la vida y el desarrollo personal. Puedes hacerlo escuchando, mostrando empatía, ofreciendo críticas constructivas, celebrando logros, compartiendo conocimientos, ayudando a alcanzar metas, fomentando la resiliencia, respetando la autonomía, siendo un modelo a seguir, brindando tiempo de calidad y fomentando la competitividad entre ustedes.<br>" +
    "Fuentes: <a href='https://psicologiaymente.com/social/companerismo-definicion-ventajas' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/mwosz39kmu8' target='_blank'>Enlace 2 (Video)</a><br>" +
    "El compañerismo es el pegamento que une las almas humanas – John C. Maxwell",

    "Vuelve el ejercicio un hábito perfecto para mejorar tu salud física y mental en la adolescencia y la juventud. Puedes comenzar estableciendo metas realistas, eligiendo una actividad que disfrutes, diseñando una rutina adecuada, buscando asesoramiento profesional si es necesario, empezando con ejercicios de baja intensidad, considerando un compañero de entrenamiento y celebrando tus logros. Al mismo tiempo, busca compañerismo y fraternidad en dichas actividades.<br>" +
    "Fuente: <a href='https://www.mayoclinic.org/es/healthy-lifestyle/fitness/in-depth/exercise/art-20048389' target='_blank'>Enlace 1</a><br>" +
    "Video: <a href='https://youtu.be/edCdGNlDqAA' target='_blank'>Enlace 2 (Video)</a><br>" +
    "El ejercicio es el vehículo que nos transporta hacia la realización de nuestros sueños más audaces. - Les Brown"
];

const botonAmbiente = document.getElementById("ambienteBtn");
const displayAmbiente = document.getElementById("ambienteDisplay");

botonAmbiente.addEventListener("click", () => {
    const indiceAleatorio = Math.floor(Math.random() * ambiente.length);
    displayAmbiente.innerHTML = ambiente[indiceAleatorio];

    // Calcular el desplazamiento para centrar el elemento en la parte media
    const windowHeight = window.innerHeight;
    const elementHeight = displayAmbiente.clientHeight;
    const middleOffset = (windowHeight - elementHeight) / 2;

    displayAmbiente.scrollIntoView({ behavior: "smooth", block: "start" });

    // Desplazar hacia arriba para centrar el elemento en la parte media
    window.scrollBy(0, -middleOffset);
});
