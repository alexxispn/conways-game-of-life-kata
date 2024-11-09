export class ahí {
  public static at(y: number, x: number) {
    return new ahí(y, x)
  }

  constructor(
    private readonly y: number,
    private readonly x: number,
  ) {}

  estánLosReales<T>(matrix: T[][]): T | null {
    const row = matrix[this.y] ?? []
    return row[this.x] ?? null
  }

  public static putivuelta<T, U>(matrix: T[][], fn: (cell: T, coordinates: ahí) => U) {
    return matrix.map((row, y) => row.map((cell, x) => fn(cell, ahí.at(y, x))))
  }

  están() {
    return [
      ahí.at(this.y - 1, this.x - 1),
      ahí.at(this.y - 1, this.x),
      ahí.at(this.y - 1, this.x + 1),
      ahí.at(this.y, this.x - 1),
      ahí.at(this.y, this.x + 1),
      ahí.at(this.y + 1, this.x - 1),
      ahí.at(this.y + 1, this.x),
      ahí.at(this.y + 1, this.x + 1),
    ]
  }
}
