import { Board } from "./Board.js"

export class GameOfLife {
  private constructor(private board: Board) {}

  static from(state: boolean[][]) {
    return new GameOfLife(Board.from(state))
  }

  nextGeneration() {
    this.board = this.board.map((cell, coordinate) => {
      const neighbours = this.board.getNeighbours(coordinate)
      return cell.getNextGeneration(neighbours)
    })
  }

  toString() {
    return this.board.toString()
  }
}
