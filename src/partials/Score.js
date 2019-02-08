// Create alias for SVG namespace
import { SVG_NS } from "../settings";

// Declare the Score class
export default class Score {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  // Declare render function for Score class
  render(svg, score) {
    // declare the Score text variable with its atributes
    let text = document.createElementNS(SVG_NS, "text");
    text.setAttributeNS(null, "font-family", "'Silkscreen Web', monotype");
    text.setAttributeNS(null, "fill", "#FFF");
    text.setAttributeNS(null, "x", this.x);
    text.setAttributeNS(null, "y", this.y);
    text.textContent = score;

    // append the Score to the SVG
    svg.appendChild(text);
  }
}
