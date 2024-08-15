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
}
