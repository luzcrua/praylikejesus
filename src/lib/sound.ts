const playHoverSound = () => {
  const audio = new Audio("/hover-sound.mp3");
  audio.volume = 0.1;
  audio.play().catch(() => {
    // Ignora erros de reprodução automática
  });
};

const playClickSound = () => {
  const audio = new Audio("/click-sound.mp3");
  audio.volume = 0.2;
  audio.play().catch(() => {
    // Ignora erros de reprodução automática
  });
};

export { playHoverSound, playClickSound };