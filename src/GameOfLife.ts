import { Board } from "./Board.js"
import { Coordinates } from "./Coordinates.js"

export class GameOfLife {
  private constructor(private board: Board) {}

  static from(state: boolean[][]) {
    return new GameOfLife(Board.from(state))
  }

  nextGeneration() {
    const newBoard = this.board.clone()
    const neighbours = this.board.getNeighbours(Coordinates.at(1, 1))
    const aliveNeighbours = neighbours.filter((cell) => cell).length
    if (aliveNeighbours === 0) {
      newBoard.setValue(1, 1, false)
      this.board = newBoard
      return
    }
    if (aliveNeighbours === 3) {
      newBoard.setValue(1, 1, true)
      this.board = newBoard
      return
    }
    if (aliveNeighbours > 3) {
      newBoard.setValue(1, 1, false)
      this.board = newBoard
      return
    }
  }

  toString() {
    return this.board.toString()
  }
}
