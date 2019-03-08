// Create alias for SVG namespace
import { SVG_NS } from "../settings";

// Declare the Ball class
export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.ping = new Audio("public/sounds/pong-01.wav");
    this.reset();
  }

  // Declares the Reset function
  reset() {
    // set ball x and y coordinates at the center of the Board
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    // randomize the new ball direction
    this.vy = 0;
    while (this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5);
    }
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  // Declares the Wall Collision function
  wallCollision() {
    //set the min and max coordinates for the Ball
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y - this.radius <= 0;
    const hitBottom = this.y + this.radius >= this.boardHeight;
    //check if the Ball hit the boundaries
    if (hitLeft || hitRight) {
      this.vx = -this.vx;
    } else if (hitTop || hitBottom) {
      this.vy = -this.vy;
    }
  }

  // Declares the Paddle Collision function
  paddleCollinsion(player1, player2) {
    if (this.vx > 0) {
      // get player2 coordinates
      let paddle = player2.coordinates(
        player2.x,
        player2.y,
        player2.width,
        player2.height
      );
      // deconstruct player object
      let { leftX, topY, bottomY } = paddle;
      // detect player2 collision
      if (
        this.x + this.radius >= leftX &&
        this.y >= topY &&
        this.y <= bottomY
      ) {
        // invert Ball direction
        this.vx = -this.vx;
        // play a sound
        this.ping.play();
      }
    } else {
      // get player1 coordinates
      let paddle = player1.coordinates(
        player1.x,
        player1.y,
        player1.width,
        player1.height
      );
      // deconstruct player object
      let { rightX, topY, bottomY } = paddle;
      // detect player1 collision
      if (
        this.x - this.radius <= rightX &&
        this.y >= topY &&
        this.y <= bottomY
      ) {
        // invert Ball direction
        this.vx = -this.vx;
        // play a sound
        this.ping.play();
      }
    }
  }

  goalScore(player1, player2) {
    // declares right and left goal variables
    const rightGoal = this.x + this.radius >= this.boardWidth;
    const leftGoal = this.x - this.radius <= 0;
    // check if a goal was scored
    if (rightGoal) {
      this.goal(player1);
      // gives advantage to the scoring player
      this.direction = 1;
    } else if (leftGoal) {
      this.goal(player2);
      // gives advantage to the scoring player
     this.direction = -1;
    }
  }

  // Declares the Goal function
  goal(player) {
    // add to player's score
    player.score++;
    // put Ball back at the center after a goal
    this.reset();
  }

  // Declares the render function for Ball class
  render(svg, player1, player2) {
    // add movement vector to Ball's postion
    this.x += this.vx;
    this.y += this.vy;
    // call collision functions
    this.wallCollision();
    this.paddleCollinsion(player1, player2);

    this.goalScore(player1, player2);

    // declare the Ball circle variable with its atributes
    let circ = document.createElementNS(SVG_NS, "circle");
    circ.setAttributeNS(null, "r", this.radius);
    circ.setAttributeNS(null, "cx", this.x);
    circ.setAttributeNS(null, "cy", this.y);
    circ.setAttributeNS(null, "fill", "#FFF");

    // append the Ball to the SVG
    svg.appendChild(circ);
  }
}
