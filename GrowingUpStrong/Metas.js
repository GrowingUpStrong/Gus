const Metas = [
    "Construye tu físico ideal persigue el físico que quieres través de esfuerzo y disciplina, pero recuerda que todo esto toma tiempo/esfuerzo. Intenta definir tus metas, investiga disciplinas que ayuden a formar el cuerpo que quieres, consulta a un nutricionista sobre la alimentación que debes llevar, ejercítate regularmente, descansa lo suficiente, mantente paciente, registra tus avances. Evita compararte con otros<br>" +
    "Fuente: <a href='https://www.revistagq.com/articulo/como-entrenar-mejor-10-habitos-saludables' target='_blank'>Enlace 1</a><br>" +
    "Fuente: <a href='https://fitnesskaizen.s3.amazonaws.com/uploads/y0d40pmxug1zqwqfrocylxyknjkynvnybkfzjh6v.mp4' target='_blank'>Enlace 2 (Video)</a><br>" +
    "<a href='https://youtu.be/kqqzBRpuLFs' target='_blank'>Ronnie Coleman 'Todo el mundo quiere ser un campeón, pero nadie quiere hacer lo que hay que hacer para serlo.'</a>",

    "Gestionar tu energía sexual, incluyendo la masturbación, es esencial para la superación personal. Puedes considerar dejar de masturbarte para explorar posibles efectos adversos y beneficios. Para hacerlo, adquiere conciencia de tus motivaciones, identifica desencadenantes. Descubre actividades constructivas para ocupar tu tiempo, establece límites y una rutina, busca apoyo profesional si es necesario, celebra los progresos, e incorpora el ejercicio para canalizar la energía sexual.<br>" +
    "Efectos adversos: <a href='https://curadas.com/2018/07/15/danos-de-la-pornografia-y-la-masturbacion-en-el-cerebro/' target='_blank'>Enlace 1</a><br>" +
    "Beneficios del nofap: <a href='https://www.eldesafiodelfenix.com/nofap/nofap-beneficios/' target='_blank'>Enlace 2</a><br>" +
    "<a href='https://youtu.be/4mopmj5tm9g' target='_blank'>Deepak Chopra 'La energía sexual es la fuerza creativa más poderosa que poseemos.'</a>",

    "Persigue la excelencia Consiste en siempre que hagas algo trates de hacerlo mejor que puedas. Puedes intentar establecer metas desafiantes, aprender de expertos, cultivar el aprendizaje constante, practicar la disciplina, practicar la constancia, abraza la mejora continua, sal de tu zona de confort, rodéate de personas inspiradoras y por sobre todo recuerda que la excelencia se construye a través de acciones repetidas.<br>" +
    "Fuente: <a href='https://lamenteesmaravillosa.com/4-formas-combatir-la-mediocridad/' target='_blank'>Enlace 1</a><br>" +
    "<a href='https://youtu.be/5hg538lfmwk' target='_blank'>Aristóteles 'Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto, sino un hábito.'</a>",

    "Aprender a pelear no implica buscar conflictos, sino estar preparado para situaciones de riesgo y proteger a ti y a tus seres queridos. Puedes aprender tomando clases de defensa personal, manteniendo la conciencia del entorno, adquiriendo técnicas de golpes o bloqueos, entrenando regularmente, desarrollando tu confianza y autoestima, simulando situaciones reales y conociendo las leyes locales sobre legítima defensa. Es esencial priorizar la prevención/calma, evitando la confrontación siempre que sea posible.<br>" +
    "Fuente: <a href='https://mugendo.es/como-aprender-a-pelear-y-defenderse/' target='_blank'>Enlace 1</a><br>" +
    "LEYES: <a href='https://abogadorodriguezdiaz.com.ar/legitima-defensa-en-argentina/' target='_blank'>Enlace 2</a><br>" +
    "<a href='https://youtu.be/fomkke-X6Ik' target='_blank'>Nicolás Maquiavelo 'El fin justifica los medios.'</a>"
];

const botonMetas = document.getElementById("metasBtn");
const displayMetas = document.getElementById("metasDisplay");

botonMetas.addEventListener("click", () => {
    const indiceAleatorio = Math.floor(Math.random() * Metas.length);
    displayMetas.innerHTML = Metas[indiceAleatorio];

    // Calcular el desplazamiento para centrar el elemento en la parte media
    const windowHeight = window.innerHeight;
    const elementHeight = displayMetas.clientHeight;
    const middleOffset = (windowHeight - elementHeight) / 2;

    displayMetas.scrollIntoView({ behavior: "smooth", block: "start" });

    // Desplazar hacia arriba para centrar el elemento en la parte media
    window.scrollBy(0, -middleOffset);
});
