// Create alias for SVG namespace
import { SVG_NS } from "../settings";

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;

    // Set x and y coordinates at the center
    this.reset();
  }

  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    // Randomize the new ball direction
    this.vy = 0;
    while (this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5);
    }
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  wallCollision() {
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y - this.radius <= 0;
    const hitBottom = this.y + this.radius >= this.boardHeight;

    if (hitLeft || hitRight) {
      this.vx = -this.vx;
    } else if (hitTop || hitBottom) {
      this.vy = -this.vy;
    }
  }

  paddleCollinsion(player1, player2) {
    if (this.vx > 0) {
      // get player2 coordinates
      let paddle = player2.coordinates(
        player2.x,
        player2.y,
        player2.width,
        player2.height
      );
      let { leftX, topY, bottomY } = paddle;
      // detect player2 collision
      if (
        this.x + this.radius >= leftX &&
        this.y >= topY &&
        this.y <= bottomY
      ) {
        this.vx = -this.vx;
      }
    } else {
      // get player1 coordinates
      let paddle = player1.coordinates(
        player1.x,
        player1.y,
        player1.width,
        player1.height
      );
      let { rightX, topY, bottomY } = paddle;
      // detect player1 collision
      if (
        this.x - this.radius <= rightX &&
        this.y >= topY &&
        this.y <= bottomY
      ) {
        this.vx = -this.vx;
      }
    }
  }

  goal(player) {
    this.player.score = this.player.score++;
    reset();
  }

  render(svg, player1, player2) {
    this.x += this.vx;
    this.y += this.vy;

    this.wallCollision();
    this.paddleCollinsion(player1, player2);

    // Declare the Ball circle variable with its atributes
    let circ = document.createElementNS(SVG_NS, "circle");
    circ.setAttributeNS(null, "r", this.radius);
    circ.setAttributeNS(null, "cx", this.x);
    circ.setAttributeNS(null, "cy", this.y);
    circ.setAttributeNS(null, "fill", "#FFF");

    // Append the Ball to the SVG
    svg.appendChild(circ);
  }
}
