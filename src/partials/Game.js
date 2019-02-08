// Create alias for SVG namespace
import { SVG_NS, KEYS } from "../settings";

// Import Game elements classes
import Board from "./Board";
import Paddle from "./Paddle";
import Ball from "./Ball";
import Score from "./Score";

// Declare the Game class and instantiates its elements
export default class Game {
  constructor(element, width, height) {
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(element);
    // Instantiate the Board
    this.board = new Board(this.width, this.height);
    // Set properties for the paddles
    this.paddleWidth = 8;
    this.paddleHeight = 56;
    this.boardGap = 10;
    // Instantiate the players
    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      (this.height - this.paddleHeight) / 2,
      KEYS.a,
      KEYS.z
    );
    this.player2 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.width - this.paddleWidth - this.boardGap,
      (this.height - this.paddleHeight) / 2,
      KEYS.up,
      KEYS.down
    );
    // Set properties for the ball
    this.radius = 8;
    // Instantiate the Ball
    this.ball = new Ball(this.radius, this.width, this.height);
    // Instantiate the Score
    this.score1 = new Score(this.width / 2 - 22, 20, 30);
    this.score2 = new Score(this.width / 2 + 10, 20, 30);

    document.addEventListener("keydown", event => {
      if (event.key === KEYS.spaceBar) {
        this.pause = !this.pause;
      }
    });
  }

  // Declare render function for Game class
  render() {
    // Check if the game is paused
    if (this.pause) {
      return;
    }

    // Empty out game element before re-rendering
    this.gameElement.innerHTML = "";

    // Declare the svg variable with its atributes
    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    svg.setAttributeNS(null, "version", "1.1");

    // Append the SVG element to the DOM
    this.gameElement.appendChild(svg);

    // Render all game elements inside the SVG
    this.board.render(svg);
    this.player1.render(svg);
    this.player2.render(svg);
    this.ball.render(svg, this.player1, this.player2);
    this.score1.render(svg, this.player1.score);
    this.score2.render(svg, this.player2.score);
  }
}
