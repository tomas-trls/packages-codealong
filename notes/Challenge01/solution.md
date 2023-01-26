# Challenge 1- Got Confetti?

Include a button with an id in the HTML

```html
<button id="confetti-button">Fire Confetti</button>
```

Create a fire confetti button and hook it up to the on click of the button, it's important to note we do want two separate functions here: one for the fireConfetti and one to handle the event listener (this will become important when we add parameters to fireConfetti later)

```js
import "./style.scss";
import confetti from "canvas-confetti";

const confettiButton = document.querySelector("#confetti-button");

const randomInRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

const fireConfetti = () => {
  const confettiOptions = {
    particleCount: randomInRange(50, 100),
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    origin: { y: 0.6 },
  };

  confetti(confettiOptions);
};

const handleConfettiPress = () => {
  fireConfetti();
};

confettiButton.addEventListener("click", fireConfetti);
```
