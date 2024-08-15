import { describe, expect, it } from "vitest"
import { Board } from "./Board.js"
import { Cell } from "./Cell.js"
import { Coordinates } from "./Coordinates.js"

describe("Board", () => {
  describe("getNeighbours", () => {
    it("obtains neighbours from the center cell", () => {
      const game = Board.from([
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ])

      const neighbours = game.getNeighbours(Coordinates.at(1, 1))

      expect(neighbours).toEqual([
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
      ])
    })

    it("obtains neighbours from the first left cell", () => {
      const game = Board.from([
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ])

      const neighbours = game.getNeighbours(Coordinates.at(0, 0))

      expect(neighbours).toEqual([
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.alive(),
      ])
    })
  })

  describe("getCellAt", () => {
    it("returns false for out of bounds cells", () => {
      const game = Board.from([
        [true, true, true],
        [true, true, true],
        [true, true, true],
      ])

      const cell = game.getCellAt(Coordinates.at(20, 0))

      expect(cell).toEqual(Cell.dead())
    })

    it("returns false for out of bounds cells horizontally in positive axis", () => {
      const game = Board.from([
        [true, true, true],
        [true, true, true],
        [true, true, true],
      ])

      const cell = game.getCellAt(Coordinates.at(0, 20))

      expect(cell).toEqual(Cell.dead())
    })

    it("returns false for out of bounds cells horizontally in negative axis", () => {
      const game = Board.from([
        [true, true, true],
        [true, true, true],
        [true, true, true],
      ])

      const cell = game.getCellAt(Coordinates.at(0, -20))

      expect(cell).toEqual(Cell.dead())
    })
  })
})
