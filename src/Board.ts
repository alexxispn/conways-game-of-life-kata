import { Cell } from "./Cell.js"
import { Coordinates } from "./Coordinates.js"

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
    return coordinates.getFromMatrix(this.cells)?.getValue() ?? false
  }

  getNeighbours(coordinates: Coordinates) {
    return coordinates.getNeighbours().map((coordinates) => this.getCellAt(coordinates))
  }

  map(fn: (cell: boolean, coordinates: Coordinates) => boolean) {
    return Board.from(Coordinates.map(this.state, fn))
  }

  toString() {
    return this.cells
      .map((cells) => cells.map((cell) => (cell.getValue() ? "◽️" : "◼️")))
      .map((val) => val.join(""))
      .join("\n")
  }
}
