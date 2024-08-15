import { Coordinates } from "./Coordinates.js"

export class Board {
  static from(state: boolean[][]) {
    return new Board(state)
  }

  private constructor(private state: boolean[][]) {}

  getCellAt(coordinates: Coordinates): boolean {
    return coordinates.getFromMatrix(this.state) ?? false
  }

  setValue(coordinates: Coordinates, value: boolean) {
    coordinates.setAtMatrix(this.state, value)
  }

  clone() {
    return new Board(structuredClone(this.state))
  }

  getNeighbours(coordinates: Coordinates) {
    return coordinates.getNeighbours().map((coordinates) => this.getCellAt(coordinates))
  }

  toString() {
    return this.state
      .map((cells) => cells.map((cell) => (cell ? "◽️" : "◼️")))
      .map((val) => val.join(""))
      .join("\n")
  }
}
