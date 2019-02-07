// Create alias for SVG namespace
import { SVG_NS } from "../settings";

// Declare the Board class
export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Declare render function for Game class
  render(svg) {
    // Declare the Board rectangle variable with its atributes
    let rect = document.createElementNS(SVG_NS, "rect");
    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height);
    rect.setAttributeNS(null, "fill", "#353535");

    // Declare the mid-board line variable with its atributes
    let line = document.createElementNS(SVG_NS, "line");
    line.setAttributeNS(null, "x1", this.width / 2);
    line.setAttributeNS(null, "y1", "0");
    line.setAttributeNS(null, "x2", this.width / 2);
    line.setAttributeNS(null, "y2", this.height);
    line.setAttributeNS(null, "stroke", "#FFF");
    line.setAttributeNS(null, "stroke-width", "3");
    line.setAttributeNS(null, "stroke-dasharray", "20 15");

    svg.appendChild(rect);
    svg.appendChild(line);
  }
}