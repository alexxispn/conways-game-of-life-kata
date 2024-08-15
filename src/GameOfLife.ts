export class GameOfLife {
  private constructor(private state: boolean[][]) {}

  static from(state: boolean[][]) {
    return new GameOfLife(state)
  }

  nextGeneration() {
    this.state = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ]
  }

  toString() {
    return this.state
      .map((cells) => cells.map((cell) => (cell ? "◽️" : "◼️")))
      .map((val) => val.join(""))
      .join("\n")
  }
}
