import { Board } from "./Board.js"
import { Coordinates } from "./Coordinates.js"

export class GameOfLife {
  private constructor(private board: Board) {}

  static from(state: boolean[][]) {
    return new GameOfLife(Board.from(state))
  }

  nextGeneration() {
    const newBoard = this.board.clone()
    const coordinates = Coordinates.at(1, 1)
    const neighbours = this.board.getNeighbours(coordinates)
    const aliveNeighbours = neighbours.filter((cell) => cell).length

    if (aliveNeighbours === 0) {
      newBoard.setValue(coordinates, false)
    }
    if (aliveNeighbours === 3) {
      newBoard.setValue(coordinates, true)
    }
    if (aliveNeighbours > 3) {
      newBoard.setValue(coordinates, false)
    }

    this.board = newBoard
  }

  toString() {
    return this.board.toString()
  }
}
