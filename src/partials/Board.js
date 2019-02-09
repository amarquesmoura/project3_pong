// Create alias for SVG namespace
import { SVG_NS } from "../settings";

// Declare the Board class
export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  // Declare render function for Board class
  render(svg) {
    // declare the Board rectangle variable with its atributes
    let rect = document.createElementNS(SVG_NS, "rect");
    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height);
    rect.setAttributeNS(null, "fill", "#353535");
    
    // declare the mid-board line variable with its atributes
    let line = document.createElementNS(SVG_NS, "line");
    line.setAttributeNS(null, "x1", this.width / 2);
    line.setAttributeNS(null, "y1", "0");
    line.setAttributeNS(null, "x2", this.width / 2);
    line.setAttributeNS(null, "y2", this.height);
    line.setAttributeNS(null, "stroke", "#FFF");
    line.setAttributeNS(null, "stroke-width", "3");
    line.setAttributeNS(null, "stroke-dasharray", "20 15");
    
    // append the Board to the SVG
    svg.appendChild(rect);
    svg.appendChild(line);
  }
}
