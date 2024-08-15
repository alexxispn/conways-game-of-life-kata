export class Cell {
  private constructor(private alive: boolean) {}

  static from(status: boolean) {
    return new Cell(status)
  }

  static dead() {
    return new Cell(false)
  }

  static alive() {
    return new Cell(true)
  }

  isAlive() {
    return this.alive
  }

  toString() {
    return this.isAlive() ? "◽️" : "◼️"
  }

  getNextGeneration(neighbors: Cell[]) {
    const aliveNeighbours = neighbors.filter((cell) => cell.isAlive()).length
    if (aliveNeighbours < 2) {
      return Cell.dead()
    }
    if (aliveNeighbours === 3) {
      return Cell.alive()
    }
    if (aliveNeighbours > 3) {
      return Cell.dead()
    }
    return this
  }
}
