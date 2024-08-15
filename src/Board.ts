import { Cell } from "./Cell.js"
import { Coordinates } from "./Coordinates.js"

export class Board {
  static from(state: boolean[][]) {
    const cells = Coordinates.map(state, (status) => Cell.from(status))
    return new Board(cells)
  }

  private constructor(private cells: Cell[][]) {}

  getCellAt(coordinates: Coordinates): Cell {
    return coordinates.getFromMatrix(this.cells) ?? Cell.dead()
  }

  getNeighbours(coordinates: Coordinates): Cell[] {
    return coordinates.getNeighbours().map((coordinates) => this.getCellAt(coordinates))
  }

  map(fn: (cell: Cell, coordinates: Coordinates) => Cell) {
    return new Board(Coordinates.map(this.cells, fn))
  }

  toString() {
    return this.cells
      .map((cells) => cells.map((cell) => (cell.isAlive() ? "◽️" : "◼️")))
      .map((val) => val.join(""))
      .join("\n")
  }
}
