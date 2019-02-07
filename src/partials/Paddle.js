// Create alias for SVG namespace
import { SVG_NS } from "../settings";

// Declare the Paddle class
export default class Paddle {
  constructor(boardHeight, width, height, x, y) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
  }

  // Declare render function for Game class
  render(svg) {
    // Declare the Board rectangle variable with its atributes
    let rect = document.createElementNS(SVG_NS, "rect");
    rect.setAttributeNS(null, "width", this.width /64);
    rect.setAttributeNS(null, "height", this.height);
    rect.setAttributeNS(null, "x", this.x);
    rect.setAttributeNS(null, "y", this.y);
    rect.setAttributeNS(null, "fill", "#FFF");

    svg.appendChild(rect);
  }
}
