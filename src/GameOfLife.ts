export class GameOfLife {
  private constructor(private readonly state: boolean[][]) {}

  static from(state: boolean[][]) {
    return new GameOfLife(state)
  }

  nextGeneration() {

  }

  toString() {
    if (this.state[0][0]) {
      return "◽️◽️◽️\n◽️◽️◽️\n◽️◽️◽️"
    }

    return "◼️◼️◼️\n◼️◼️◼️\n◼️◼️◼️"
  }
}
