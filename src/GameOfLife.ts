export class GameOfLife {
  private constructor(private state: boolean[][]) {}

  static from(state: boolean[][]) {
    return new GameOfLife(state)
  }

  nextGeneration() {
    if (this.state[2][2]) {
      this.state = [
        [false, false, false],
        [false, true, true],
        [false, true, true],
      ]
    } else {
      this.state = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ]
    }
  }

  toString() {
    return this.state
      .map((cells) => cells.map((cell) => (cell ? "◽️" : "◼️")))
      .map((val) => val.join(""))
      .join("\n")
  }
}
