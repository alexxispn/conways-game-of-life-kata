import { Coordinates } from "./Coordinates.js"
import { Cell } from "./Cell.js"

export class Board {
  static from(state: boolean[][]) {
    const cells = Coordinates.map(state, (status) => Cell.from(status))
    return new Board(state, cells)
  }

  private constructor(
    private state: boolean[][],
    private cells: Cell[][],
  ) {}

  getCellAt(coordinates: Coordinates): boolean {
    return coordinates.getFromMatrix(this.state) ?? false
  }

  getNeighbours(coordinates: Coordinates) {
    return coordinates.getNeighbours().map((coordinates) => this.getCellAt(coordinates))
  }

  map(fn: (cell: boolean, coordinates: Coordinates) => boolean) {
    return new Board(Coordinates.map(this.state, fn), this.cells)
  }

  toString() {
    return this.state
      .map((cells) => cells.map((cell) => (cell ? "◽️" : "◼️")))
      .map((val) => val.join(""))
      .join("\n")
  }
}
