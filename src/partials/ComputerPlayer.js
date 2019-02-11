// Create alias for SVG namespace
import { SVG_NS } from "../settings";

// Declare the Paddle class
export default class ComputerPlayer {
  constructor(boardHeight, width, height, x, y, upKey, downKey) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;

    
  }

  // Declare a function for moving up without going beyond board limits
  up() {
    this.y = Math.max(0, this.y - this.speed);
  }

  // Declare a function for moving down without going beyond board limits
  down() {
    this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
  }

  // Create an object with Paddle's coordinates
  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return { leftX, rightX, topY, bottomY };
  }

  // Declare render function for Paddle class
  render(svg) {
    // declare the Paddle rectangle variable with its atributes
    let rect = document.createElementNS(SVG_NS, "rect");
    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height);
    rect.setAttributeNS(null, "x", this.x);
    rect.setAttributeNS(null, "y", this.y);
    rect.setAttributeNS(null, "fill", "#FFF");

    // append the Paddle to the SVG
    svg.appendChild(rect);
  }
}
