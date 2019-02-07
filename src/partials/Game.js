// Create alias for SVG namespace
import { SVG_NS } from "../settings";

// Imports Board class
import Board from "./Board";

import Paddle from "./Paddle";

// Declare the Game class
export default class Game {
  constructor(element, width, height) {
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(element);

    this.board = new Board(this.width, this.height);
  }

  // Declare render function for Game class
  render() {
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
  }
}
