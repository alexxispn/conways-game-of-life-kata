export class Cell {
  private constructor(private status: boolean) {}

  static from(status: boolean) {
    return new Cell(status)
  }

  getValue() {
    return this.status
  }
}
