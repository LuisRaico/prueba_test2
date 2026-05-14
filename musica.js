// Obtener elemento de audio
const audio = document.getElementById('bgmusic');

// Configurar audio
audio.loop = true;
audio.volume = 0.5;

// Función para reproducir
function playAudio() {
  audio.muted = false;
  audio.play().catch(err => console.log('Reproduciendo...'));
}

// Reproducir al hacer click
document.addEventListener('click', playAudio, { once: true });
document.addEventListener('touchstart', playAudio, { once: true });

// Intentar reproducir después de 1 segundo
setTimeout(() => {
  audio.play().catch(err => console.log('Click para reproducir'));
}, 1000);
