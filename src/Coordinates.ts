export class Coordinates {
  public static at(y: number, x: number) {
    return new Coordinates(y, x)
  }

  constructor(
    private readonly y: number,
    private readonly x: number,
  ) {}

  getFromMatrix<T>(matrix: T[][]): T | null {
    const row = matrix[this.y] ?? []
    return row[this.x] ?? null
  }

  getNeighbours() {
    return [
      Coordinates.at(this.y - 1, this.x - 1),
      Coordinates.at(this.y - 1, this.x),
      Coordinates.at(this.y - 1, this.x + 1),
      Coordinates.at(this.y, this.x - 1),
      Coordinates.at(this.y, this.x + 1),
      Coordinates.at(this.y + 1, this.x - 1),
      Coordinates.at(this.y + 1, this.x),
      Coordinates.at(this.y + 1, this.x + 1),
    ]
  }
}
