const personajes = [
    "Un unicornio existencialista que busca el significado de la vida.",
    "Un científico loco que es mitad pato, mitad robot.",
    "Una princesa alienígena que se escapa de su planeta para explorar la Tierra.",
    "Un pingüino detective con una obsesión por las conspiraciones.",
    "Un gato parlante que es un genio matemático.",
    "Un robot que solo habla en rimas poéticas.",
    "Un héroe melancólico que lucha contra villanos existenciales.",
    "Un ser de otra dimensión con una obsesión por los videojuegos retro.",
    "Un pulpo con una tienda de burbujas mágicas.",
    "Un plátano con habilidades de detective que resuelve crímenes frutales.",
    "Una nube con una personalidad gruñona pero con un corazón tierno.",
    "Un árbol parlante que es un maestro zen.",
    "Un extraterrestre que asiste a la escuela secundaria disfrazado de humano.",
    "Una rata de laboratorio que inventa máquinas surrealistas.",
    "Un caballo antropomórfico que es una estrella de cine retirada.",
    // ... (otros personajes)
];

const frasesFinales = [
   "Y así, mientras el sol se ponía en el cielo de colores psicodélicos, los amigos sabían que su aventura estaba lejos de terminar.",
    "En el universo del caos, encontraron la armonía del absurdo.",
    "El amor puede ser tan extraño como una dimensión paralela, pero igual de real.",
    "Entre risas y lágrimas, la vida sigue su viaje impredecible.",
    "En el multiverso de posibilidades, eligieron la más absurda y maravillosa.",
    "Descubrieron que la verdadera magia está en aceptar lo inesperado.",
    "A veces, la locura es solo el comienzo de una gran historia.",
    "En el laberinto de la existencia, encontraron la salida del absurdo.",
    "A través de los altibajos cósmicos, la amistad siempre prevalece.",
    "El final era solo el principio de otra loca odisea.",
    "Entre las sombras de la realidad, hallaron la luz de la comedia.",
    "El caos puede ser hermoso, y la belleza puede ser caótica.",
    "En un rincón olvidado del espacio, escribieron su propia epopeya absurda.",
    "Cambiaron el guion de la realidad y crearon su propia tragicomedia.",
    "En la danza cósmica, encontraron la alegría de la absurdidad."
];

const principios = [
   "Un ser mágico aparece en el refrigerador y le ofrece al protagonista la oportunidad de explorar dimensiones paralelas a cambio de un sándwich.",
    "Un científico descubre una puerta que lleva a un mundo donde las leyes de la física son inversas.",
    "Un día, todos los objetos inanimados en la ciudad cobran vida y comienzan a tener sus propias historias.",
    "Un libro antiguo revela hechizos que permiten a los personajes viajar entre líneas de tiempo.",
    "Un portal a otra dimensión se abre en la parte trasera de una tienda de donas.",
    "Un meteorito aterriza en el jardín de un personaje, otorgándole habilidades extrañas.",
    "Un grupo de amigos descubre un espejo que refleja sus emociones en lugar de su apariencia física.",
    "Un personaje encuentra un control remoto que le permite rebobinar y adelantar su propia vida.",
    "Un mensaje misterioso llega a través de una radio antigua, llevando a los personajes a una búsqueda interdimensional.",
    "Un día, el cielo se llena de globos que llevan mensajes del futuro.",
    "Una llave perdida abre una puerta a un mundo donde los sueños se vuelven realidad.",
    "Un personaje compra un tiquete de autobús que lo lleva a una ciudad donde todos son personajes de caricaturas.",
    "Un objeto antiguo de una tienda de segunda mano concede deseos, pero cada deseo tiene un efecto cómico e inesperado.",
    "Un dispositivo de realidad virtual sumerge a los personajes en un mundo de dibujos animados.",
    "Una tormenta magnética transporta a los personajes a una dimensión donde las leyes de la gravedad son impredecibles."
];

const tramas = [
     "En una competencia intergaláctica de comedia, los personajes deben enfrentarse a los cómicos más divertidos de todas las dimensiones.",
    "Después de un experimento científico fallido, los personajes deben navegar por un universo de lógica surrealista.",
    "Una invasión de criaturas mágicas convierte la ciudad en un escenario de fantasía hilarante.",
    "Los personajes deben resolver acertijos cósmicos para evitar que el tiempo colapse.",
    "Una carrera interdimensional para encontrar el objeto más ridículo del multiverso.",
    "Una competencia de baile que determina el equilibrio cósmico entre el caos y la armonía.",
    "Un concurso de talentos intergaláctico donde los participantes deben demostrar sus habilidades más absurdas.",
    "Una búsqueda para encontrar el sentido de la vida que lleva a lugares tan extraños como filosóficos.",
    "Los personajes deben enfrentarse a sus contrapartes de dimensiones alternativas en un torneo cósmico.",
    "Un evento astronómico desata caos en la realidad, y los personajes deben restaurar el orden.",
    "Una expedición para encontrar el chiste más antiguo y poderoso del universo.",
    "Un concurso culinario donde los ingredientes son de diferentes dimensiones.",
    "Los personajes deben navegar por un laberinto de paradojas para salvar la realidad.",
    "Una misión para detener un virus informático que transforma la realidad en un videojuego cómico.",
    "Una competencia de modales absurdos donde los personajes deben demostrar su cortesía cósmica."
];

const desenlaces = [
     "Después de superar desafíos cósmicos, los personajes ganan un deseo, pero deciden que la verdadera recompensa es la amistad.",
    "Una convención interdimensional reúne a personajes de todas las realidades para celebrar el absurdo.",
    "Los personajes descubren que la clave para la paz en el multiverso es la risa.",
    "Después de una odisea interdimensional, los personajes regresan a casa con historias cómicas que contar.",
    "Una tormenta temporal resuelve todos los problemas cósmicos y devuelve la normalidad.",
    "Después de un concurso de talentos interdimensional, los personajes aprenden que la verdadera magia está en ser ellos mismos.",
    "Un encuentro con su propia versión del pasado lleva a los personajes a una reflexión cósmica sobre el crecimiento personal.",
    "Después de una competencia culinaria, los personajes descubren que la verdadera receta para la felicidad es compartir momentos absurdos.",
    "La resolución de acertijos cósmicos revela que el verdadero sentido de la vida es disfrutar el viaje.",
    "Una celebración interdimensional reúne a personajes de todas las realidades para una fiesta cósmica.",
    "Después de encontrar el chiste más antiguo, los personajes descubren que la risa es la fuerza más poderosa del universo.",
    "La superación de paradojas lleva a los personajes a una realidad donde todos viven en armonía cósmica.",
    "La derrota del virus informático devuelve la realidad a su estado normal, pero con toques cómicos.",
    "Después de una odisea surrealista, los personajes regresan a casa con una nueva apreciación por lo absurdo de la vida.",
    "Un encuentro con versiones futuras de sí mismos revela que la verdadera felicidad está en abrazar lo impredecible."
];

const objetos = [
    "Un par de lentes de sol que permiten ver la realidad en clave de comedia.",
    "Una linterna que revela dimensiones ocultas al iluminarlas.",
    "Un reloj de bolsillo que ralentiza o acelera el tiempo a voluntad.",
    "Una caja de cereal mágica que otorga sabiduría cósmica con cada bocado.",
    "Una pluma que reescribe la realidad con cada palabra escrita.",
    "Una almohada que permite soñar con lugares de dimensiones desconocidas.",
    "Un espejo que muestra versiones alternativas de uno mismo.",
    "Una puerta plegable que lleva a diferentes lugares en cada apertura.",
    "Un mando a distancia que controla la gravedad en lugar de la televisión.",
    "Una mochila que contiene elementos de diferentes dimensiones.",
    "Un disco de vinilo que reproduce la banda sonora de la realidad.",
    "Unos zapatos que permiten caminar por el espacio y el tiempo.",
    "Un teléfono celular que permite llamar a versiones alternativas de uno mismo.",
    "Un puzzle que une fragmentos de realidades paralelas.",
    "Una taza de café que revela mensajes cósmicos en el fondo."
];
function generarHistoria() {
    const personaje = personajes[Math.floor(Math.random() * personajes.length)];
    const fraseFinal = frasesFinales[Math.floor(Math.random() * frasesFinales.length)];
    const principio = principios[Math.floor(Math.random() * principios.length)];
    const trama = tramas[Math.floor(Math.random() * tramas.length)];
    const desenlace = desenlaces[Math.floor(Math.random() * desenlaces.length)];
    const objetoSeleccionado = objetos[Math.floor(Math.random() * objetos.length)]; // Cambié el nombre de la variable para evitar conflictos

    const historia = `
        <h2>${personaje}</h2>
        <p><strong>Principio:</strong> ${principio}</p>
        <p><strong>Trama:</strong> ${trama}</p>
        <p><strong>Desenlace:</strong> ${desenlace}</p>
        <p><strong>Frase Final:</strong> ${fraseFinal}</p>
        <p><strong>Objeto:</strong> ${objetoSeleccionado}</p>
    `;

    document.getElementById('historia-container').innerHTML = historia;
}
