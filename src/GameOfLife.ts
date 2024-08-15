import { Board } from "./Board.js"

export class GameOfLife {
  private constructor(private board: Board) {}

  static from(state: boolean[][]) {
    return new GameOfLife(Board.from(state))
  }

  nextGeneration() {
    this.board = this.board.map((cell, coordinate) => {
      const neighbours = this.board.getNeighbours(coordinate)
      return this.getNextState(neighbours, cell)
    })
  }

  private getNextState(neighbors: boolean[], cell: boolean) {
    const aliveNeighbours = neighbors.filter((cell) => cell).length
    if (aliveNeighbours === 0) {
      return false
    }
    if (aliveNeighbours === 3) {
      return true
    }
    if (aliveNeighbours > 3) {
      return false
    }
    return cell
  }

  toString() {
    return this.board.toString()
  }
}
