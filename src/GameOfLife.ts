import { Board } from "./Board.js"
import { Cell } from "./Cell.js"

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

  private getNextState(neighbors: Cell[], cell: Cell): Cell {
    const aliveNeighbours = neighbors.filter((cell) => cell.isAlive()).length
    if (aliveNeighbours === 0) {
      return Cell.dead()
    }
    if (aliveNeighbours === 3) {
      return Cell.alive()
    }
    if (aliveNeighbours > 3) {
      return Cell.dead()
    }
    return cell
  }

  toString() {
    return this.board.toString()
  }
}
