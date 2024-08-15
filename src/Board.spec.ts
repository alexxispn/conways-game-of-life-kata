import { describe, expect, it } from "vitest"
import { Board } from "./Board.js"
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

      expect(neighbours).toEqual([false, false, false, false, false, false, false, false])
    })

    it("obtains neighbours from the first left cell", () => {
      const game = Board.from([
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ])

      const neighbours = game.getNeighbours(Coordinates.at(0, 0))

      expect(neighbours).toEqual([false, false, false, false, false, false, false, true])
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

      expect(cell).toBe(false)
    })

    it("returns false for out of bounds cells horizontally in positive axis", () => {
      const game = Board.from([
        [true, true, true],
        [true, true, true],
        [true, true, true],
      ])

      const cell = game.getCellAt(Coordinates.at(0, 20))

      expect(cell).toBe(false)
    })

    it("returns false for out of bounds cells horizontally in negative axis", () => {
      const game = Board.from([
        [true, true, true],
        [true, true, true],
        [true, true, true],
      ])

      const cell = game.getCellAt(Coordinates.at(0, -20))

      expect(cell).toBe(false)
    })
  })
})
