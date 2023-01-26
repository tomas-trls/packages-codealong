import "./style.scss";
import confetti from "canvas-confetti";
import ColorThief from "colorthief";

const colorThief = new ColorThief();

const confettiButton = document.querySelector("#confetti-button");
const dogImage = document.querySelector("#dog-image");
const imageUrlInput = document.querySelector("#image-url-input");

const randomInRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

const fireConfetti = colorPalette => {
  const confettiOptions = {
    particleCount: randomInRange(50, 100),
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    origin: { y: 0.6 },
    colors: colorPalette,
  };

  confetti(confettiOptions);
};

const handleConfettiPress = () => {
  fireConfetti();
};

const onImageLoad = () => {
  const color = colorThief.getColor(dogImage);
  const colorPalette = colorThief.getPalette(dogImage);

  const body = document.querySelector("body");
  body.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;

  fireConfetti(colorPalette);
};

const handleUrlInput = event => {
  dogImage.src = event.target.value;
};

confettiButton.addEventListener("click", handleConfettiPress);
imageUrlInput.addEventListener("input", handleUrlInput);

if (dogImage.complete) {
  onImageLoad();
} else {
  dogImage.addEventListener("load", onImageLoad);
}
