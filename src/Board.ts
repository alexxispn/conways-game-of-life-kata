import { Coordinates } from "./Coordinates.js"

export class Board {
  static from(state: boolean[][]) {
    return new Board(state)
  }

  private constructor(private state: boolean[][]) {}

  getCellAt(coordinates: Coordinates): boolean {
    return coordinates.getFromMatrix(this.state) ?? false
  }

  getNeighbours(coordinates: Coordinates) {
    return coordinates.getNeighbours().map((coordinates) => this.getCellAt(coordinates))
  }

  map(fn: (cell: boolean, coordinates: Coordinates) => boolean) {
    return new Board(this.state.map((row, y) => row.map((cell, x) => fn(cell, Coordinates.at(y, x)))))
  }

  toString() {
    return this.state
      .map((cells) => cells.map((cell) => (cell ? "◽️" : "◼️")))
      .map((val) => val.join(""))
      .join("\n")
  }
}
