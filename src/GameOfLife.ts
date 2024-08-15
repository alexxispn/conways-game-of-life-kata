export class Board {
  static from(state: boolean[][]) {
    return new Board(state)
  }

  private constructor(private state: boolean[][]) {}

  getCellAt(CoordinateY: number, CoordinateX: number): boolean {
    if (CoordinateX < 0 || CoordinateY < 0) {
      return false
    }
    return this.state[CoordinateY][CoordinateX]
  }

  getNeighbours(CoordinateY: number, CoordinateX: number) {
    return [
      this.getCellAt(CoordinateY - 1, CoordinateX - 1),
      this.getCellAt(CoordinateY - 1, CoordinateX),
      this.getCellAt(CoordinateY - 1, CoordinateX + 1),
      this.getCellAt(CoordinateY, CoordinateX - 1),
      this.getCellAt(CoordinateY, CoordinateX + 1),
      this.getCellAt(CoordinateY + 1, CoordinateX - 1),
      this.getCellAt(CoordinateY + 1, CoordinateX),
      this.getCellAt(CoordinateY + 1, CoordinateX + 1),
    ]
  }
}

export class GameOfLife {
  private constructor(
    private state: boolean[][],
    private board: Board,
  ) {}

  static from(state: boolean[][]) {
    return new GameOfLife(state, Board.from(state))
  }

  nextGeneration() {
    const state = structuredClone(this.state)
    const neighbours = this.getNeighbours(1, 1)
    const aliveNeighbours = neighbours.filter((cell) => cell).length
    if (aliveNeighbours === 0) {
      state[1][1] = false
      this.setState(state)
      return
    }
    if (aliveNeighbours === 3) {
      state[1][1] = true
      this.setState(state)
      return
    }
    if (aliveNeighbours > 3) {
      state[1][1] = false
      this.setState(state)
      return
    }
  }

  setState(state: boolean[][]) {
    this.state = state
    this.board = Board.from(state)
  }

  getNeighbours(CoordinateY: number, CoordinateX: number) {
    return this.board.getNeighbours(CoordinateY, CoordinateX)
  }

  toString() {
    return this.state
      .map((cells) => cells.map((cell) => (cell ? "◽️" : "◼️")))
      .map((val) => val.join(""))
      .join("\n")
  }
}
