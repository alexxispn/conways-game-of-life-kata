export abstract class Cell {
  protected constructor() {}

  static from(status: boolean) {
    return status ? Cell.alive() : Cell.dead()
  }

  static dead() {
    return new DeadCell()
  }

  static alive() {
    return new AliveCell()
  }

  abstract isAlive(): boolean

  abstract toString(): string

  abstract getNextGeneration(neighbors: Cell[]): Cell
}

class DeadCell extends Cell {
  isAlive(): boolean {
    return false
  }

  toString(): string {
    return "⬜️"
  }

  getNextGeneration(neighbors: Cell[]): Cell {
    const aliveNeighbours = neighbors.filter((cell) => cell.isAlive()).length
    if (aliveNeighbours === 3) {
      return Cell.alive()
    }
    return this
  }
}

class AliveCell extends Cell {
  isAlive(): boolean {
    return true
  }

  toString(): string {
    return "🔳"
  }

  getNextGeneration(neighbors: Cell[]): Cell {
    const aliveNeighbours = neighbors.filter((cell) => cell.isAlive()).length
    if (aliveNeighbours < 2 || aliveNeighbours > 3) {
      return Cell.dead()
    }
    return this
  }
}
