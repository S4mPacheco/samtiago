// Lista de idiomas con la frase "Te amo mucho"
const traducciones = [
  "Te amo muito",
  "I love you so much",
  "Je t'aime beaucoup",
  "Ich liebe dich sehr",
  "Ti amo tanto",
  "Te quiero mucho",
  "Σ'αγαπώ πολύ",
  "Я тебя очень люблю",
  "我非常爱你",
  "私はあなたをとても愛しています",
  "Eu te amo muito",
  "Ik hou zoveel van je",
  "Jeg elsker deg så mye",
  "Ich liebe dich so sehr",
  "Me encanta usted mucho"
];

// Selecciona el elemento para cambiar el texto
const mensaje = document.querySelector(".mensagem.idioma");

// Inicializa el índice
let indice = 0;

// Función para actualizar el texto
function cambiarIdioma() {
  mensaje.textContent = traducciones[indice];
  indice = (indice + 1) % traducciones.length; // Bucle infinito
}

// Cambia el texto cada 2 segundos
setInterval(cambiarIdioma, 2000);
