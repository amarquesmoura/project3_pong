# Pong Game

This is a project to showcase code in pure JavaScript using ES2015 features. It also involved using Webpack for creating the development environment and building the production files. It is a basic pong game using SVGs.

## Setup

**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

## Control Keys for playing on a computer

**Player 1:**

- a: up
- z: down

**Player 2:**

- ▲ : up
- ▼: down

## Control actions for playing on a mobile device

**Player 1:**

- Tilt Right: up
- Tilt Left: down

**Player 2:**

- Tilt Up : up
- Tilt Down: down

## Skills learned

- Installing webpack and dependencies
- Creating a webpack.config file to automate tasks
- Creating partials and exporting/importing from them
- Using classes and constructors
- Using arrow functions
- Using template strings
- Destructuring objects

## Main Takeaways

1 - JavaScript ES2015 brings many enhancements, especially ones that optimize Object Oriented Programing.

2 - Webpack creates a dinamic development environment since it doesn't require to build to disk everytime there is a change. Using a virtual server running on memory, the response on the browser is immediate.

3 - SVGs are a powerful way to add graphics and animations to a page, in a programatic form.

4 - For my stretch goal, I chose to make it possible playing the game on a mobile device. This was because my nephew was disapointed that he could not play the game on his cellphone when I shared the link with him. I learned how to use the deviceOrientation event as a controller.
