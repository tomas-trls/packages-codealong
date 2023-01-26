# Challenge 2- Color Me Impressed!

Add a url input with label in the html:

```html
<label for="image-url-input">Image Url</label>
<input type="url" id="image-url-input" />
```

Create an "input" event listener that updates the dogImage source attribute

```js
const imageUrlInput = document.querySelector("#image-url-input");

//...

const handleUrlInput = (event) => {
  dogImage.src = event.target.value;
};

//...

imageUrlInput.addEventListener("input", handleUrlInput);
```

## Extension

Modify the existing fireConfetti function to accept an array of colors

```js
const fireConfetti = (colorPalette) => {
  const confettiOptions = {
    particleCount: randomInRange(50, 100),
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    origin: { y: 0.6 },
    colors: colorPalette,
  };

  confetti(confettiOptions);
};
```

Modify the existing onImageLoad function to give us the colorPalette and pass it through to the fireConfetti function

```js
const onImageLoad = () => {
  const color = colorThief.getColor(dogImage);
  const colorPalette = colorThief.getPalette(dogImage);

  const body = document.querySelector("body");
  body.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;

  fireConfetti(colorPalette);
};
```
