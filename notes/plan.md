# lesson-start

## Canvas Confetti

Canvas Confetti is a package that creates a confetti explosion on our webpage!

- Navigate to [NPM Registry](https://www.npmjs.com/) and search for "canvas confetti"
- Following the installation instructions on [the page](https://www.npmjs.com/package/canvas-confetti), we should use `npm install --save canvas-confetti` to use this in our application

## [Challenge 1](./Challenge01/challenge.md)

## Color Thief

Color Thief is a package that gives us the dominant color from an image, as well as creating a color palette based on an image.

- Add the following image element to your index.html:

```html
<img
  id="dog-image"
  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  crossorigin="anonymous"
/>
```

- Grab the element in app.js too:

```js
const dogImage = document.querySelector("#dog-image");
```

- Navigate to [NPM Registry](https://www.npmjs.com/) and search for "colorthief" (all one word, there is a hyphenated version which we don't want!)
- Following the installation instructions on [the page](https://lokeshdhakar.com/projects/color-thief/#getting-started) ("Using in the browser" -> "Import as an ES6 module")

  - `npm i --save colorthief` to add this in our application

  - **Students may have issues installing the package** If they do run into any issues try installing the version below.
  - `npm i --save colorthief@2.2.0`
  - Add `const colorThief = new ColorThief();`

- First you will need to check if the img has completed. If it has you run the `onImageLoad()` function if it hasn't you can set an "on load" event listener on the image ro run it once it has loaded.
- With `onImageLoad()` we're going to use the getColor method from colorThief. It returns an array with the dominant color's rgb value:

```js
const onImageLoad = () => {
  const color = colorThief.getColor(dogImage);
  console.log(color);
};

if (dogImage.complete) {
  onImageLoad();
} else {
  dogImage.addEventListener("load", onImageLoad);
}
```

- Enter the rgb codes into google to see what color they come out as (search "rgb" followed by the three number values)
  - Try replacing the image src with this to prove the numbers change: `https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60`
- Update the background color of the entire body from the rgb array we're given

```js
const onImageLoad = () => {
  const color = colorThief.getColor(dogImage);
  const body = document.querySelector("body");

  body.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
};
```

## [Challenge 2](./challenge02/challenge.md)

## GitHub Pages

- Update the package.json file so it has the homepage and author property
  - `"homepage": "https://*your-username*.github.io/*your-repo-name*"`
  - `"author": "*your-name*"`
- Make sure the build folder is up to date by running `npm run build`
- Use the deploy command `npm run deploy`
- Check your github for a new deploy
  - There will also be a new branch called "gh-pages" which contains the contents of the build folder
