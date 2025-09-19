const whiteKeys = document.querySelectorAll(".white-key");
const blackKeys = document.querySelectorAll(".black-key");

function playSound(sound) {
  sound.play();
}

blackKeys.forEach((black, index) => {
  black.addEventListener("mouseenter", () => {
    let sound = new Audio(`./sounds/black-keys/${index}.mp3`);
    playSound(sound);
  });
});

whiteKeys.forEach((white, index) => {
  white.addEventListener("mouseenter", () => {
    let sound = new Audio(`./sounds/white-keys/${index}.mp3`);
    playSound(sound);
  });
});




// blackKeys.forEachI((black, index) => {
//   black.addEventListener('ckick', () => {
//     let sound = new sound(`./sounds/black-keys/${index}.mp3`);
//     playSound(sound);
//   });
// });
