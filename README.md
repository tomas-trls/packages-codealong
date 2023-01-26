# Packages Codealong 💼

## Lesson 👩‍🏫

Using the Canvas Confetti, Color Thief, GitHub Pages packages to introduce NPM.

The notes folder contains the plan for lesson, it contains steps, snippets, and styles you will need to complete the branch.

### Branches 🌿

- main
- lesson-start

### Setup

- Use this template to create a new repository, clone it down and open in VS Code
- Change to lesson-start branch: `git checkout lesson-start`
- Install dependencies: `npm install`

<br/>
<hr/>
<br/>

## Quickstart 🦧

- Install the dependencies `npm i`
- Run webpack and launch the live server: `npm start`
  - This will run a webpack build in "watch" mode, automatically looking for changes in src and bundling them into the build folder.
  - This will look for an `index.html` in the build folder, automatically opening it in your browser

<br/>
<hr/>
<br/>

## Deployment Instructions 🚀

- Modify the `package.json` "homepage" property to match your own (https://\*your-username\*.github.io/\*your-repository-name\*)
- Run `npm run build` in the terminal to create a build folder
- Run `npm run deploy` in the terminal, this will create a "gh-pages" branch in your repository and deploy a copy of your local build folder

<br/>
<hr/>
<br/>

## Available Scripts 📜

### `build`

Compiles your code into a build folder (runs once)

### `build:dev`

Compiles your code into a build folder (continuously watching for changes)

### `server`

Hosts your build folder's index.html on a local server, and opens up in your default browser

### `start`

Combines and runs the `build:dev` and `server` script in parallel.

### `deploy`

Deploys your build folder through GitHub Pages
