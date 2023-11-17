const frases = [
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    "El secreto de la creatividad es saber cómo esconder tus fuentes.",
    "La única manera de hacer un gran trabajo es amar lo que haces.",
    "La oportunidad no golpea dos veces en la misma puerta.",
    "Tu eres tu motor.",
    "Eres suficiente",
    "Todo pasa",
    "Haz hoy lo que puedes hacer mañana",
    "El éxito es 99% fracaso.",
];

const botonFrase = document.getElementById("fraseBtn");
const displayFrase = document.getElementById("fraseDisplay");

botonFrase.addEventListener("click", () => {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    displayFrase.textContent = frases[indiceAleatorio];

    // Calcular el desplazamiento para centrar el elemento en la parte media
    const windowHeight = window.innerHeight;
    const elementHeight = displayFrase.clientHeight;
    const middleOffset = (windowHeight - elementHeight) / 2;

    displayFrase.scrollIntoView({ behavior: "smooth", block: "start" });

    // Desplazar hacia arriba para centrar el elemento en la parte media
    window.scrollBy(0, -middleOffset);
});

