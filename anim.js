// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "A DONDE FUISTE CORAZON?", time: 2 },
  { text: "TE TARDASTE UNA VIDA", time: 9 },
  { text: "PARECE UNA ETERNIDAD", time: 14 },
  { text: "CUANDO COMPRAS EN LA ESQUINA", time: 18 },
  { text: "SINO ESTAMOS CERCA EL TIEMPO QUEMA", time: 24 },
  { text: "LAS HORAS SON LARGAS, FRIAS Y ETERNAS", time: 29 },
  { text: "PERO SI TE ACERCAS", time: 32 },
  { text: "¡CORAZON!", time: 36 },
  { text: "EL TIEMPO VUELA", time: 37 },
  { text: "RELOJ, HAGAMOS UN TRATO", time: 44 },
  { text: "Y CONGELATE EL RATO QUE ME VEAS JUNTO A ELLA", time: 50 },
  { text: "Y SI VEZ QUE.. DE MI YA SE ALEJA", time: 54 },
  { text: "HASTA QUE VUELVA, POR FAVOR ACELERA", time: 59 },
  { text: "...............", time: 65 },
  { text: "A DONDE VAS TAN RAPIDO?", time: 84 },
  { text: "SI HACE ND QUE LLEGASTE", time: 91 },
  { text: "CONTIGO HASTA LA ETERNIDAD <3", time: 97 },
  { text: "SE SIENTE COMO UN INSTANTE", time: 100 },
  { text: "CUANDO ESTAMOS JUNTOS EL TIEMPO ES INJUSTO", time: 104 },
  { text: "LAS HORAS SON MINUTOS, LOS MINUTOS SEGUNDOS", time: 110 },
  { text: "PERO SI TE ALEJAS -CORAZON<3- EL TIEMPO SE CONGELA", time: 115 },
  { text: "RELOJ...", time: 120 },
  { text: "HAGAMOS UN TRATO", time: 121 },
  { text: "Y CONGELATE EL RATO QUE ME VEAS JUNTO A ELLA", time: 122 },
  { text: "Y SI VEZ QUE... DE MI SE ALEJA", time: 127 },
  { text: "HAZTA QUE VUELVA !POR FAVOR ACELERA!", time: 132 },
  { text: "TE AMO <3", time: 134 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);