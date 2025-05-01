document.addEventListener("DOMContentLoaded", function() {
  // Obtenemos todos los audios en la página
  const audios = document.querySelectorAll(".audio");

  // Añadimos un evento para cada audio
  audios.forEach(audio => {
    audio.addEventListener("play", function() {
      // Al reproducir uno, pausamos todos los demás
      audios.forEach(otherAudio => {
        if (otherAudio !== audio) {
          otherAudio.pause();
          otherAudio.currentTime = 0; // Opcional: reinicia la canción
        }
      });
    });
  });
});
