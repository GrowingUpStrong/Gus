const Autoestima = [
    "Fortalece tu autoconfianza enriquece la personalidad y aporta carisma, creatividad, seguridad y habilidades sociales. Para aumentarla, reconoce tus fortalezas, establécete metas realistas, supera miedos, cuida tu bienestar físico y emocional, cultiva una mentalidad optimista, aprende de errores, rodéate de personas positivas, y busca el desarrollo personal. <br>" +
    "Fuentes: <a href='https://psicopedia.org/3344/autoconfianza-claves-para-mejorarla/' target='_blank'>Fuente 1</a> - <a href='https://youtu.be/iurkvvu1gyc?Si=40tew4kulfj-aznn' target='_blank'>Video 1</a><br>" +
    "La confianza en uno mismo es el primer secreto del éxito. - Ralph Waldo Emerson",

    "No te conviertas en un adulador (chupamedias). Valora tu tiempo y atención y no gastes energía tratando de complacer a quienes no te valoran. Para evitarlo, mantén una perspectiva realista de los demás, fortalece tu autoestima, diversifica tus intereses, establece límites saludables, cultiva conexiones genuinas, busca equilibrio en tu vida y practica el amor propio. <br>" +
    "Fuentes: <a href='https://www.psyalive.com/blog/amor-propio/' target='_blank'>Fuente 2</a> - <a href='https://youtu.be/xasovuufds0' target='_blank'>Video 2</a><br>" +
    "Amarse a uno mismo es el comienzo de un romance que durará toda la vida. - Oscar Wilde",

    "Cultiva tu apariencia ya que impacta en la primera impresión que los demás tienen sobre ti. Para mejorar tu apariencia, mantén una estricta higiene, cuida piel y cabello, conserva tus prendas y zapatos en buen estado, usa prendas lisas de colores neutros y que sean de tu talla, mantén una postura segura, haz ejercicio, come saludablemente, mantén una actitud positiva y comunica confianza físicamente. <br>" +
    "Fuentes: <a href='https://www.ufv.es/cetys/blog/por-que-es-importante-cuidar-tu-imagen-personal/' target='_blank'>Fuente 3</a> - <a href='https://youtu.be/xwbzhug8jqk?Si=n3qexa3vby2ttcts' target='_blank'>Video 3</a> - <a href='https://youtu.be/Rx5LFHEHHXA?Si=arx6udjgvqlafg2j' target='_blank'>Video 4</a><br>" +
    "Tu apariencia es tu tarjeta de presentación ante el mundo. - Adagio popular",

    "Evitar el porno especialmente para los jóvenes, debido a sus graves consecuencias psicológicas y físicas. Para dejar este hábito, comprométete contigo mismo, identifica desencadenantes, busca apoyo, establece metas, encuentra actividades saludables que te distraigan, limita el acceso a contenido relacionado y practica la autorreflexión. <br>" +
    "Fuentes: <a href='https://psicologiaavanzada.es/7-formas-para-dejar-de-ver-porno' target='_blank'>Fuente 4</a> - <a href='https://youtu.be/c6ly79rk8a4' target='_blank'>Video 5</a><br>" +
    "No cedas a los deseos sexuales, encuentra la fortaleza en el autocontrol. - Adagio popular"
];

const botonFrase = document.getElementById("fraseBtn");
const displayFrase = document.getElementById("fraseDisplay");

botonFrase.addEventListener("click", () => {
    const indiceAleatorio = Math.floor(Math.random() * Autoestima.length);
    displayFrase.innerHTML = Autoestima[indiceAleatorio];

    // Calcular el desplazamiento para centrar el elemento en la parte media
    const windowHeight = window.innerHeight;
    const elementHeight = displayFrase.clientHeight;
    const middleOffset = (windowHeight - elementHeight) / 2;

    displayFrase.scrollIntoView({ behavior: "smooth", block: "start" });

    // Desplazar hacia arriba para centrar el elemento en la parte media
    window.scrollBy(0, -middleOffset);
});