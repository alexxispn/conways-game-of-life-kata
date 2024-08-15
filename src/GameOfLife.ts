export class GameOfLife {
  private constructor(private readonly state: boolean[][]) {}

  static from(state: boolean[][]) {
    return new GameOfLife(state)
  }

  nextGeneration() {

  }

  toString() {
    return this.state.map(cells => cells.map(cell => cell ? "◽️" : "◼️")).map(val => val.join("")).join("\n")
  }
}
